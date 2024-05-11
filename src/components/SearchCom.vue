<template>
  <IconField iconPosition="left">
    <InputIcon class="pi pi-search"> </InputIcon>
    <InputText v-model="input" placeholder="search anything you interest" />
  </IconField>
</template>

<script setup>
import { ref } from 'vue'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const input = ref(null)
</script>

<style lang="scss">
</style>
