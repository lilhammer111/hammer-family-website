<script setup>
import { onMounted, ref } from 'vue'
import ProfileInfoCom from '@/components/common/ProfileInfoCom.vue'
import FloatLabel from 'primevue/floatlabel'
import axios from 'axios'

const date = ref()
const localAvatarUrl = ref('src/assets/pictures/hammer.jpg')

const ptOptions = ref({
  root: { class: 'img-container' }
})

const fileUploadOptions = ref({
  root: { style: 'display: none' }
})

const fileUpload = ref(null)

const triggerFileUpload = () => {
  fileUpload.value.$refs.fileInput.click()
}

const pronounsOptions = ref(['He', 'She'])

const industryOptions = ref(['IT', 'Education'])

const uploadUrl = ref(`${import.meta.env.VITE_API_URL}/api/file/avatar`)

function afterUpload(event) {
  console.log('after uploading event: ', event)
  localAvatarUrl.value = event.files[0].objectURL
  let filename = event.files[0]['name']
  console.log('uploaded file name:', filename)
  form.value.avatar_url = `${import.meta.env.VITE_API_URL}/static/file/${filename}`
  console.log('uploaded avatar url', form.value.avatar_url)
}

const form = ref({
  username: '',
  birthday: '',
  pronouns: '',
  avatar_url: '',
  email: '',
  mobile: '',
  location: '',
  socialAccounts: [],
  industry: ''
})

onMounted(() => {
  const config = {
    method: 'get',
    url: `${import.meta.env.VITE_API_URL}/api/user`,
    withCredentials: true
  }

  axios(config)
    .then(function(response) {
      console.log('get user info:', response)
      form.value.avatar_url = response.data['avatar_url']
      form.value.industry = response.data['industry']
      form.value.username = response.data['username']
      form.value.email = response.data['email']
      form.value.mobile = response.data['mobile']
      form.value.location = response.data['location']
      form.value.birthday = response.data['birthday']
      form.value.pronouns = response.data['pronouns']

      form.value.socialAccounts = response.data['social_accounts'] || []

      // 如果数组元素少于三个，补足空字符串直到数组长度为三
      while (form.value.socialAccounts.length < 3) {
        form.value.socialAccounts.push('')
      }

    })
    .catch(function(error) {
      console.log('get user info error: ', error)
    })
})

function saveUpdate() {
  const url = `${import.meta.env.VITE_API_URL}/api/user`

  console.log("social account: ", form.value.socialAccounts)
  console.log("social account length: ", form.value.socialAccounts.length)
  console.log("social account ", form.value.socialAccounts.length === 0)
  console.log("form ", form.value)


  if (form.value.socialAccounts.length === 0) {
    form.value.socialAccounts = null
  }

  axios.post(
    url,
    form.value,
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(function(response) {
    console.log('save update user response: ', response)
  }).catch(function(error) {
    console.log('save update user error: ', error)
  })
}
</script>

<template>
  <Card>
    <template #title>Profile</template>
    <template #content>
      <ProfileInfoCom header="Profile Photo" explanation="Upload a photo by clicking the avatar below">
        <Avatar
          :image="form.avatar_url"
          shape="circle"
          :pt="ptOptions"
          @click="triggerFileUpload"
          class="pointer-cursor"
        />

        <FileUpload
          ref="fileUpload"
          mode="basic"
          :url="uploadUrl"
          name="file"
          accept="image/*"
          :maxFileSize="1000000"
          :auto="true"
          :pt="fileUploadOptions"
          :withCredentials="true"
          @upload="afterUpload"
        >
        </FileUpload>
      </ProfileInfoCom>

      <ProfileInfoCom header="Username" explanation="Enter your full name as you would like it to appear.">
        <InputText type="text" v-model="form.username" />
      </ProfileInfoCom>

      <ProfileInfoCom header="Pronouns" explanation="What do you like to be called?">
        <Dropdown
          v-model="form.pronouns"
          :options="pronounsOptions"
          placeholder="Select a Pronouns"
        />
      </ProfileInfoCom>

      <ProfileInfoCom
        header="Contact Information"
        explanation="Provide your email address or phone number for contact."
      >
        <div style="display:flex; gap: 10px;margin-top:15px">
          <FloatLabel>
            <InputText id="1" v-model="form.mobile" />
            <label for="mobile">mobile</label>
          </FloatLabel>

          <FloatLabel>
            <InputText id="2" v-model="form.email" />
            <label for="email">email</label>
          </FloatLabel>
        </div>
      </ProfileInfoCom>

      <ProfileInfoCom
        header="Social Accounts"
        explanation="Include links to your social media profiles."
      >
        <div class="flex-ver-start son-gap-10">
          <div class="flex-hor-start son-gap-10">
            <i class="pi pi-link"></i>
            <InputText type="text" v-model="form.socialAccounts[0]" />
          </div>
          <div class="flex-hor-start son-gap-10">
            <i class="pi pi-link"></i>
            <InputText type="text" v-model="form.socialAccounts[1]" />
          </div>
          <div class="flex-hor-start son-gap-10">
            <i class="pi pi-link"></i>
            <InputText type="text" v-model="form.socialAccounts[2]" />
          </div>
        </div>

      </ProfileInfoCom>

      <ProfileInfoCom header="Birthday" explanation="Enter your full name as you would like it to appear.">
        <Calendar v-model="date" />
      </ProfileInfoCom>

      <ProfileInfoCom header="Industry" explanation="Specify the industry you are associated with.">
        <Dropdown
          v-model="form.industry"
          :options="industryOptions"
          optionLabel="name"
          placeholder="Select a Industry"
        />
      </ProfileInfoCom>

      <ProfileInfoCom header="Location" explanation="Where are you based or where do you primarily operate?">
        <InputText type="text" v-model="form.location" />
      </ProfileInfoCom>

    </template>
    <template #footer>
      <Button @click="saveUpdate" label="Save Modification" severity="contract" style="float: right;"></Button>
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