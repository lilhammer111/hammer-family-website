<template>
  <Card>
    <template #title>
      <div class="flex-h-cen">
        <SelectButton v-model="current" :options="options"
                      aria-labelledby="basic" />
      </div>
    </template>
    <template #content>
      <DataTable paginator :rows="20" v-if="current === 'Health'" :value="healthData" tableStyle="width: 100%">
        <Column v-for="col of healthColumns" :key="col.field" :field="col.field" :header="col.header"></Column>
      </DataTable>

      <DataTable paginator :rows="20" v-else-if="current === 'Diet'" :value="dietData" tableStyle="width: 100%">
        <Column v-for="col of dietColumns" :key="col.field" :field="col.field" :header="col.header"></Column>
      </DataTable>
      <DataTable paginator :rows="20" v-else :value="behaviorData" tableStyle="width: 100%">
        <Column v-for="col of behaviorColumns" :key="col.field" :field="col.field" :header="col.header"></Column>
      </DataTable>

    </template>
  </Card>

  <PageBottomCom content="Your presence brightens our pages."></PageBottomCom>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import PageBottomCom from '@/views/common/PageBottomCom.vue'
import { useMetricStore } from '@/stores/metric.js'
import { storeToRefs } from 'pinia'
const metricStore = useMetricStore()

onMounted(() => {
  metricStore.setHealthData()
  metricStore.setDietData()
  metricStore.setBehaviorData()
})

const { healthData, dietData,behaviorData } = storeToRefs(metricStore)
const current = ref('Health')

const options = ref([
  'Health',
  'Diet',
  'Behavior'
])

const healthColumns = [
  { field: 'record_date', header: 'Date' },
  { field: 'height', header: 'Height' },
  { field: 'weight', header: 'Weight' },
  { field: 'teeth', header: 'Teeth' },
  { field: 'head_circumference', header: 'Head Circ.' }
]

const dietColumns = [
  { field: 'record_date', header: 'Date' },
  { field: 'milk', header: 'Milk' },
  { field: 'meat', header: 'Meat' },
  { field: 'egg', header: 'Egg' },
  { field: 'vegetable', header: 'Vegetable' },
  { field: 'fruit', header: 'Fruit' },
  { field: 'grain', header: 'Grain' }
]

const behaviorColumns = [
  { field: 'record_date', header: 'Date' },
  { field: 'wake_up_time', header: 'WakeUp' },
  { field: 'sleep_time', header: 'Sleep' },
  { field: 'diaper_changes', header: 'Diaper' },
  { field: 'naps', header: 'Naps' },
  { field: 'crying_episodes', header: 'Crying' },
  { field: 'duration_outdoor', header: 'Outdoor' },
]

</script>

<style scoped lang="scss">

</style>