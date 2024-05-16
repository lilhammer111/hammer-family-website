
<template>
  <div class="card flex justify-content-center">
    <FloatLabel>
      <InputText id="username" v-model="value" />
      <label for="username">Username</label>
    </FloatLabel>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const value = ref(null);
</script>
