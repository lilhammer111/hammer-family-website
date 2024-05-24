<script setup>
import { isSignIn } from '@/stores/user.js'
import router from '@/router/index.js'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import axios from 'axios'

const dialogVisible = ref(false)

const text = ref('')

function showWishEditor() {
  router.push({ name: 'wish' })
  dialogVisible.value = true
}

const toast = useToast()

function createWish() {
  // 检查是否为空
  if (!text.value.trim()) {
    toast.add(
      {
        severity: 'error',
        summary: 'Hey gus! It failed to create your wish because your input is empty! Please check carefully!',
        life: 15000,
        group: 'dialog',
      }
    )
  } else {
    // 不为空则发送创建请求
    axios.post(
      `${import.meta.env.VITE_API_URL}/api/wish`,
      {
        content: text.value
      },
      {
        withCredentials: true
      }
    ).then((resp) => {
      console.log('create wish resp: ', resp)
    }).catch((err) => {
      console.log('create wish err', err)
    })
  }

  dialogVisible.value = false
}

</script>

<template>
  <Button
    v-if="isSignIn"
    style="margin-right: 15px; height: 36px"
    label="Write Wish"
    severity="contrast"
    outlined
    @click="showWishEditor"
  />

  <Dialog @update:visible="dialogVisible = false" class="flex-ver-gap-10" :visible="dialogVisible" modal header="Edit"
          :style="{ width: '25rem' }">
    <Textarea autofocus v-model="text" rows="5" cols="29" auto-resize
              placeholder="Thank you for sending your best wishes!" style="border:none" />
    <Button type="button" label="Create" style="width: 6rem;float:right" @click="createWish"></Button>
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