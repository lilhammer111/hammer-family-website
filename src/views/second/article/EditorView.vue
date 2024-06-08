<template>
    <div style="width:100%;height: calc(100vh - 80px)" class="flex-ver-start son-gap-20">
        <div class="flex-hor-sb-start son-gap-10" id="editor-header">
            <div class="flex-ver-start son-gap-20" style="flex-grow:1">
                <div class="flex-hor-start-start son-gap-10" style="position: relative">
                    <Transition name="fade">
                        <Tag
                            v-if="articleStore.articleForm.title"
                            severity="contrast"
                            value="TITLE"
                            rounded
                            :pt="tagPt"></Tag>
                    </Transition>

                    <Textarea
                        cols="50"
                        rows="1"
                        v-model="articleStore.articleForm.title"
                        placeholder="Input title here.."
                        auto-resize
                        :pt="textareaPt"
                        :pt:root:style="{fontSize: '24px'}"
                    ></Textarea>
                </div>
                <div class="flex-hor-start-start son-gap-10" style="position: relative">
                    <Transition name="fade">
                        <Tag
                            v-if="articleStore.articleForm.summary"
                            severity="contrast"
                            value="SUMMARY"
                            rounded
                            :pt="tagPt"></Tag>
                    </Transition>

                    <Textarea
                        rows="3"
                        auto-resize
                        v-model="articleStore.articleForm.summary"
                        placeholder="Input summary here.."
                        :pt="textareaPt"
                    >
                    </Textarea>
                </div>
            </div>

            <div class="flex-ver-start son-gap-20" style="height:100%">
                <div style="position:relative;height:100%;padding:10px">
                    <img
                        v-if="articleStore.articleForm.cover_url"
                        :src="articleStore.articleForm.cover_url"
                        alt="cover"
                        style="height:100%"
                    />
                    <div v-if="articleStore.articleForm.cover_url" style="position:absolute"></div>
                    <FileUpload
                        v-if="!articleStore.articleForm.cover_url"
                        mode="basic"
                        choose-label="Cover"
                        :url="imageUrl"
                        name="image"
                        accept="image/*"
                        @upload="onUpload"
                        auto
                        with-credentials
                    ></FileUpload>
                </div>

                <Tag
                    severity="contrast"
                    value="COVER "
                    v-if="articleStore.articleForm.cover_url"
                    rounded
                    :pt="tagPt"
                ></Tag>
            </div>
        </div>

        <Editor
            v-model="articleStore.articleForm.text"
            :pt:root:style="{height: '75%',backgroundColor:'inherit'}"
            :pt:toolbar:style="{border: '2px solid black',borderBottomWidth: '1px',backgroundColor:'inherit'}"
            :pt:content:style="{border: '2px solid black',borderTopWidth: '1px',backgroundColor:'inherit'}"
            @update:model-value="onTextUpdate"
            @load="editorLoad"
            placeholder="Please type here..."
        />

        <div class="flex-hor-sb son-gap-10" style="margin-top: 40px">
            <Chips
                v-model="articleStore.articleForm.tags"
                placeholder="Add Tags..."
                :pt:container:style="{outline:'none',border:'none','background-color':'inherit','box-shadow':'none'}"
                :pt:token:style="{background:'black',color:'white','border-radius': '13.5px'}"
                :allowDuplicate="false"
            ></Chips>
            <Button
                icon='pi pi-send'
                label="Publish"
                :pt="{root: {style: 'margin: 0;width: 120px'}}"
                @click="publishArticle"
            ></Button>

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { baseUrl, imageUrl, staticImageUrl } from '@/api/index.js'
import _ from 'lodash'
import { useArticleStore } from '@/stores/article.js'
import router from '@/router/index.js'

const articleStore = useArticleStore()

const publishArticle = async () => {
    const resp = await axios.post(
        `${baseUrl}/article`,
        articleStore.articleForm,
        { withCredentials: true }
    )

    if (resp.status === 201) {
        console.log(resp.data.data)
        await router.push({ name: 'article' })
        // todo delete draft
        articleStore.clearArticleForm()
        await postDraft('')
    } else {
        console.log('failed to create article')
    }

}


const onUpload = ({ xhr, files }) => {
    console.log(xhr)
    console.log(files)
    const filename = files[0].name
    articleStore.articleForm.cover_url = `${staticImageUrl}/${filename}`
}
const postDraft = async (draft) => {
    const resp = await axios.post(`${baseUrl}/draft`, { text: draft }, { withCredentials: true })

    if (resp.status === 200) {
        console.log('Save draft ok')
    } else {
        console.log('Failed to save draft')
    }
}
// 定义并防抖处理保存草稿的函数
const debouncedSaveDraft = _.debounce(async (draft) => {
    // console.log('upload draft', draft)
    await postDraft(draft)
}, 3000)

const onTextUpdate = (draft) => {
    debouncedSaveDraft(draft)
}


const readDraft = async () => {
    const resp = await axios.get(
        `${baseUrl}/draft`,
        { withCredentials: true }
    )

    if (resp.status === 200) {
        // console.log('Read draft ok', resp.data.data.text)
        return resp.data.data.text
    } else if (resp.status === 404) {
        console.log('Failed to read draft')
    }
}

const editorLoad = async ({ instance }) => {
    const draft = await readDraft()
    const delta = instance.clipboard.convertHTML(draft)
    instance.setContents(delta)
}


onMounted(() => {
    readDraft()
})

// stl

const tagPt = ref({
    root: { style: 'position:absolute;transform: translateY(-60%);font-size:0.5rem' }
})

const textareaPt = ref(
    {
        root:
            {
                style: 'outline: none;border:none;background-color:inherit;box-shadow:none;width:100%'
            }
    }
)

</script>

<style scoped lang="scss">
:deep(.p-editor-container .p-editor-content .ql-editor) {
    background: inherit;
}

#editor-header {
    height: 15%;
    position: relative;
    padding: 15px;
    border-radius: 6px;
}

.editor-title-stl {
    border: none;
    font-size: 16px;
    background-color: inherit;
    padding: 0 10px;
}

.editor-title-stl:focus {
    border: none;
    outline: none;
    background-color: inherit;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
