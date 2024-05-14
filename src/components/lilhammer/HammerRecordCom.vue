<script setup>

</script>

<template>

  <div class="card">
    <DataTable :value="products" sortMode="multiple" tableStyle="min-width: 50rem">
      <Column field="code" header="Code" sortable style="width: 25%"></Column>
      <Column field="name" header="Name" sortable style="width: 25%"></Column>
      <Column field="category" header="Category" sortable style="width: 25%"></Column>
      <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'


const products = ref()

</script>


<style scoped lang="scss">

</style>