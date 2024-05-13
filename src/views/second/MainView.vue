<script setup>
import NavCom from '@/components/NavCom.vue'
import NewsCom from '@/components/NewsCom.vue'
import comeBackImage from '@/assets/pictures/welcome_back.png'
import dialogBoxImage from '@/assets/pictures/dialog_box.png'
import { ref } from 'vue'

const showWelcome = ref(false)

const data = ref({
  name:'Demon',
  nth: 1,
  last_visit: '2023/10/21'
})
// function fade() {
//   setTimeout(
//     () => {
//       showWelcome.value = false
//     },
//     3500
//   )
// }
</script>

<template>
  <div class="flex-direction-column left-bar ">
    <NavCom></NavCom>
    <NewsCom></NewsCom>
  </div>
  <div class="middle-bar">
    <RouterView></RouterView>
  </div>

  <div class="right-bar">
    <div
      @mouseover="showWelcome = true"
      @mouseleave="showWelcome = false"
    >

      <img
        :src="comeBackImage"
        alt="welcome back"
        style="width:100%"

      />
      <img
        v-show="showWelcome"
        class="dialog-box-stl fade-out"
        :src="dialogBoxImage"
        alt="dialog box"
      />
      <p class="para-stl" v-show="showWelcome">
        Hi, {{data.name}}
      </p>
      <p class="para-stl"  style="top:24px; right: 6px" v-show="showWelcome">
        Welcome Back!
      </p>
      <p class="para-stl" style="top:44px; right: 15px" v-show="showWelcome">
        This is your {{ data.nth }}th visit,
      </p>
      <p class="para-stl" style="top:64px; right: 22px" v-show="showWelcome">and your last visit was</p>
      <p class="para-stl" style="top:84px" v-show="showWelcome">on {{ data.last_visit }}!</p>
    </div>
  </div>

  <!--    <div v-show="showWelcome" class="dialog-box-stl">-->
  <!--      xxx.-->
  <!--    </div>-->
</template>

<style scoped lang="scss">
.left-bar {
  margin-right: $l-gap;
  width: 15%;
}

.left-bar > * {
  margin-bottom: $l-gap;
}

.middle-bar {
  width: 65%;
  margin-right: $l-gap;
}

.right-bar {
  width: 15%;
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
  top:4px;
  right: -10px;
}


.sp-stl {
  color: $font-color-gray;
  position: absolute;
  top: -10px;
  right: 5px;
}
</style>