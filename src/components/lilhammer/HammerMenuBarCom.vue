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
        <Textarea v-model="journalForm.content" rows="5" cols="29" auto-resize />
      </div>
      <divider v-if="imagesItems.length" />
      <div class="img-container">
        <div
          v-for="(item, idx) of imagesItems"
          :key="idx"
          class="img-item"
          style="position: relative"
          @mouseenter="showCloseBtn(item)"
          @mouseleave="hiddenCloseBtn(item)"
          @click="removeImage(idx)"
        >
          <img
            :ref="el => imageRefs[idx] = el"
            :src="item.url"
            alt="img"
            style="width: 80px;height: auto"
            @load="setMaskSize(idx)"
          >
          <div
            :ref="el => maskRefs[idx] = el"
            v-show="item.closeBtnVis"
            class="mask-stl"
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
          name="image"
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

  <Dialog
    @update:visible="metricDiaVis = false"
    :visible="metricDiaVis" modal
    header="Fill a Metric Record"
    :style="{ width: '30rem' }"
  >
    <div class="flex-ver-start son-gap-20">
      <SelectButton v-model="option" :options="options" aria-labelledby="basic" :pt="selectBtnPt" />
      <div class="grid-2-2" v-if="option === 'Health'">
        <div v-for="(formItem, idx) of healthForm" :key="idx" class="flex-ver-start son-gap-10">
          <label :for="formItem.label"> {{ formItem.label }} </label>
          <InputNumber v-model="formItem.value" :minFractionDigits="0" :maxFractionDigits="2" :inputId="formItem.label" :inputStyle="inputStyle" />
        </div>
      </div>

      <div class="grid-2-2" v-else-if="option === 'Diet'">
        <div v-for="(formItem, idx) of dietForm" :key="idx" class="flex-ver-start son-gap-10">
          <label :for="formItem.label"> {{ formItem.label }} </label>
          <InputNumber v-model="formItem.value" :inputId="formItem.label" :inputStyle="inputStyle" />
        </div>
      </div>

      <div class="grid-2-2" v-else>
        <div v-for="(formItem, idx) of healthForm" :key="idx" class="flex-ver-start son-gap-10">
          <label :for="formItem.label"> {{ formItem.label }} </label>
          <InputNumber v-model="formItem.value" :inputId="formItem.label" :inputStyle="inputStyle" />
        </div>
      </div>
      <div class="flex-hor-end">
        <Button type="button" label="Submit" style="width: var(--btn-width-6);margin:0;"
                @click="fillMetricRecord">
        </Button>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import Menubar from 'primevue/menubar'
import { ref } from 'vue'
import Toast from 'primevue/toast'
import router from '@/router/index.js'
import { baseUrl, imageUrl, staticBaseUrl } from '@/api/account.js'
import axios from 'axios'
import { useJournalStore } from '@/stores/journal.js'

// metric
const metricDiaVis = ref(false)
const option = ref('Health')
const options = ref(['Health', 'Diet', 'Behavior'])
const selectBtnPt = ref({
  root: { style: 'margin:  auto' }
})

const inputStyle = ref({
  width: '10px'
})

const healthForm = ref([
  {
    label: 'Height',
    value: 0
  },
  {

    label: 'Weight',
    value: 0
  },
  {

    label: 'Teeth',
    value: 0
  },
  {

    label: 'Head Circumference',
    value: 0
  }
])
const dietForm = ref([
  {
    label: 'Milk',
    value: 10,
  },
  {
    label: 'Meat',
    value: 10,
  },
  {
    label: 'Egg',
    value: 10,
  },
  {
    label: 'Vegetable',
    value: 10,
  },
  {
    label: 'Fruit',
    value: 10,
  },  {
    label: 'Grain',
    value: 10,
  },
])

function fillMetricRecord() {
  metricDiaVis.value = false
}


// menu
const items = ref([
  {
    label: '✨ Wish',
    icon: '',
    command: () => {
      router.push({ name: 'wish' })
    }
  },
  {
    label: '🚀 Journal',
    icon: '',
    command: () => {
      router.push({ name: 'journal' })
    }
  },
  {
    label: '📈 Metric',
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
        label: 'Add an Journal',
        icon: '',
        command: () => {
          journalDialogVisible.value = true
          router.push({ name: 'journal' })
        }
      },
      {
        label: 'Fill a Metric Record',
        icon: '',
        command: () => {
          metricDiaVis.value = true
          router.push({ name: 'hammer-record' })
        }
      }
    ]
  }

])

// btn
function showCloseBtn(item) {
  item.closeBtnVis = true
}

function hiddenCloseBtn(item) {
  item.closeBtnVis = true
}

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

function removeImage(idx) {
  if (idx > -1 && idx < imagesItems.value.length) {
    imagesItems.value.splice(idx, 1)
    imageRefs.value.splice(idx, 1)
    maskRefs.value.splice(idx, 1)

    journalForm.value.images.splice(idx, 1)
  }
}

// upload component
function onUpload(event) {
  console.log('onUpload', event)
  for (const file of event.files) {
    imagesItems.value.push({ url: file.objectURL, closeBtnVis: false })
    journalForm.value.images.push(staticBaseUrl + '/' + file.name)
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
  content: '',
  images: []
})


const url = ref(imageUrl)

const journalDialogVisible = ref(false)

async function createJournal() {
  console.log('create journal data', journalForm.value)
  try {
    const resp = await axios.post(
      `${baseUrl}/journal`,
      journalForm.value,
      {
        withCredentials: true
      }
    )

    if (resp.status === 201) {
      // 直接添加数据
      useJournalStore().journalItems.unshift(resp.data['data'])

      // 更新数据总数以便分页
      useJournalStore().totalJournalItemsNumber++

      // 清空表单双向数据绑定
      journalForm.value = {
        title: '',
        content: '',
        images: []
      }
      imagesItems.value = []
      imageRefs.value = []
      maskRefs.value = []
    } else {
      console.log('bad resp status')
    }
  } catch (err) {
    console.log('axios err', err)
  }
  journalDialogVisible.value = false
}


</script>

<style scoped lang="scss">
.grid-2-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.img-item:hover {
  cursor: pointer;
}

.mask-stl {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1101;
}

.close-btn-stl {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 25px;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 1101;
}
</style>