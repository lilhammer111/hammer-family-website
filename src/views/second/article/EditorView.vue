<template>
    <div style="width:100%;height: calc(100vh - 80px)" class="flex-ver-start son-gap-20">
        <div class="flex-hor-sb son-gap-10" style="height: 10%;position: relative">
            <Tag severity="info" value="TITLE " v-if="articleForm.title" style="position:absolute;top:-5px"></Tag>
            <input type="text" style="width: 80%" v-model="articleForm.title" placeholder="Input title here.."
                   class="editor-title-stl">
            <img
                v-if="articleForm.cover_url"
                :src="articleForm.cover_url"
                alt="cover"
                style="height:100%;padding:10px"
            />
            <Tag severity="info" value="COVER " v-if="articleForm.cover_url"
                 style="position:absolute;top:-10px;right:0"></Tag>

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
            v-model="articleForm.text"
            :pt="{root: {style: 'height: 75%'}}"
            @update:model-value="onTextUpdate"
            @load="editorLoad"
            placeholder="Please type here..."
        />
        <div class="flex-hor-start son-gap-10" style="margin-top: 40px">
            <Button icon='pi pi-send' label="Publish" :pt="{root: {style: 'margin: 0;width: 120px'}}"
                    @click="publishArticle"></Button>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { baseUrl, imageUrl, staticImageUrl } from '@/api/index.js'
import _ from 'lodash'
import { useArticleStore } from '@/stores/article.js'
import router from '@/router/index.js'


const { articleForm } = useArticleStore()

const publishArticle = async () => {
    const resp = await axios.post(
        `${baseUrl}/article`,
        articleForm,
        { withCredentials: true }
    )

    if (resp.status === 201) {
        console.log(resp.data.data)
        await router.push({ name: 'article' })
        // todo delete draft

    } else {
        console.log('failed to create article')
    }

}


const onUpload = ({ xhr, files }) => {
    console.log(xhr)
    console.log(files)
    const filename = files[0].name
    articleForm.cover_url = `${staticImageUrl}/${filename}`
}

// 定义并防抖处理保存草稿的函数
const debouncedSaveDraft = _.debounce(async (draft) => {
    // console.log('upload draft', draft)
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
</script>

<style scoped lang="scss">
.editor-title-stl {
    border: none;
    font-size: 28px;
    background-color: inherit;
    padding: 0 10px;
}

.editor-title-stl:focus {
    border: none;
    outline: none;
    background-color: inherit;
}
</style>
