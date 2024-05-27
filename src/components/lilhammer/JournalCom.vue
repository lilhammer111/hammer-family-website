<template>
  <div v-if="isLoading">
  </div>
  <div v-else class="flex-ver-start son-gap-10">
    <Card v-for="item of journalItems" :key="item.id">
      <template #title>
        <div class="ver-cen-sb">
          <div class="mg-right-10">{{ item.title }}</div>
        </div>

      </template>
      <template #content>
        <p class="m-0">
          {{ item.content }}
        </p>
        <div class="img-container mg-btm-15">
          <Image
            v-for="(image,idx) in item.images" :key="idx"
            class="img-item"
            :src="image"
            alt="Image"
            width="130"
            preview
          />
        </div>
        <RemarkCom :time="item.created_at" :remark="item.remark"></RemarkCom>
      </template>
    </Card>
  </div>
  <Paginator
    :first="pageIndex"
    :rows="rowsPerPage"
    :totalRecords="totalJournalItemsNumber"
    style="width: 100%"
    @page="onPageChange"
  >
  </Paginator>
  <PageBottomCom content="Next Page"></PageBottomCom>
</template>

<script setup>
import Image from 'primevue/image'
import RemarkCom from '@/components/common/RemarkCom.vue'
import { ref } from 'vue'
import { useJournalStore } from '@/stores/journal.js'
import { storeToRefs } from 'pinia'
import PageBottomCom from '@/components/common/PageBottomCom.vue'

// journal store
const journalStore = useJournalStore()
const { journalItems, totalJournalItemsNumber, isLoading, pageIndex } = storeToRefs(journalStore)
const { setJournalItemsOfCurrentPage } = journalStore
// paginate
const rowsPerPage = ref(10) // 每页显示的行数
const onPageChange = (event) => {
  console.log("page change event", event)
  pageIndex.value = event.first
  setJournalItemsOfCurrentPage(pageIndex.value, rowsPerPage.value)
}
</script>

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