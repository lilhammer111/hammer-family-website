import { ref } from 'vue'

export const imageUrl = `${import.meta.env.VITE_API_URL}/api/file/image`

export const baseUrl = `${import.meta.env.VITE_API_URL}/api`
export const staticBaseUrl = `${import.meta.env.VITE_API_URL}/static`

export const staticImageUrl = `${import.meta.env.VITE_API_URL}/static/image`

export const staticDocumentUrl = `${import.meta.env.VITE_API_URL}/static/document`

export const defaultPageQuery = ref({
    page_number: 0,
    page_size: 20
})