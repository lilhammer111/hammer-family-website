<template>
  <IconField iconPosition="left">
    <InputIcon class="pi pi-search"> </InputIcon>
    <InputText v-model="value1" placeholder="Just type anything" />
  </IconField>
</template>

<script setup>
import { ref } from 'vue'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const value1 = ref(null)
</script>

<style lang="scss">
.p-inputtext {
  border-radius: 20px;
}
</style>
