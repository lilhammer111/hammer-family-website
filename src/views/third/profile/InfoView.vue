<script setup>
import { onMounted, ref } from 'vue'
import ProfileInfoCom from '@/components/common/ProfileInfoCom.vue'
import FloatLabel from 'primevue/floatlabel'
import axios from 'axios'

const date = ref()
const picture_src = ref('src/assets/pictures/hammer.jpg')

const ptOptions = ref({
  root: { class: 'img-container' }
})

const fileUploadOptions = ref({
  root: { class: 'fu-stl' }
})

const fileUpload = ref(null)

const triggerFileUpload = () => {
  fileUpload.value.$refs.fileInput.click()
}

const nameValue = ref('')

const form = ref({
  pronouns: '',
  contact: {
    email: '',
    mobile: ''
  },
  location: '',
  socialAccounts: [
    { id: 1, url: '' },
    { id: 2, url: '' },
    { id: 3, url: '' }
  ],
  industry: ''
})

const pronounsOptions = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

const countries = ref([
  {
    name: 'Australia',
    code: 'AU',
    states: [
      {
        name: 'New South Wales',
        cities: [
          { cname: 'Sydney', code: 'A-SY' },
          { cname: 'Newcastle', code: 'A-NE' },
          { cname: 'Wollongong', code: 'A-WO' }
        ]
      },
      {
        name: 'Queensland',
        cities: [
          { cname: 'Brisbane', code: 'A-BR' },
          { cname: 'Townsville', code: 'A-TO' }
        ]
      }
    ]
  },
  {
    name: 'Canada',
    code: 'CA',
    states: [
      {
        name: 'Quebec',
        cities: [
          { cname: 'Montreal', code: 'C-MO' },
          { cname: 'Quebec City', code: 'C-QU' }
        ]
      },
      {
        name: 'Ontario',
        cities: [
          { cname: 'Ottawa', code: 'C-OT' },
          { cname: 'Toronto', code: 'C-TO' }
        ]
      }
    ]
  },
  {
    name: 'United States',
    code: 'US',
    states: [
      {
        name: 'California',
        cities: [
          { cname: 'Los Angeles', code: 'US-LA' },
          { cname: 'San Diego', code: 'US-SD' },
          { cname: 'San Francisco', code: 'US-SF' }
        ]
      },
      {
        name: 'Florida',
        cities: [
          { cname: 'Jacksonville', code: 'US-JA' },
          { cname: 'Miami', code: 'US-MI' },
          { cname: 'Tampa', code: 'US-TA' },
          { cname: 'Orlando', code: 'US-OR' }
        ]
      },
      {
        name: 'Texas',
        cities: [
          { cname: 'Austin', code: 'US-AU' },
          { cname: 'Dallas', code: 'US-DA' },
          { cname: 'Houston', code: 'US-HO' }
        ]
      }
    ]
  }
])

function afterUpload(event) {
  console.log('event: ', event)
  picture_src.value = event.files[0].objectURL
}

const url = ref(import.meta.env.VITE_API_URL + '/api/file/avatar')

onMounted(() => {
  const user_id =

  const config = {
    method: 'get',
    url: `${import.meta.env.VITE_API_URL}/api/account/${user_id}`,
    headers: {
      'Accept': '*/*',
      'Host': '127.0.0.1:8000',
      'Connection': 'keep-alive'
    }
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
})
</script>

<template>
  <Card>
    <template #title>Profile</template>
    <template #content>
      <ProfileInfoCom header="Profile Photo" explanation="Upload a photo by clicking the avatar below">
        <Avatar
          :image="picture_src"
          shape="circle"
          :pt="ptOptions"
          @click="triggerFileUpload"
          class="pointer-cursor"
        />

        <FileUpload
          ref="fileUpload"
          mode="basic"
          name="file[]"
          :url="url"
          accept="image/*"
          :maxFileSize="1000000"
          :auto="true"
          :pt="fileUploadOptions"
          @upload="afterUpload"
        >
        </FileUpload>
      </ProfileInfoCom>

      <ProfileInfoCom header="Name" explanation="Enter your full name as you would like it to appear.">
        <InputText type="text" v-model="nameValue" />
      </ProfileInfoCom>

      <ProfileInfoCom header="Pronouns" explanation="What do you like to be called?">
        <div class="card flex justify-content-center">
          <Dropdown
            v-model="form.pronouns"
            :options="pronounsOptions"
            optionLabel="name"
            placeholder="Select a Pronouns"
          />
        </div>
      </ProfileInfoCom>

      <ProfileInfoCom
        header="Contact Information"
        explanation="Provide your email address or phone number for contact."
      >
        <div style="display:flex; gap: 10px;margin-top:10px">
          <FloatLabel v-for="(val,key) in form.contact" v-bind:key>
            <InputText :id="key" v-model="form.contact[key]" />
            <label :for="key">{{ key }}</label>
          </FloatLabel>
        </div>
      </ProfileInfoCom>

      <ProfileInfoCom
        header="Social Accounts"
        explanation="Include links to your social media profiles."
      >
        <div class="flex-hor-start" style="margin: 5px 0;" v-for="account of form.socialAccounts"
             :key="account.id">
          <i class="pi pi-link"></i>
          <InputText type="text" v-model="account.url" />
        </div>

      </ProfileInfoCom>

      <ProfileInfoCom header="Birthday" explanation="Enter your full name as you would like it to appear.">
        <Calendar v-model="date" />
      </ProfileInfoCom>

      <ProfileInfoCom header="Industry" explanation="Specify the industry you are associated with.">
        <div>
          <CascadeSelect v-model="form.industry" :options="countries" optionLabel="cname" optionGroupLabel="name"
                         :optionGroupChildren="['states', 'cities']" style="min-width: 14rem"
                         placeholder="Select a Industry">
            <template #option="slotProps">
              <div class="flex align-items-center">
                <img v-if="slotProps.option.states" :alt="slotProps.option.name"
                     src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                     :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                <i v-if="slotProps.option.cities" class="pi pi-compass mr-2"></i>
                <i v-if="slotProps.option.cname" class="pi pi-map-marker mr-2"></i>
                <span>{{ slotProps.option.cname || slotProps.option.name }}</span>
              </div>
            </template>
          </CascadeSelect>
        </div>
      </ProfileInfoCom>

      <ProfileInfoCom header="Location" explanation="Where are you based or where do you primarily operate?">
        <CascadeSelect v-model="form.location" :options="countries" optionLabel="cname" optionGroupLabel="name"
                       :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City">
          <template #option="slotProps">
            <div class="flex align-items-center">
              <img v-if="slotProps.option.states" :alt="slotProps.option.name"
                   src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                   :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
              <i v-if="slotProps.option.cities" class="pi pi-compass mr-2"></i>
              <i v-if="slotProps.option.cname" class="pi pi-map-marker mr-2"></i>
              <span>{{ slotProps.option.cname || slotProps.option.name }}</span>
            </div>
          </template>
        </CascadeSelect>
      </ProfileInfoCom>

    </template>
    <template #footer>
      <Button label="Save Modification" severity="contract" style="float: right;"></Button>
    </template>
  </Card>

</template>

<style scoped lang="scss">
.expla-font-stl {
  color: var(--gray-500);
  margin: 10px 0;
  font-size: 14px
}

.img-container {
  width: 10rem;
  height: 10rem;
}

.fu-stl {
  display: none;
}

</style>