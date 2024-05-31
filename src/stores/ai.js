import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAiStore = defineStore(
  'ai',
  ()=> {
    const aiDialogs = ref([])

    return {aiDialogs}
  }
)