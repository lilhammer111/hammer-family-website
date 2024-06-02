import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNbSotre = defineStore(
    'notebook',
    ()=> {
        const navVisible = ref(true)
        return {navVisible}
    }
)