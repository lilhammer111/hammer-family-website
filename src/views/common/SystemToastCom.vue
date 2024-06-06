<script setup>
import Toast from 'primevue/toast'
</script>

<template>
  <Toast position="top-right" group="dialog" :pt="{root: {style: 'z-index: 9999'}}">
    <template #message="slotProps">
      <div class="align-items-start" style="flex: 1">
        <div class="v-cen mg-btm-15" >
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"
                  style="margin-right: 10px" />
          <span> lilhammer (System Manager)</span>
        </div>
        <Divider></Divider>
        <div >{{ slotProps.message.summary }}</div>
      </div>
    </template>
  </Toast>
</template>

<style scoped lang="scss">

</style>