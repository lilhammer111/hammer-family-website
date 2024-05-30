<script setup>
import {computed} from 'vue';
import DOMPurify from 'dompurify';
import {marked} from 'marked';
import hljs from '//cdn.staticfile.org/highlight.js/11.7.0/es/highlight.min.js';
import mdInCode from "@/utils/mdInCode"; // 用于判断是否显示光标

const props = defineProps({
    // 输入的 markdown 文本
    text: {
        type: String,
        default: ""
    },
    // 是否需要显示光标？比如在消息流结束后是不需要显示光标的
    showCursor: {
        type: Boolean,
        default: false
    }
})

// 配置高亮
marked.setOptions({
    highlight: function (code, lang) {
        try {
            if (lang) {
                return hljs.highlight(code, {language: lang}).value
            } else {
                return hljs.highlightAuto(code).value
            }
        } catch (error) {
            return code
        }
    },
    gfmtrue: true,
    breaks: true
})

// 计算最终要显示的 html 文本
const html = computed(() => {
    // 将 markdown 转为 html
    function trans(text) {
        return DOMPurify.sanitize(marked.parse(text));
    }

    // 光标元素，可以用 css 美化成你想要的样子
    const cursor = '<span class="cursor"></span>';
    if (props.showCursor) {
        // 判断 AI 正在回的消息是否有未闭合的代码块。
        const inCode = mdInCode(props.text)
        if (inCode) {
            // 有未闭合的代码块，不显示光标
            return trans(props.text);
        } else {
            // 没有未闭合的代码块，将光标元素追加到最后。
            return trans(props.text + cursor);
        }
    } else {
        // 父组件明确不显示光标
        return trans(props.text);
    }
})

</script>

<template>
    <!-- tailwindcss:leading-7 控制行高为1.75rem -->
    <div v-html="html" class="markdown leading-7">
    </div>
</template>

<style lang="postcss">
/** 设置代码块样式 **/
.markdown pre {
    @apply bg-[#282c34] p-4 mt-4 rounded-md text-white w-full overflow-x-auto;
}
.markdown code {
    width: 100%;
}

/** 控制段落间的上下边距 **/
.markdown p {
    margin: 1.25rem 0;
}
.markdown p:first-child {
    margin-top: 0;
}

/** 小代码块样式，对应 markdown 的 `code` **/
.markdown :not(pre) > code {
    @apply bg-[#282c34] px-1 py-[2px] text-[#e06c75] rounded-md;
}

/** 列表样式 **/
.markdown ol {
    list-style-type: decimal;
    padding-left: 40px;
}
.markdown ul {
    list-style-type: disc;
    padding-left: 40px;
}

/** 光标样式 **/
.markdown .cursor {
    display: inline-block;
    width: 2px;
    height: 20px;
    @apply bg-gray-800 dark:bg-gray-100;
    animation: blink 1.2s step-end infinite;
    margin-left: 2px;
    vertical-align: sub;
}
@keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
