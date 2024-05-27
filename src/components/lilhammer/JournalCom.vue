<template>
  <Card v-for="item of journalItems" :key="item.id">
    <template #title>
      <div class="ver-cen-sb">
        <div class="mg-right-10">{{ item.title }}</div>
        <div class="mg-right-10">{{ item.created_at }}</div>
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
      <RemarkCom v-if="item.remark" :time="item.created_at" :remark="item.remark"></RemarkCom>
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
import Image from 'primevue/image'
import RemarkCom from '@/components/common/RemarkCom.vue'
import { storeToRefs } from 'pinia'
import { useJournalStore } from '@/stores/journal.js'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { baseUrl } from '@/api/account.js'

const { journalItems } = storeToRefs(useJournalStore())

onMounted(() => {

  getJournalItemsPerPage()
})
// paginate
const first = ref(0) // 当前页的起始索引
const rowsPerPage = ref(10) // 每页显示的行数
const totalRecords = ref()
const onPageChange = (event) => {
  first.value = event.first
  getJournalItemsPerPage()
}

async function getJournalItemsPerPage() {
  try {
    const resp = await axios.get(
      baseUrl + '/journal/paginated',
      {
        withCredentials: true,
        params: {
          page_number: first.value / rowsPerPage.value,
          page_size: rowsPerPage.value
        }
      }
    )

    if (resp.status === 200) {
      journalItems.value = resp.data['data']
    } else {
      console.log('get journal items resp', resp)
    }
  } catch (err) {
    console.log('get journal items err', err)
  }
}


// const items = ref(
//   [
//     {
//       title: '小锤学会走路',
//       text: '小锤今天学会了独立行走，家里的家具都在颤抖！',
//       pictures: [hammerJpg, hammer1, hammer2, hammer3, hammer4, hammer5, hammer6, hammer7],
//       time: '13:14 PM·Oct 14, 2023',
//       remark: {
//         thumb_num: '15',
//         comment_num: '20'
//       }
//     },
//     {
//       title: '小锤第一次游泳',
//       text: '小锤今天在游泳池里开心地玩耍，第一次尝试游泳。',
//       pictures: [hammerJpg, hammer8, hammer9],
//       time: '13:14 PM·Oct 14, 2023',
//       remark: {
//         thumb_num: '15',
//         comment_num: '20'
//       }
//     },
//     {
//       title: '小锤上幼儿园',
//       text: '小锤今天第一次去幼儿园，认识了很多新朋友。',
//       pictures: [hammerJpg],
//       time: '13:14 PM·Oct 14, 2023',
//       remark: {
//         thumb_num: '15',
//         comment_num: '20'
//       }
//     },
//     {
//       title: '小锤生日派对',
//       text: '小锤今天过生日，和小伙伴们一起开了一个热闹的派对。',
//       pictures: [hammerJpg],
//       time: '13:14 PM·Oct 14, 2023',
//       remark: {
//         thumb_num: '15',
//         comment_num: '20'
//       }
//     },
//     {
//       title: '小锤去动物园',
//       text: '小锤今天跟着爸爸妈妈一起去了动物园，看到了很多有趣的动物。',
//       pictures: [hammerJpg],
//       time: '13:14 PM·Oct 14, 2023',
//       remark: {
//         thumb_num: '15',
//         comment_num: '20'
//       }
//     },
//     {
//       title: '小锤学会骑自行车',
//       text: '小锤今天学会了骑自行车，在公园里骑了很久。',
//       pictures: [hammerJpg],
//       time: '13:14 PM·Oct 14, 2023',
//       remark: {
//         thumb_num: '15',
//         comment_num: '20'
//       }
//     },
//     {
//       title: '小锤看电影',
//       text: '小锤今天和家人一起去电影院，看了一部有趣的动画电影。',
//       pictures: [hammerJpg],
//       time: '13:14 PM·Oct 14, 2023',
//       remark: {
//         thumb_num: '15',
//         comment_num: '20'
//       }
//     },
//     {
//       title: '小锤画画',
//       text: '小锤今天画了一幅漂亮的画，大家都称赞他。',
//       pictures: [hammerJpg],
//       time: '13:14 PM·Oct 14, 2023',
//       remark: {
//         thumb_num: '15',
//         comment_num: '20'
//       }
//     },
//     {
//       title: '小锤学做饭',
//       text: '小锤今天跟着妈妈学做饭，做了一道简单的菜。',
//       pictures: [hammerJpg],
//       time: '13:14 PM·Oct 14, 2023',
//       remark: {
//         thumb_num: '15',
//         comment_num: '20'
//       }
//     },
//     {
//       title: '小锤玩滑梯',
//       text: '小锤今天在游乐场玩滑梯，玩得非常开心。',
//       pictures: [hammerJpg],
//       time: '13:14 PM·Oct 14, 2023',
//       remark: {
//         thumb_num: '15',
//         comment_num: '20'
//       }
//     }
//   ]
// )
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