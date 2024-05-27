import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useJournalStore = defineStore(
  'journal',
  () => {
    const journalItems = ref({
      id: 0,
      title: '',
      content: '',
      images: [],
      created_at: '',
      updated_at: '',
      remark: {
        thumb_num: 0,
        comment_num: 0
      }
    })



    return { journalItems }
  }
)