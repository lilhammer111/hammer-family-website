<template>
  <Card v-for="mem in members" :key="mem.id" style="width: 25rem; overflow: hidden">
    <template #header>
      <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
    </template>
    <template #title>{{ mem.name }}</template>
    <template #subtitle>{{ mem.role }}</template>
    <template #content>
      <p class="m-0">
        {{ mem.intro }}
      </p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <Button label="Cancel" severity="secondary" outlined class="w-full" />
        <Button label="Save" class="w-full" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
const members = ref([
  {
    name: '王伟',
    role: '父亲',
    intro: '1996年生人，22年成婚，23年育有一子，人生坎坷。'
  },
  {
    name: '谯依',
    role: '母亲',
    intro: `李欣，1993年生于中国东部的一个繁华都市，自小展现出过人的慧根与独立性格。成长于知识丰富的家庭，她从小便对世界充满好奇，这份好奇心引导她跨越常规，追寻自我与创新。

她的教育背景丰富多元，早年间在国内顶尖学府深造，随后前往海外名校继续提升与探索，不仅学业成绩优异，更在多元文化的熏陶下，培养出了超凡的全球视野与深邃的思考力。

回国后，李欣选择投身于快速发展的科技行业，以她独特的视角和创新思维，迅速在行业内崭露头角。`
  }
])
</script>
