<template>
  <div class="main-ctr">
    <div class="title-style main-cont-wd">Guestbook</div>
    <MsgCom></MsgCom>
    <div class="card">
      <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
    </div>
  </div>
</template>

<script setup>
import MsgCom from '@/components/MsgCom.vue'
// import { ref } from 'vue'

// import Menu from 'primevue/menu'
// const menu = ref(null)
// const toggle = (event) => {
//   menu.value.toggle(event)
// }
</script>

<style lang="scss">
.p-panel {
  margin: 25px auto;
  width: 70%;
}
</style>
