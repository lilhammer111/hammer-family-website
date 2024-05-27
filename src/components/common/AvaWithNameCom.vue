<script setup>
import { ref } from 'vue'

const { name, avatar } = defineProps(['name', 'avatar'])

const avatarSrc = ref(avatar)

function loadAvatarErrorHandle(event) {
  console.log('load avatar error handle event', event)
  avatarSrc.value = '@/assets/pictures/hammer_logo.webp'
}
</script>

<template>
  <div class="v-cen">
    <Avatar
      :image="avatarSrc"
      size="small"
      shape="circle"
      @error="loadAvatarErrorHandle"
    />
    <span style="margin-left: 10px" class="font-bold">{{ name }}</span>
  </div>
</template>

<style scoped lang="scss">

</style>