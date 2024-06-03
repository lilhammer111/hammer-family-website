<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
    modelValue: String,
    label: String,
    options: Array,
    required: Boolean
})


const internalClass = computed(() => {
    return props.required ? 'required' : ''
})

const emit = defineEmits(['update:modelValue'])
const updateValue = (event) => {
    emit('update:modelValue', event.name.toLowerCase())
}

const selectValue = ref()
</script>

<template>
    <div class="flex-ver-start son-gap-10">
        <label :for="label" :class="internalClass">{{ label }}</label>
        <Dropdown v-model="selectValue" @update:modelValue="updateValue" :options="options" optionLabel="name"
                  placeholder="Select a Kind" />
    </div>
</template>

<style scoped lang="scss">

</style>