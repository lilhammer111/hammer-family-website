<script setup>
import python_png from '@/assets/pictures/python.jpeg'
import { ref } from 'vue'

const articles = ref([
  {
    cover: python_png,
    title: 'How to ai infer',
    author: 'Demon',
    summary: 'In the rapidly evolving world of artificial intelligence, the ability to effectively perform AI inference is crucial for deploying intelligent systems in real-world applications. This article delves into the fundamentals of AI inference, exploring the techniques and technologies that enable AI models to make predictions and decisions based on new data. Whether you\'re a seasoned data scientist, a software developer, or an AI enthusiast, this guide provides you with a clear understanding of the key concepts and practical applications of AI inference.'
  },
  {
    cover: python_png,
    title: 'How to ai infer',
    author: 'Demon',
    summary: 'In the rapidly evolving world of artificial intelligence, the ability to effectively perform AI inference is crucial for deploying intelligent systems in real-world applications. This article delves into the fundamentals of AI inference, exploring the techniques and technologies that enable AI models to make predictions and decisions based on new data. Whether you\'re a seasoned data scientist, a software developer, or an AI enthusiast, this guide provides you with a clear understanding of the key concepts and practical applications of AI inference.'
  },
  {
    cover: python_png,
    title: 'How to ai infer',
    author: 'Demon',
    summary: 'In the rapidly evolving world of artificial intelligence, the ability to effectively perform AI inference is crucial for deploying intelligent systems in real-world applications. This article delves into the fundamentals of AI inference, exploring the techniques and technologies that enable AI models to make predictions and decisions based on new data. Whether you\'re a seasoned data scientist, a software developer, or an AI enthusiast, this guide provides you with a clear understanding of the key concepts and practical applications of AI inference.'
  },
  {
    cover: python_png,
    title: 'How to ai infer',
    author: 'Demon',
    summary: 'In the rapidly evolving world of artificial intelligence, the ability to effectively perform AI inference is crucial for deploying intelligent systems in real-world applications. This article delves into the fundamentals of AI inference, exploring the techniques and technologies that enable AI models to make predictions and decisions based on new data. Whether you\'re a seasoned data scientist, a software developer, or an AI enthusiast, this guide provides you with a clear understanding of the key concepts and practical applications of AI inference.'
  },
])

const items = ref([
  {
    label: 'Furniture',
    icon: 'pi pi-box',
    items: [
      [
        {
          label: 'Living Room',
          items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
        }
      ],
      [
        {
          label: 'Kitchen',
          items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
        },
        {
          label: 'Bathroom',
          items: [{ label: 'Accessories' }]
        }
      ],
      [
        {
          label: 'Bedroom',
          items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
        }
      ],
      [
        {
          label: 'Office',
          items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
        }
      ]
    ]
  },
  {
    label: 'Electronics',
    icon: 'pi pi-mobile',
    items: [
      [
        {
          label: 'Computer',
          items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
        }
      ],
      [
        {
          label: 'Home Theather',
          items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
        }
      ],
      [
        {
          label: 'Gaming',
          items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
        }
      ],
      [
        {
          label: 'Appliances',
          items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
        }
      ]
    ]
  },
  {
    label: 'Sports',
    icon: 'pi pi-clock',
    items: [
      [
        {
          label: 'Football',
          items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
        }
      ],
      [
        {
          label: 'Running',
          items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
        }
      ],
      [
        {
          label: 'Swimming',
          items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
        }
      ],
      [
        {
          label: 'Tennis',
          items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
        }
      ]
    ]
  }
]);
</script>

<template>
  <div class="card">
    <MegaMenu :model="items" />
  </div>

  <div class="article" >
    <Card style="width: 289px; overflow: hidden" v-for="article in articles" >
      <template #header>
        <img alt="user header" :src="article.cover" />
      </template>
      <template #title>{{ article.title }}</template>
      <template #subtitle>{{ article.author }}</template>
      <template #content>
        <p class="m-0 fix-height">
          {{ article.summary }}
        </p>
      </template>
    </Card>
  </div>

</template>

<style scoped lang="scss">
.article {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* 调整这里的300px以适合你的卡片宽度需求 */
  gap: 16px; /* 卡片间的间隔 */
  padding: 0; /* 去掉父容器的内边距确保卡片能顶到边框 */
  //margin: 0 auto; /* 中心对齐 */
  width: 100%; /* 或者一个具体的px值，根据实际需求调整 */
}

.fix-height {
  height: 100px;
  overflow: auto;
}
</style>