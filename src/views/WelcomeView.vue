<template>
  <div class="welcome">
    <router-link to="/home" target="_blank" rel="noopener">
      <Button label="Hey , Hammer" link class="p-button-lg" icon="pi pi-send" iconPos="right" />
    </router-link>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'
</script>

<style>
.welcome {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
