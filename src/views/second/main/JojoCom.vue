<script setup>
import { ref } from 'vue'
import comeBackImage from '@/assets/pictures/welcome_back.png'


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
</script>

<template>
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
</template>

<style scoped lang="scss">

</style>