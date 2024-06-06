<template>
    <div style="width:100%">
        <Editor
            v-model="draftText"
            editorStyle="height: calc(100vh - 120px)"
            @update:model-value="onTextUpdate"
            @load="editorLoad"
        />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { baseUrl } from '@/api/index.js'
import _ from 'lodash'


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
