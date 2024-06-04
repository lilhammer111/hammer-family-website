<template>
    <div class="notebook-title-stl   flex-hor-sb">
        <span>{{ label }}</span>
        <Button
            icon="pi pi-plus"
            text
            rounded
            :pt="{root: {style: 'margin:0'}}"
            @click="action"
        ></Button>
    </div>
    <div
        v-for="(item, idx) of items"
        :key="idx"
        class="notebook-item-stl notebook-common-stl flex-hor-sb"
        @click="resetCurrentArticle(item)"
    >
        <span>{{ item.title }}</span>
        <Button
            icon="pi pi-ellipsis-h"
            text
            :pt="btnPt"
        >
        </Button>
    </div>
</template>

<script setup>
import { useNbStore } from '@/stores/notebook.js'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import ClipboardJS from 'clipboard'
import markdownItAnchor from 'markdown-it-anchor'


onMounted(() => {
    new ClipboardJS('.pi-copy')
})


hljs.highlightAll()
// 配置 markdown-it
const md = new MarkdownIt('default', {
    highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                let copyTargetId = Math.random().toString(36).substring(7)
                let copyBtn = `<button class="pi pi-copy" style="border:none;float: right;font-size: 20px;background-color: transparent;color:rgba(169, 169, 169, 0.5);padding: 4px 6px; border-radius: 5px;cursor: pointer;outline: none;" data-clipboard-target="#code-${copyTargetId}"></button>`

                let convertedHtml = hljs.highlight(str, {
                    language: lang,
                    ignoreIllegals: true
                }).value
                return `<pre class="hljs" style="padding: 20px 40px;border-radius: 4px;font-size:16px;white-space: pre-wrap">${copyBtn}<code id="code-${copyTargetId}">${convertedHtml}</code></pre>`
            } catch (__) {
                return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>` // 使用 escapeHtml 来处理无法高亮的代码
            }
        }

        return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>` // 处理无指定语言的代码
    }
})
    .use(markdownItAnchor, {
        callback(token, anchor_info) {
            console.log('token', token)
            console.log('anchor_info', anchor_info)
            const text = anchor_info.title
            const slug = anchor_info.slug
            if (token.tag === 'h1') {
                nbStore.curDirContents.push(
                    {
                        text,
                        slug
                    }
                )
            }
        }
    })


defineProps({
    label: String,
    kind: String,
    action: Function,
    items: Array
})


const nbStore = useNbStore()
const resetCurrentArticle = async (item) => {
    nbStore.curArticle = item

    console.log('cur doc', nbStore.curArticle)

    if (nbStore.curArticle['text_url']) {
        const resp = await axios.get(
            nbStore.curArticle['text_url']
        )

        if (resp.status === 200) {
            nbStore.curArticle['text'] = md.render(resp.data)
        } else {
            console.log('get static doc is not 200')
        }
    } else {
        nbStore.curArticle['text'] = md.render(nbStore.curArticle['text'])
    }
    nbStore.displayCurrentArticle = true
}

// stl
const btnPt = ref({
    icon: { style: 'color: var(--bluegray-400);font-size: 1rem' },
    root: { style: 'height: 1.5rem;width:1.5rem;margin:0' }
})
</script>


<style>
</style>