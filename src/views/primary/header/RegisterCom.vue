<template>
  <div class="card flex justify-content-center gap-3" v-if="!isSignIn">
    <!-- <Button label="Link" link /> -->

    <router-link to="/index/register" rel="noopener">
      <Button label="Sign Up" />
    </router-link>
  </div>
</template>

<script setup>
import { isSignIn } from '@/stores/user.js'
</script>

<style lang="scss" scoped></style>
