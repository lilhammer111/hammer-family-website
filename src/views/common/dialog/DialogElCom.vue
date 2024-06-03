<script setup>
import { computed } from 'vue'

const props = defineProps({
    label: String,
    required: Boolean,
})


const internalClass = computed(() => {
    return props.required? 'required' : ''
})
</script>

<template>
    <div class="flex-ver-start son-gap-10">
        <label :for="label" :class="internalClass">{{ label }}</label>
        <slot name="content"></slot>
    </div>
</template>

<style scoped lang="scss">

</style>