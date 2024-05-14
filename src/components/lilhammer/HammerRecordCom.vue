<template>
  <Card>
    <DataTable :value="health" sortMode="multiple" tableStyle="min-width: 50rem;width: 100%" removableSort>
      <Column field="date" header="Code" sortable="true" style="width: 25%"></Column>
      <Column field="height" header="Name" sortable="true" style="width: 25%"></Column>
      <Column field="weight" header="Category" sortable="true" style="width: 25%"></Column>
      <Column field="sleep_time" header="Quantity" sortable="true" style="width: 25%"></Column>
    </DataTable>
  </Card>
</template>

<script setup>
import { ref } from 'vue'

const health = ref([
  {
    date: '2023-2-28',
    height: '51',
    weight: '14',
    sleep_time: '21:45'
  },
  {
    date: '2023-2-28',
    height: '51',
    weight: '14',
    sleep_time: '21:45'
  },
  {
    date: '2023-2-28',
    height: '51',
    weight: '14',
    sleep_time: '21:45'
  },
  {
    date: '2023-2-28',
    height: '51',
    weight: '14',
    sleep_time: '21:45'
  },
])
</script>

<style scoped lang="scss">

</style>