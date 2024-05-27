import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { baseUrl } from '@/api/account.js'


export const useJournalStore = defineStore('journal', () => {
  const journalItems = ref([])
  const isLoading = ref(false)
  const totalJournalItemsNumber = ref(0)
  const pageIndex = ref(0)


  const setJournalItemsOfCurrentPage = async (first, rowPerPage) => {
    isLoading.value = true
    try {
      const resp = await axios.get(baseUrl + '/journal/paginated', {
        withCredentials: true, params: {
          page_number: first / rowPerPage, page_size: rowPerPage
        }
      })

      if (resp.status === 200) {
        console.log('get journal resp', resp)

        journalItems.value = resp.data['data']
        totalJournalItemsNumber.value = resp.data['extra']
      } else {
        console.log('get journal registerForm resp', resp)
      }
    } catch (err) {
      console.log('journal items when err', journalItems.value)
      console.log('get journal registerForm err', err)
    } finally {
      isLoading.value = false
    }
  }

  return { journalItems, totalJournalItemsNumber, isLoading,pageIndex, setJournalItemsOfCurrentPage }
})