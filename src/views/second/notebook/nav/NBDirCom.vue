<script setup>
import { ref } from 'vue'
import NBItemCom from '@/views/second/notebook/nav/NBItemCom.vue'
import { useNbStore } from '@/stores/notebook.js'

const nbStore = useNbStore()

const tutorialProps = ref({
    label: 'Tutorial',
    kind: 'tutorial',
    action: () => {
    },
    items: nbStore.tutorialItems
})

const noteProps = ref({
    label: 'Note',
    kind: 'note',
    action: () => {
    },
    items: nbStore.noteItems
})

</script>

<template>
    <div>
        <NBItemCom :label="noteProps.label" :action="noteProps.action" :items="noteProps.items"></NBItemCom>
        <NBItemCom :label="tutorialProps.label" :action="tutorialProps.action" :items="tutorialProps.items"></NBItemCom>
    </div>
</template>

<style scoped lang="scss">

</style>