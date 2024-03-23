<template>
  <div class="card flex justify-content-center gap-3">
    <!-- <Button label="Link" link /> -->

    <router-link to="/login" rel="noopener">
      <Button label="Sign In" severity="secondary" />
    </router-link>
  </div>
</template>

<script setup></script>

<style lang="scss">
Button {
  margin: 0 10px;
  padding: 10px 5px;
}
</style>
