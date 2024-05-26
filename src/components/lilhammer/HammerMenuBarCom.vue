<template>
  <Menubar :model="items" />
  <Toast />

  <Dialog @update:visible="journalDialogVisible = false"
          :visible="journalDialogVisible" modal
          header="Write a Journal"
          :style="{ width: '30rem' }">
    <div class="flex-ver-start son-gap-10">
      <div class="flex-ver-start son-gap-10">
        <label for="username">Title</label>
        <InputText autofocus id="username" v-model="journalForm.title" aria-describedby="username-help" />
      </div>
      <div class="flex-ver-start son-gap-10">
        <label for="username">Content</label>
        <Textarea v-model="journalForm.text" rows="5" cols="29" auto-resize />
      </div>
      <divider v-if="imagesItems.length" />
      <div class="img-container">
        <div class="img-item" style="position: relative" v-for="(item, idx) of imagesItems" :key="idx">
          <img
            :ref="el => imageRefs[idx] = el"
            :src="item.url"
            alt="img"
            style="width: 80px;height: auto"
            @mouseenter="item.closeBtnVis = true"
            @mouseleave="item.closeBtnVis = false"
            @load="setMaskSize(idx)"
          >
          <div
            :ref="el => maskRefs[idx] = el"
            v-show="item.closeBtnVis"
            class="mask-stl"
            @click="removeImage(idx)"
          >
          </div>
          <div
            v-if="item.closeBtnVis"
            class="close-btn-stl"
          >
            ×
          </div>
        </div>
      </div>
      <divider v-if="imagesItems.length" />
      <div class="flex-hor-sb">
        <FileUpload
          chooseLabel="Image"
          auto
          mode="basic"
          name="files[]"
          :multiple="true"
          :url="url"
          accept="image/*"
          :maxFileSize="20000000"
          :pt="fileUploadOptions"
          :withCredentials="true"
          @upload="onUpload"
          @select="onSelect"
        />
        <Button type="button" label="Create" style="width: var(--btn-width-6);margin:0;"
                @click="createJournal"></Button>
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

// image data
const imagesItems = ref([])
const imageRefs = ref([])
const maskRefs = ref([])

function setMaskSize(idx) {
  const width = imageRefs.value[idx].getBoundingClientRect().width
  const height = imageRefs.value[idx].getBoundingClientRect().height
  maskRefs.value[idx].style.width = `${width}px`
  maskRefs.value[idx].style.height = `${height}px`
}

function removeImage(idx,event) {
  console.log('remove event', event)
  if (idx > -1 && idx < imagesItems.value.length) {
    imagesItems.value.splice(idx, 1);
    imageRefs.value.splice(idx, 1);
    maskRefs.value.splice(idx, 1);
  }
}

// function hiddenCloseBtnDelay(item) {
//   setTimeout(
//     () => {
//       item.closeBtnVis = false
//     },
//     500
//   )
// }

// upload component
function onUpload(event) {
  console.log('onUpload', event)
  for (const file of event.files) {
    imagesItems.value.push({ url: file.objectURL, closeBtnVis: false })
  }

}


function onSelect(event) {
  console.log('onSelect', event)
}

const fileUploadOptions = ref({
  choosebutton: { style: 'height: 40.56px' }
})

// form
const journalForm = ref({
  title: '',
  text: ''
})


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

<style scoped lang="scss">
.img-item:hover {
  cursor: pointer;
}

.mask-stl {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index:10001;
}

.close-btn-stl {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 25px;
  transform: translate(-50%, -50%);
  color: white;
  z-index:10002;
}
</style>