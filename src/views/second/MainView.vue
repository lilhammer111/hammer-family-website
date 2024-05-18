<script setup>
import NavCom from '@/components/common/NavCom.vue'
import NewsCom from '@/components/NewsCom.vue'
import comeBackImage from '@/assets/pictures/welcome_back.png'
import ArticleCom from '@/components/ArticleCom.vue'

import { ref } from 'vue'


const data = ref({
  name: 'Demon',
  nth: 1,
  last_visit: 'October 21, 2023'
})

const welcome_msg = ref(
  `Hey ${data.value.name}\nIt's great to see you again.
This is your ${data.value.nth}th visit.
Your last visit was on ${data.value.last_visit}. Welcome back!`
)

const ptOption = ref({
  arrow: { style: 'display:none' },
  text: { style: 'font-weight:bolder;left:0px;background: rgba(255, 255, 255,0.8);backdrop-filter: blur(100px);color: black; box-shadow: 5px 5px  10px 4px rgba(0, 0, 0, 0.3);' }
})

const navItems = ref([
  {
    text: '🌴 Home',
    icon: '',
    route: 'home'
  },
  {
    text: '🌱 Hammer',
    icon: '',
    route: 'wish'
  },
  {
    text: '🐣 Community',
    icon: '',
    route: 'food'
  }
])

</script>

<template>
  <div class=" left-bar">
    <NavCom :items="navItems"></NavCom>
    <NewsCom></NewsCom>
    <ArticleCom></ArticleCom>
  </div>
  <div class="middle-bar">
    <RouterView></RouterView>
  </div>

  <div class="right-bar">

    <img
      v-tooltip.right="{
      value: welcome_msg,
      showDelay: 1000,
      hideDelay: 1000,
      pt:ptOption,
    }"
      :src="comeBackImage"
      alt="welcome back"
      style="width:100%;margin-left:10px"
    />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables";

.dialog-stl {
  background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(10px);
  left: 100px;
  backdrop-filter: blur(10px);
}

.left-bar {
  width: $nav-width-proportion * 100%;
}

.left-bar > * {
  margin-bottom: $m-gap;
}

.middle-bar {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: $m-gap;
}

.right-bar {
  width: 18%;
  position: relative;
}


.dialog-box-stl, .para-stl {
  width: 260px;
  position: absolute;
  top: -50px;
  right: 40%;
  border-radius: 10px;
}

.para-stl {
  font-size: 13px;
  font-weight: bolder;
  top: 4px;
  right: -10px;
}


.sp-stl {
  color: $font-color-gray;
  position: absolute;
  top: -10px;
  right: 5px;
}
</style>