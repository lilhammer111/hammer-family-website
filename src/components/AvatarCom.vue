<template>
  <!--  <div style="position: relative;"-->
  <!--       @mouseover="avaItemEnabled = true"-->
  <!--       @mouseleave="avaItemEnabled = false"-->
  <!--  >-->
  <Avatar
    v-if="isSignIn"
    image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png"
    class="ava-stl"
    size="normal"
    shape="circle"
    @click="toggle"
  />

  <OverlayPanel ref="op" class="op-stl">
    <div class="op-item-stl v-cen">
      <i class="pi pi-sign-out mg-right-15"></i>
      <span>Logout</span>
    </div>
    <div class="divider-stl "></div>
    <div class="op-item-stl v-cen">

      <i class="pi  pi-cog mg-right-15"></i>
      <span>Setting</span>
    </div>
  </OverlayPanel>

</template>

<script setup>
import { isSignIn } from '@/stores/user.js'
import { ref } from 'vue'

const op = ref()
const toggle = (event) => {
  op.value.toggle(event)
}
</script>

<style scoped lang="scss">
.ava-stl {
  font-size: 55px;
  margin-right: 10px;
}

.ava-stl:hover {
  box-sizing: border-box;
  cursor: pointer;
  border: 2px solid #d9d9d9;
}

.ava-item-stl {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.op-item-stl {
  height: 30px;
  line-height: 30px;
  width: 100px;
  color: $font-color-gray;
}

.op-item-stl:hover {
  cursor: pointer;
  color: black;
}

.p-overlaypanel .p-overlaypanel-content {
  padding: 0.5px;
}

.divider-stl {
  border: 0.2px solid darkgray;
}
</style>
