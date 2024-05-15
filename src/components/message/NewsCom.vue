<template>
  <Card class="f-width">
    <template #title>
      🗞️ News
    </template>
    <template #content>
      <div class="mg-btm-10" v-for="data in datas">
        <Tag :value="data.tag" class="left-bar-tag-stl" severity="contrast"></Tag>
        <RouterLink class="news-stl" :to="{name: 'news'}">
          {{ data.title }}
        </RouterLink>
      </div>

    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'

const datas = ref([
  {
    title: 'LilHammer Takes First Steps, Furniture Trembles!',
    tag: 'Exclusive'
  },
  {
    title: 'lilhammer says Mom',
    tag: 'Breaking'
  }
])
</script>

<style lang="scss" scoped>
.news-stl {
  font-size: $left-bar-title-font-size;
  color: black;
}
</style>
