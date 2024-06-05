<script setup>
import { ref } from 'vue'

const userInput = ref('')

const editPlaceHolder = `Welcome to the Markdown Editor

Headings
Use \`#\` to create headings. For example:

# Heading 1
## Heading 2
### Heading 3

Lists
Create ordered and unordered lists. For example:

- Unordered list item
- Unordered list item
  - Nested unordered item

1. Ordered list item
2. Ordered list item
   1. Nested ordered item

Code
Include inline code with backticks: \`code\`

Block code with triple backticks:

\`\`\`
    print('hello world')
\`\`\`
`

const pt = ref({
    root: { style: `height: calc(100vh - 177px);border:none;background-color: #f7f7f7` },
})
</script>

<template>
    <Editor
        v-model="userInput"
        :placeholder="editPlaceHolder"
        :pt="pt"
    >
        <template #toolbar>
            <span>
                <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                <button v-tooltip.bottom="'Add a Picture'" class="ql-image"></button>
                <button v-tooltip.bottom="'Add a Code Block'" class="ql-code-block"></button>
            </span>
        </template>
    </Editor>
</template>

<style scoped lang="scss">

</style>