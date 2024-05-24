<template>
  <Menubar :model="items" />
  <Toast />

  <Dialog @update:visible="journalDialogVisible = false"
          :visible="journalDialogVisible" modal
          header="Write a Journal"
          :style="{ width: '25rem' }">
    <div class="flex-ver-start son-gap-10">
      <div class="flex-ver-start son-gap-10">
        <label for="username">Title</label>
        <InputText id="username" v-model="title" aria-describedby="username-help" />
      </div>
      <div class="flex-ver-start son-gap-10">
        <label for="username">Content</label>
        <Textarea autofocus v-model="text" rows="5" cols="29" auto-resize
                  placeholder="Thank you for sending your best wishes!" />
      </div>
      <div class="flex-hor-start">
        <FileUpload mode="basic" name="files[]" :url="url" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
        <Button type="button" label="Create" style="width: 6rem;float:right" @click="createJournal"></Button>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import Menubar from 'primevue/menubar'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import router from '@/router/index.js'
import { uploadUrl } from '@/api/account.js'
// tmp
const text = ref('')
const title = ref('')
function onUpload() {}
// tmp
const url = ref(uploadUrl)

const toast = useToast()

const journalDialogVisible = ref(false)

function createJournal() {
}

const items = ref([
  {
    label: '💖 Wish',
    icon: '',
    command: () => {
      router.push({ name: 'wish' })
    }
  },
  {
    label: '🎯 Journal',
    icon: '',
    command: () => {
      router.push({ name: 'journal' })
    }
  },
  {
    label: '🥦 Health',
    icon: '',
    command: () => {
      router.push({ name: 'hammer-record' })
    }
  },
  {
    separator: true
  },
  {
    label: 'New',
    icon: 'pi pi-plus',
    items: [
      {
        label: 'Write a Wish',
        icon: '',
        command: () => {
          toast.add({ severity: 'error', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 })
        }
      },
      {
        label: 'Add an Journal',
        icon: '',
        command: () => {
          journalDialogVisible.value = true
          router.push({ name: 'journal' })
        }
      },
      {
        label: 'Fill Growth Record',
        icon: '',
        command: () => {

        }
      }
    ]
  }

])
</script>
