<script setup>
import { ConfigProvider } from 'radix-vue'
</script>

<template>
  <ConfigProvider dir="rtl" :scroll-body="false">
    <slot />
  </ConfigProvider>
</template>
