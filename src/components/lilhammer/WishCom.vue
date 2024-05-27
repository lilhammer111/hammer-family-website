<template>
  <Card v-for="item of wishData" :key="item.id">
    <template #title>
      <AvaWithNameCom :name="item.username" :avatar="item.avatar_url"></AvaWithNameCom>
    </template>
    <template #content>
      <p>
        {{ item.content }}
      </p>
      <RemarkCom :time="item.created_at" :remark="item.remark"></RemarkCom>
    </template>
  </Card>

  <Paginator
    :first="first"
    :rows="rowsPerPage"
    :totalRecords="totalRecords"
    style="width: 100%"
    @page="onPageChange"
  >
  </Paginator>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import RemarkCom from '@/components/common/RemarkCom.vue'
import AvaWithNameCom from '@/components/common/AvaWithNameCom.vue'
import axios from 'axios'

// paginate
const first = ref(0) // 当前页的起始索引
const rowsPerPage = ref(10) // 每页显示的行数
const totalRecords = ref()
const onPageChange = (event) => {
  first.value = event.first
  fetchWishPerPage()
}

// core items
const wishData = ref([])

async function fetchWishPerPage() {
  try {
    const wishResp = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/wish/paginated`,
      {
        withCredentials: true,
        params: {
          page_number: first.value / rowsPerPage.value,
          page_size: rowsPerPage.value
        }
      }
    )

    let wishItems = wishResp.data['data']

    totalRecords.value = wishResp.data['extra']

    console.log('get wish response: ', wishResp)

    let userIdList = []

    wishItems.forEach((wishItem) => {
      userIdList.push(wishItem['user_id'])
    })

    let uniqueUserList = [...new Set(userIdList)]

    const params = uniqueUserList.map(id => `user_ids=${id}`).join('&')

    const userResp = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/user/batch?${params}`,
      {
        withCredentials: true
      }
    )

    const userItems = userResp.data['data']

    for (const wishItem of wishItems) {
      for (const userItem of userItems) {
        if (userItem['id'] === wishItem['user_id']) {
          wishItem['username'] = userItem['username']
          wishItem['avatar_url'] = userItem['avatar_url']
        }
      }
      // 先写死thumb_number和like_number
      wishItem['remark'] = {
        thumb_num: '9',
        comment_num: '10'
      }
    }

    wishData.value = wishItems


  } catch (error) {
    console.error('Error:', error)
  }
}

onMounted(() => {
  fetchWishPerPage()
})
</script>

<style lang="scss">

:deep(.p-paginator) {
  flex-wrap: nowrap;
}
</style>