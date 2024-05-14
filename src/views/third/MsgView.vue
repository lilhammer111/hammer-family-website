<template>
  <TabMenu :model="items" class="mg-btm-10 card-border-radius light-shadow-style" />
  <MsgCom></MsgCom>
  <div class="card">
    <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
  </div>
</template>

<script setup>
import MsgCom from '@/components/MsgCom.vue'
import { ref } from 'vue'

const items = ref([
  { label: 'Latest'},
  { label: 'Featured' },
  { label: 'Trending' },
])
</script>

<style lang="scss">
.msg-card {
  height: 60px
}
</style>