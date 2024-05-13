<script setup>
import { isSignIn } from '@/stores/user.js'
</script>

<template>
  <Button v-if="isSignIn"
          style="margin-right: 15px; height: 36px"
          label="Write Wish"
          severity="contrast"
          outlined />
</template>

<style scoped lang="scss">

</style>