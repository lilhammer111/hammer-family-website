<script setup>
defineProps(['name', 'avatar'])
</script>

<template>
  <div class="v-cen">
    <Avatar
      :image="avatar"
      size="small"
      shape="circle"
    />
    <span style="margin-left: 10px" class="font-bold">{{ name }}</span>
  </div>
</template>

<style scoped lang="scss">

</style>