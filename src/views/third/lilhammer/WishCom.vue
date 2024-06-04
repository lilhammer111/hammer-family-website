<template>
  <div v-if="isLoading">
  </div>
  <div v-else class="flex-ver-start son-gap-10">
    <Card v-for="(item, idx) of wishItems" :key="idx">
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
  </div>

  <Paginator
    :first="first"
    :rows="rowsPerPage"
    :totalRecords="totalRecords"
    style="width: 100%"
    @page="onPageChange"
  >
  </Paginator>

  <PageBottomCom content="Here’s to more beautiful moments ahead."></PageBottomCom>

</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import RemarkCom from '@/views/common/RemarkCom.vue'
import AvaWithNameCom from '@/views/common/AvaWithNameCom.vue'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useWishStore } from '@/stores/wish.js'
import PageBottomCom from '@/views/common/PageBottomCom.vue'

// paginate
const first = ref(0) // 当前页的起始索引
const rowsPerPage = ref(10) // 每页显示的行数
const totalRecords = ref()
const onPageChange = (event) => {
  first.value = event.first
  fetchWishPerPage()
}
const isLoading = ref(true)
// core registerForm
const wishStore = useWishStore()

const { wishItems } = storeToRefs(wishStore)

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

    // console.log('get wish response: ', wishResp)

    totalRecords.value = wishResp.data['extra']

    const wishRespRecords = wishResp.data['data']


    let userIdList = []

    for (const idx in wishRespRecords) {
      wishItems.value[idx] = reactive({})
      wishItems.value[idx]['content'] = wishRespRecords[idx]['content']
      wishItems.value[idx]['created_at'] = wishRespRecords[idx]['created_at']
      wishItems.value[idx]['user_id'] = wishRespRecords[idx]['user_id']

      const user_id = wishRespRecords[idx]['user_id']
      if (!(user_id in userIdList)) {
        userIdList.push(user_id)
      }
    }

    const params = userIdList.map(id => `user_ids=${id}`).join('&')

    // 批量获取用户信息
    const userResp = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/user/batch?${params}`,
      {
        withCredentials: true
      }
    )

    // console.log("batch get user info", userResp)

    const userRespRecords = userResp.data['data']

    const user_id_mapping = []

    for (const idx in userRespRecords) {
      const user_id = userRespRecords[idx]['id']
      user_id_mapping[user_id] = {
        username: userRespRecords[idx]['username'],
        avatar_url: userRespRecords[idx]['avatar_url']
      }
    }

    for (const item of wishItems.value) {
      // console.log("every wish item", item)
      item['username'] = user_id_mapping[item['user_id']]['username']
      item['avatar_url'] = user_id_mapping[item['user_id']]['avatar_url']

      // todo
      item['remark'] = {
        thumb_num: '10',
        comment_num: '20'
      }
    }

    // console.log("final wish items", wishItems.value)

  } catch (error) {
    console.log('Error:', error)
  } finally {
    isLoading.value = false
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