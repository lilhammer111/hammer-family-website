<script setup>
import { ref } from 'vue'
import Image from 'primevue/image'
import hammerJpg from '@/assets/pictures/hammer.jpg'
import hammer1 from '@/assets/pictures/hammer/hammer1.jpg'
import hammer2 from '@/assets/pictures/hammer/hammer2.jpg'
import hammer3 from '@/assets/pictures/hammer/hammer3.jpg'
import hammer4 from '@/assets/pictures/hammer/hammer4.jpg'
import hammer5 from '@/assets/pictures/hammer/hammer5.jpg'
import hammer6 from '@/assets/pictures/hammer/hammer6.jpg'
import hammer7 from '@/assets/pictures/hammer/hammer7.jpg'
import hammer8 from '@/assets/pictures/hammer/hammer8.jpg'
import hammer9 from '@/assets/pictures/hammer/hammer9.jpg'

const datas = ref([
    {
      title: '小锤学会走路',
      date: '2024-09-15',
      text: '小锤今天学会了独立行走，家里的家具都在颤抖！',
      pictures: [hammerJpg, hammer1, hammer2, hammer3, hammer4, hammer5, hammer6, hammer7]
    },
    {
      title: '小锤第一次游泳',
      date: '2024-07-20',
      text: '小锤今天在游泳池里开心地玩耍，第一次尝试游泳。',
      pictures: [hammerJpg,hammer8, hammer9]
    },
    {
      title: '小锤上幼儿园',
      date: '2024-08-25',
      text: '小锤今天第一次去幼儿园，认识了很多新朋友。',
      pictures: [hammerJpg]
    },
    {
      title: '小锤生日派对',
      date: '2024-11-05',
      text: '小锤今天过生日，和小伙伴们一起开了一个热闹的派对。',
      pictures: [hammerJpg]
    },
    {
      title: '小锤去动物园',
      date: '2024-06-10',
      text: '小锤今天跟着爸爸妈妈一起去了动物园，看到了很多有趣的动物。',
      pictures: [hammerJpg]
    },
    {
      title: '小锤学会骑自行车',
      date: '2024-10-18',
      text: '小锤今天学会了骑自行车，在公园里骑了很久。',
      pictures: [hammerJpg]
    },
    {
      title: '小锤看电影',
      date: '2024-12-02',
      text: '小锤今天和家人一起去电影院，看了一部有趣的动画电影。',
      pictures: [hammerJpg]
    },
    {
      title: '小锤画画',
      date: '2024-09-05',
      text: '小锤今天画了一幅漂亮的画，大家都称赞他。',
      pictures: [hammerJpg]
    },
    {
      title: '小锤学做饭',
      date: '2024-08-12',
      text: '小锤今天跟着妈妈学做饭，做了一道简单的菜。',
      pictures: [hammerJpg]
    },
    {
      title: '小锤玩滑梯',
      date: '2024-11-22',
      text: '小锤今天在游乐场玩滑梯，玩得非常开心。',
      pictures: [hammerJpg]
    }
  ]
)
</script>

<template>
  <Card v-for="data in datas" class="mg-btm-10">
    <template #title>
      <div class="ver-cen-sb">
        <div class="mg-right-10">{{ data.title }}</div>
        <div class="mg-right-10">{{ data.date }}</div>
      </div>

    </template>
    <template #content>
      <p class="m-0">
        {{ data.text }}
      </p>
      <div class="img-container">
        <Image class="img-item" :src="p" alt="Image" width="130" preview v-for="p in data.pictures" />
      </div>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.img-container {
  width: 100%;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
}

.img-item {
  display: flex;
  align-items: center;
}

:deep(Button) {
  margin: 0;
}
</style>