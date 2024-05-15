<template>
  <div class="card flex justify-content-center gap-3" v-if="!isSignIn">
    <!-- <Button label="Link" link /> -->

    <router-link to="/index/login" rel="noopener">
      <Button label="Sign In" severity="secondary" />
    </router-link>
  </div>
</template>

<script setup>
import { isSignIn } from '@/stores/user.js'
</script>

<style lang="scss">
Button {
  margin: 0 10px;
  padding: 10px 5px;
}
</style>
