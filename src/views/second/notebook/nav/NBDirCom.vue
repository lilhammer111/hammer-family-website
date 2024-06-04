<script setup>
import {  ref } from 'vue'
import NBItemCom from '@/views/second/notebook/nav/NBItemCom.vue'


const tutorialProps = ref({
    label: 'Tutorial',
    kind:'tutorial',
    action: ()=>{}
})

const noteProps = ref({
    label: 'Note',
    kind:'note',
    action: ()=>{}
})


</script>

<template>
    <div>
        <NBItemCom :label="noteProps.label" :action="noteProps.action"></NBItemCom>
        <NBItemCom :label="tutorialProps.label" :action="tutorialProps.action" ></NBItemCom>
    </div>
</template>

<style scoped lang="scss">

</style>