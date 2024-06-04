<script setup>
const props = defineProps(['name', 'avatar'])

function loadAvatarErrorHandle(event) {
  console.log('load avatar error handle event', event)
  // eslint-disable-next-line vue/no-mutating-props
  props.avatar = '@/assets/pictures/hammer_logo.webp'
}
</script>

<template>
  <div class="v-cen">
    <Avatar
      :image="props.avatar"
      size="small"
      shape="circle"
      @error="loadAvatarErrorHandle"
    />
    <span style="margin-left: 10px" class="font-bold">@{{ props.name }}</span>
  </div>
</template>

<style scoped lang="scss">

</style>