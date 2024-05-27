<template>
  <Card>
    <template #title>
      <div class="flex-h-cen">
        <SelectButton v-model="current" :options="options"
                      aria-labelledby="basic" />
      </div>
    </template>
    <template #content>
      <DataTable paginator :rows="20" v-if="current === 'Health'" :value="data.health" tableStyle="width: 100%">
        <Column v-for="col of healthColumns" :key="col.field" :field="col.field" :header="col.header"></Column>
      </DataTable>

      <DataTable paginator :rows="20" v-else-if="current === 'Diet'" :value="data.diet" tableStyle="width: 100%">
        <Column v-for="col of dietColumns" :key="col.field" :field="col.field" :header="col.header"></Column>
      </DataTable>
      <DataTable paginator :rows="20" v-else :value="data.emotion" tableStyle="width: 100%">
        <Column v-for="col of behaviorColumns" :key="col.field" :field="col.field" :header="col.header"></Column>
      </DataTable>

    </template>
  </Card>

  <PageBottomCom content="Your presence brightens our pages."></PageBottomCom>

</template>

<script setup>
import { ref } from 'vue'
import PageBottomCom from '@/components/common/PageBottomCom.vue'

const current = ref('Health')

const options = ref([
  'Health',
  'Diet',
  'Behavior'
])

const healthColumns = [
  { field: 'date', header: 'Date' },
  { field: 'height', header: 'Height' },
  { field: 'weight', header: 'Weight' },
  { field: 'sleep_time', header: 'SleepTime' }
]

const dietColumns = [
  { field: 'date', header: 'Date' },
  { field: 'milk', header: 'Milk' },
  { field: 'meat', header: 'Meat' },
  { field: 'eggs', header: 'Eggs' },
  { field: 'vegetables', header: 'Vegetables' },
  { field: 'fruits', header: 'Fruits' },
  { field: 'grains', header: 'Grains' }
]

const behaviorColumns = [
  { field: 'date', header: 'Date' },
  { field: 'height', header: 'Height' },
  { field: 'weight', header: 'Weight' },
  { field: 'sleep_time', header: 'SleepTime' }
]

const data = ref({
  health: [
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'
    },
    {
      date: '23/3/1',
      height: '52',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/3/2',
      height: '53',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/3/3',
      height: '55',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/3/4',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/3/5',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'
    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    }, {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    }, {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    },
    {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    }, {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    }, {
      date: '23/2/28',
      height: '51',
      weight: '14',
      sleep_time: '21:45'

    }

  ],
  diet: [
    {
      date: '23/2/28',
      milk: 400,
      meat: 50,
      eggs: 1,
      vegetables: 100,
      fruits: 150,
      grains: 50
    },
    {
      date: '23/2/28',
      milk: 400,
      meat: 50,
      eggs: 1,
      vegetables: 100,
      fruits: 150,
      grains: 50
    },
    {
      date: '23/2/28',
      milk: 400,
      meat: 50,
      eggs: 1,
      vegetables: 100,
      fruits: 150,
      grains: 50
    },
    {
      date: '23/2/28',
      milk: 400,
      meat: 50,
      eggs: 1,
      vegetables: 100,
      fruits: 150,
      grains: 50
    },
    {
      date: '23/2/28',
      milk: 400,
      meat: 50,
      eggs: 1,
      vegetables: 100,
      fruits: 150,
      grains: 50
    },
    {
      date: '23/2/28',
      milk: 400,
      meat: 50,
      eggs: 1,
      vegetables: 100,
      fruits: 150,
      grains: 50
    },
    {
      date: '23/2/28',
      milk: 400,
      meat: 50,
      eggs: 1,
      vegetables: 100,
      fruits: 150,
      grains: 50
    },
    {
      date: '23/2/28',
      milk: 400,
      meat: 50,
      eggs: 1,
      vegetables: 100,
      fruits: 150,
      grains: 50
    },
    {
      date: '23/2/28',
      milk: 400,
      meat: 50,
      eggs: 1,
      vegetables: 100,
      fruits: 150,
      grains: 50
    },
    {
      date: '23/2/28',
      milk: 400,
      meat: 50,
      eggs: 1,
      vegetables: 100,
      fruits: 150,
      grains: 50
    },
    {
      date: '23/2/28',
      milk: 400,
      meat: 50,
      eggs: 1,
      vegetables: 100,
      fruits: 150,
      grains: 50
    },
    {
      date: '23/2/28',
      milk: 400,
      meat: 50,
      eggs: 1,
      vegetables: 100,
      fruits: 150,
      grains: 50
    }
  ],
  emotion: []
})
</script>

<style scoped lang="scss">

</style>