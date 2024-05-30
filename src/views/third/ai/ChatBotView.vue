<script setup>
import { ref, watchEffect } from 'vue'
import { useUserStore } from '@/stores/user.js'
import aiAvatar from '@/assets/pictures/hammer_ai_avatar.webp'
import { baseUrl } from '@/api/index.js'
import markdownit from 'markdown-it'

const pt = ref({
    card: {
        root: { style: 'height:calc(100vh - 105px);' },
        body: { style: 'height: 100%;padding:1rem' },
        caption: { style: 'height: 3%' },
        content: { style: 'height: 94%;overflow-y: auto' },
        footer: { style: 'height: 3%;position:relative' }
    },
    textarea: {}
})

const md = markdownit()

const chatCompletion = async () => {
    if (!userInput.value.trim()) {
        return
    }

    conversation.value.push(
        {
            role: 'user',
            content: userInput.value
        }
    )


    const data = {
        messages: conversation.value,
        model: 'moonshot-v1-8k',
        max_token: null,
        temperature: null,
        top_p: null,
        n: null,
        presence_penalty: null,
        frequency_penalty: null,
        stop: null,
        stream: true
    }

    try {
        const resp = await fetch(
            `${baseUrl}/ai`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            }
        )


        if (resp.ok) {
            dialogs.value.push(
                {
                    userText: userInput.value,
                    aiText: '',
                }
            )


            const curConversationIndex = dialogs.value.length - 1
            let buffer = ''
            const reader = resp.body.getReader()
            const decoder = new TextDecoder('utf-8')
            let accumContent = ''

            // eslint-disable-next-line no-constant-condition
            while (true) {
                const { done, value } = await reader.read()

                if (done) {
                    break
                }

                buffer += decoder.decode(value)
                let parts = buffer.split('\ndata: ')
                buffer = parts.pop()

                parts.forEach(part => {
                    if (part.trim()) {
                        try {
                            const dataJson = JSON.parse(part)
                            const content = extractContent(dataJson)
                            accumContent += content
                            dialogs.value[curConversationIndex].aiText = md.render(accumContent)
                            // animateText(content, curConversationIndex)
                        } catch (e) {
                            console.error('Error parsing JSON:', e)
                        }
                    }
                })
            }

        } else {
            console.log('response status is not ok')
        }

    } catch (e) {
        console.log(e)

        dialogs.value.push({
            userText: userInput.value,
            aiText: '小锤出错了，抱歉~~~'
        })
    } finally {
        console.log('kankan dialogs', dialogs.value)
        userInput.value = ''
    }
}

// function animateText(newText, index) {
//     let pos = 0;
//     let accumContent = dialogs.value[index].rawText || ''; // 使用一个新的属性来存储未渲染的纯文本
//
//     const interval = setInterval(() => {
//         if (pos < newText.length) {
//             accumContent += newText.charAt(pos);  // 累加单个字符到未渲染的纯文本
//             dialogs.value[index].rawText = accumContent;  // 更新纯文本存储
//             dialogs.value[index].aiText = md.render(accumContent);  // 渲染累积的纯文本为 HTML
//             pos++;
//         } else {
//             clearInterval(interval);
//         }
//     }, 5); // 调整速度以适应视觉效果
// }


function extractContent(dataJson) {
    // 检查dataJson是否有choices数组和delta对象
    return dataJson['choices'][0]?.delta?.content || '';
}

const userInput = ref('')
const textAreaVis = ref(false)

const dialogs = ref([
    {
        userText: '你叫什么名字？',
        aiText: '我叫lilhammer，是一个不太聪明的ai机器人，你可以问我一些简单的问题，问难的问题小心我捶你。',
    }
])

const conversation = ref([
    {
        role: 'system',
        content: '你是 ai hammer，你的生日是2023年2月28号，你家住在上海市普陀区隆德小区8号楼。在回答用户的问题的时候，你还可以使用一些**婴语**来回答，' +
            '比如，嗯嗯~咿咿~呀呀~，当前这样戏剧性的回答方式也要把握好度，在掺杂咿咿呀呀的**婴语**的时候也能让用户听懂你整体的意思' +
            '同时，你会拒绝一切涉及恐怖主义，种族歧视，黄色暴力等问题的回答。' +
            'Hammer AI 为专有名词，不可翻译成其他语言。'
    }
])

const userStore = useUserStore()

const turnBack = () => {
    userInput.value = userInput.value.trim()

    if (!userInput.value) {
        textAreaVis.value = false
    }
}

const textAreaRef = ref(null)

watchEffect(() => {
    if (textAreaRef.value) {
        textAreaRef.value.$el.focus()
    }
})

const src = ref(aiAvatar)
</script>

<template>
    <Card :pt="pt.card">
        <template #title>
            HAMMER AI
            <Divider></Divider>

        </template>
        <template #content>
            <div v-for="(dialog, idx) of dialogs" :key="idx" class="flex-ver-start son-gap-10" style="margin: 10px 0">
                <div class="flex-hor-start-start son-gap-10">
                    <Avatar
                        :image="userStore.userData.avatar_url"
                        size="normal"
                        shape="circle"
                        style="margin-top:5px"
                    />
                    <div class="dialog-stl">{{ dialog.userText }}</div>
                </div>
                <div class="flex-hor-end-start son-gap-10">
                    <div class="dialog-stl" v-html="dialog.aiText"></div>
                    <Avatar
                        :image="src"
                        size="normal"
                        shape="circle"
                        style="margin-top:5px"
                    ></Avatar>
                </div>
            </div>

        </template>

        <template #footer>
            <div class="flex-hor-start-end bottom-comp">
                <InputText
                    v-if="!textAreaVis"
                    @click="textAreaVis = true"
                    class="input-text-stl"
                ></InputText>
                <Textarea
                    v-if="textAreaVis"
                    ref="textAreaRef"
                    :pt="pt.textarea"
                    class="input-text-stl"
                    auto-resize
                    v-model="userInput"
                    @blur="turnBack"
                ></Textarea>
                <Button
                    icon="pi pi-send"
                    severity="contrast"
                    rounded
                    class="btn-stl"
                    @click="chatCompletion"></Button>
            </div>
        </template>
    </Card>
</template>

<style scoped lang="scss">
@import "src/styles/variables";

.bottom-comp {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.input-text-stl {
    background-color: $border-white;
    max-height: 200px;
    width: 100%;
    border: none;
}

.btn-stl {
    height: 2rem;
    width: 2rem;
}

.dialog-stl {
    width: 80%;
    background-color: $border-white;
    border-radius: 10px;
    padding: 10px;
}
</style>