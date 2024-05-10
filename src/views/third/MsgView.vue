<template>
  <Card class="mg-btm-15 msg-card"></Card>
  <MsgCom></MsgCom>
  <div class="card">
    <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
  </div>
</template>

<script setup>
import MsgCom from '@/components/MsgCom.vue'
</script>

<style lang="scss">
.msg-card {
  height: 60px
}
</style>