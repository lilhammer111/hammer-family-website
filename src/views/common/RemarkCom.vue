<template>
    <div class="flex-hor-sb mg-btm-10">
        <div style="color: var(--bluegray-600)">{{ time }}</div>
        <div class="icon-stl">
            <IconNum icon="pi pi-thumbs-up" :num="thumbCount"></IconNum>
            <IconNum icon="pi pi-comment" :num="remarkCount" @click="toggleState"></IconNum>
        </div>
    </div>
    <div v-if="showRemark">
        <div class="input-stl mg-btm-10" style="position:relative">
            <Avatar style="margin-top:3px" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg"
                    size="normal" shape="square" />
            <InputText v-show="!showTextArea"
                       style="width:100%"
                       :class="inputClass"
                       type="text"
                       v-model="remarkForm.content"
                       @click="showTextArea = true"
                       :pt="inputTextPassThrough"
            />

            <!--      remark input textarea      -->
            <Textarea
                v-show="showTextArea"
                v-model="remarkForm.content"
                rows="5" cols="30"
                style="width:100%"
                auto-resize
            />

            <!--     submit remark button      -->
            <Button
                class="submit-btn-stl"
                v-if="showTextArea"
                severity="contract"
                label="Confirm"
                size="small"
                @click="createRemark"
            ></Button>

        </div>

        <!-- remark content -->
        <div class="comment-stl">
            <div class="every-comment-stl " v-for="(remarkItem, index) in remarkItems" :key="remarkItem.id">
                <div class="flex-hor-sb">
                    <div class="flex-hor-start">
                        <AvaWithNameCom
                            :avatar="remarkItem.avatar"
                            :name="remarkItem.username"
                        />
                    </div>
                    <div style="color: var(--bluegray-600);font-size: 14px">{{ remarkItem.created_at }}</div>
                </div>
                <div style="font-size:0.9rem;margin:0.5rem 0 0 2.6rem">{{ remarkItem.content }}</div>
                <Divider v-if="index < remarkItems.length - 1" />
            </div>
        </div>
    </div>

</template>

<script setup>
import IconNum from '@/views/common/IconNum.vue'
import { ref } from 'vue'
import axios from 'axios'
import { baseUrl, defaultPageQuery } from '@/api/index.js'
import AvaWithNameCom from '@/views/common/AvaWithNameCom.vue'


const props = defineProps({
    time: {
        type: String,
        default: ''  // 默认值，如果你希望它有一个具体的默认值，你可以设置它
    },
    thumbCount: {
        type: String,
        default: '0'  // 假设默认值为 0
    },
    remarkCount: {
        type: String,
        default: '0'  // 假设默认值为 0
    },
    parentId: {
        type: Number,
        default: -1  // 假设默认值为 0
    }
})

const recoverNonInputState = () => {
    showTextArea.value = false
    remarkForm.value.content = ''
}

const remarkForm = ref({
    content: ''
})

const createRemark = async () => {
    remarkForm.value.parent = props.parentId

    console.log('form', remarkForm.value)

    const resp = await axios.post(
        `${baseUrl}/remark`,
        remarkForm.value,
        { withCredentials: true }
    )

    if (resp.status === 201) {
        // append to current list
        console.log('create remark ok')
        recoverNonInputState()
    }
}


const convertDateToMMDD=()=> {

}

const readRemarkPaginated = async () => {
    const parentId = props.parentId
    console.log('props id', props.parentId)

    const resp = await axios.get(
        `${baseUrl}/remark/paginated/${parentId}`,
        { withCredentials: true, params: defaultPageQuery.value }
    )

    if (resp.status === 200) {
        console.log('get remark ok')
        remarkItems.value = resp.data.data
    }

    for (const remarkItem of remarkItems.value) {
        const userId = remarkItem.user_id
        const resp = await axios.get(
            `${baseUrl}/user/${userId}`,
            { withCredentials: true }
        )
        if (resp.status === 200) {
            const userData = resp.data.data
            console.log('user public info', userData)
            remarkItem.avatar = userData.avatar_url
            remarkItem.username = userData.username
        }
    }


}

const showRemark = ref(false)
const showTextArea = ref(false)

function toggleState() {
    showRemark.value = !showRemark.value
    showTextArea.value = false

    if (showRemark.value) {
        readRemarkPaginated()

    }
}

const inputTextPassThrough = {
    root: {
        placeholder: 'Be kind and leave a comment...'
    }
}


const inputClass = ref({})


const remarkItems = ref([
    {
        username: 'demon',
        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
        content: 'Wishing you a day filled with love and happiness!',
        date: 'Oct 5'
    },
    {
        username: 'demon',
        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png',
        content: 'May your dreams come true and your life be full of joy.',
        date: 'Oct 5'
    },
    {
        username: 'demon',
        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png',
        content: 'Sending you lots of love and best wishes!',
        date: 'Oct 5'
    },
    {
        username: 'demon',
        avatar: 'https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp',
        content: 'May you always find reasons to smile.',
        date: 'Oct 5'
    },
    {
        username: 'demon',
        avatar: 'https://primefaces.org/cdn/primevue/images/organization/walter.jpg',
        content: 'Hope your day is as amazing as you are!',
        date: 'Oct 5'
    }
])

</script>

<style scoped lang="scss">
.icon-stl {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
}

.input-stl {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 15px
}

.input-text-expand {
    height: 80px;
}

.submit-btn-stl {
    position: absolute;
    bottom: 4px;
    right: 4px;
    width: $btn-width-6
}

.comment-stl {
    border: var(--gray-200) 1px solid;
    padding: 10px
}

</style>