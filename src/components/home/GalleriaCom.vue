<template>
  <Galleria
    :value="images"
    :responsiveOptions="responsiveOptions"
    :numVisible="5"
    containerStyle="max-width: 640px;margin: 0 auto;background-color: rgba(243, 244, 246, 1)"
  >
    <template #item="slotProps">
      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
    </template>
    <template #thumbnail="slotProps">
      <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
    </template>
  </Galleria>
</template>

<script setup>
import { ref } from 'vue'
import Galleria from 'primevue/galleria'
import itemImageSrc1 from '@/assets/pictures/us.jpg'
import itemImageSrc2 from '@/assets/pictures/us2.jpg'

import tnImageSrc1 from '@/assets/pictures/us_50x50.jpg'
import tnImageSrc2 from '@/assets/pictures/us2_50x50.jpg'

// onMounted(() => {
//   PhotoService.getImages().then((data) => (images.value = data))
// })

const images = ref([
  {
    itemImageSrc: itemImageSrc1,
    thumbnailImageSrc: tnImageSrc1,
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
  {
    itemImageSrc: itemImageSrc2,
    thumbnailImageSrc: tnImageSrc2,
    alt: 'Description for Image 2',
    title: 'Title 2'
  }
])
const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
])
</script>

<style lang="scss"></style>
