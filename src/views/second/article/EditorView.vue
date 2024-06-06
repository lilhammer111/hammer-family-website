<template>
    <div style="width:100%;height: calc(100vh - 80px)" class="flex-ver-start son-gap-20">
        <div class="flex-hor-sb son-gap-10" style="height: 10%;position: relative">
            <Tag severity="info" value="TITLE " v-if="articleForm.title" style="position:absolute;top:-5px"></Tag>
            <input v-model="articleForm.title" placeholder="Input title here.." class="editor-title-stl">
            <img
                v-if="coverUrl"
                :src="coverUrl"
                alt="cover"
                style="height:100%;padding:10px"
            />
            <Tag severity="info" value="COVER " v-if="coverUrl" style="position:absolute;top:-10px;right:0"></Tag>

            <FileUpload
                v-else
                mode="basic"
                choose-label="Upload a Cover"
                :url="imageUrl"
                name="image"
                accept="image/*"
                @upload="onUpload"
                auto
                with-credentials
            ></FileUpload>


        </div>
        <Editor
            v-model="draftText"
            style="height: 75%"
            @update:model-value="onTextUpdate"
            @load="editorLoad"
            placeholder="Please type here..."
        />
        <Button icon='pi pi-send' label="Publish" :pt="{root: {style: 'margin: 40px 0 0 0;width: 120px'}}"></Button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { baseUrl, imageUrl, staticImageUrl } from '@/api/index.js'
import _ from 'lodash'

const articleForm = ref({
    title: ''
})

const coverUrl = ref('')

const onUpload = ({ xhr, files }) => {
    console.log(xhr)
    console.log(files)
    const filename = files[0].name
    coverUrl.value = `${staticImageUrl}/${filename}`
}

// 定义并防抖处理保存草稿的函数
const debouncedSaveDraft = _.debounce(async (draft) => {
    console.log('upload draft', draft)
    const resp = await axios.post(`${baseUrl}/draft`, { text: draft }, { withCredentials: true })

    if (resp.status === 200) {
        console.log('Save draft ok')
    } else {
        console.log('Failed to save draft')
    }
}, 3000)

const onTextUpdate = (draft) => {
    debouncedSaveDraft(draft)
}

const draftText = ref('hello world')

const readDraft = async () => {
    const resp = await axios.get(
        `${baseUrl}/draft`,
        { withCredentials: true }
    )

    if (resp.status === 200) {
        console.log('Read draft ok', resp.data.data.text)
        return resp.data.data.text
    } else if (resp.status === 404) {
        console.log('Failed to read draft')
    }
}

const editorLoad = async ({ instance }) => {
    const draft = await readDraft()

    console.log('load event', instance)
    const delta = instance.clipboard.convertHTML(draft)
    instance.setContents(delta)
}

onMounted(() => {
    readDraft()
})
</script>

<style scoped lang="scss">
.editor-title-stl {
    border: none;
    font-size: 40px;
    background-color: inherit;
    padding: 0 10px;
}

.editor-title-stl:focus {
    border: none;
    outline: none;
    background-color: inherit;
}
</style>
