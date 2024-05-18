<script setup>
import { isSignIn } from '@/stores/user.js'
import router from '@/router/index.js'
import { ref } from 'vue'

const visible = ref(false)

const text = ref('')

function createWish() {
  router.push({ name: 'wish' })
  visible.value = true
}

</script>

<template>
  <Button
    v-if="isSignIn"
    style="margin-right: 15px; height: 36px"
    label="Write Wish"
    severity="contrast"
    outlined
    @click="createWish"
  />

  <Dialog @update:visible="visible = false" class="flex-ver-gap-10" :visible="visible" modal header="Edit"
          :style="{ width: '25rem' }">
    <Textarea autofocus v-model="text" rows="5" cols="29" auto-resize
              placeholder="Thank you for sending your best wishes!" style="border:none" />
    <Button type="button" label="Create" style="width: 6rem;float:right" @click="visible = false"></Button>
  </Dialog>
</template>

<style scoped lang="scss">
/* 选择 PrimeVue 的 Textarea 组件 */
.p-inputtext {
  box-shadow: none;
}

.p-inputtext:enabled:focus {
  border: none;
  outline: none;
}
</style>