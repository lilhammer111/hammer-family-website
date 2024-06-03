<script setup>
import { computed } from 'vue'

const props = defineProps({
    label: String,
    modelValue: String,
    required: Boolean
})


const internalClass = computed(() => {
    return props.required ? 'required' : ''
})

const emit = defineEmits(['update:modelValue'])
const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>

<template>
    <div class="flex-ver-start son-gap-10">
        <label :for="label" :class="internalClass">{{ label }}</label>
        <InputText :id="label" :value="modelValue" @input="updateValue" aria-describedby="username-help" />
    </div>
</template>

<style scoped lang="scss">

</style>