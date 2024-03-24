<template>
  <Panel
    v-for="item in items"
    :key="item.id"
    class="light-shadow-style"
    style="border-radius: 20px"
    toggleable
  >
    <template #header>
      <div class="flex align-items-center gap-2 v-cen">
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          size="small"
          shape="circle"
        />
        <span style="margin-left: 10px" class="font-bold">{{ item.user.name }}</span>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-wrap align-items-center justify-content-between gap-2 ver-cen-sb">
        <span class="p-text-secondary">written at {{ item.created_at }}</span>
        <div class="flex align-items-center gap-2 v-cen">
          <IconNum icon="pi pi-thumbs-up" :num="item.tu_num"></IconNum>
          <IconNum icon="pi pi-comment" :num="item.com_num"></IconNum>
        </div>
      </div>
    </template>
    <template #icons>
      <button class="p-panel-header-icon p-link mr-2" @click="toggle"></button>
      <!-- <Menu ref="menu" id="config_menu" :model="items" popup /> -->
    </template>
    <p class="m-0">{{ item.msg }}</p>
  </Panel>
</template>

<script setup>
import IconNum from '@/components/IconNum.vue'
import { ref } from 'vue'
const items = ref([
  {
    user: {
      name: 'Demon'
    },
    created_at: '2024/1/31 15:30',
    msg: '祝你们永远幸福哦！',
    tu_num: '15',
    com_num: '16'
  },
  {
    user: {
      name: 'Demon'
    },
    created_at: '2024/1/31 15:30',
    msg: '要做幸福快乐的宝宝！ 小锤子，我们永远爱你哦',
    tu_num: '15',
    com_num: '16'
  },
  {
    user: {
      name: 'Demon'
    },
    created_at: '2024/1/31 15:30',
    msg: '和所有的简写属性一样，如果有缺省值会被设置成对应属性的初始值。同时需要注意设置 border 对border-image属性的影响，虽然 border 属性不能设置这个属性，但会把该属性重置为初始值 none。这使得我们可以用 border 属性去重置整个样式表中的 border 设置。因为 W3C 计划在未来的标准中保留该属性，因此建议使用该属性重置边框设定。',
    tu_num: '15',
    com_num: '16'
  },
  {
    user: {
      name: 'Demon'
    },
    created_at: '2024/1/31 15:30',
    tu_num: '15',
    com_num: '16',
    msg: '要做幸福快乐的宝宝！ 小锤子，我们永远爱你哦'
  }
  //   {
  //     user: {
  //       name: 'Demon'
  //     },
  //     created_at: '2024/1/31 15:30',
  //     tu_num: 15,
  //     com_num: 16,
  //     msg: '要做幸福快乐的宝宝！ 小锤子，我们永远爱你哦'
  //   },
  //   {
  //     user: {
  //       name: 'Demon'
  //     },
  //     created_at: '2024/1/31 15:30',
  //     tu_num: 15,
  //     com_num: 16,
  //     msg: '要做幸福快乐的宝宝！ 小锤子，我们永远爱你哦'
  //   }
])
</script>
