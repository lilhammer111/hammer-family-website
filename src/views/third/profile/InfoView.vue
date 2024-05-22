<script setup>
import { ref } from 'vue'
import ProfileInfoCom from '@/components/common/ProfileInfoCom.vue'
import FloatLabel from 'primevue/floatlabel'
import axios from 'axios'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()

const userData = ref(userStore.userData)

const date = ref()

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
  let filename = event.files[0]['name']
  userData.value.avatar_url = `${import.meta.env.VITE_API_URL}/static/file/${filename}`
}

// const userData = ref({
//   username: '',
//   birthday: '',
//   pronouns: '',
//   avatar_url: '',
//   email: '',
//   mobile: '',
//   location: '',
//   social_account: [
//     {
//       id: 1,
//       url: ''
//     },
//     {
//       id: 2,
//       url: ''
//     },
//     {
//       id: 3,
//       url: ''
//     }
//   ],
//   industry: ''
// })
//
// onMounted(() => {
//   userStore.fetchUserData()
// })

function saveUpdate() {
  const url = `${import.meta.env.VITE_API_URL}/api/user`

  let postData = {}

  for (const key in userData.value) {
    postData[key] = userData.value[key]
    if (key === 'social_account') {
      postData[key] = []
      userData.value.social_account.forEach(
        (elem) => {
          postData[key].push(elem.url)
        }
      )
    }
  }

  console.log('data to post', postData)

  axios.post(
    url,
    postData,
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
          :image="userData.avatar_url"
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
          :maxFileSize="20000000"
          :auto="true"
          :pt="fileUploadOptions"
          :withCredentials="true"
          @upload="afterUpload"
        >
        </FileUpload>
      </ProfileInfoCom>

      <ProfileInfoCom header="Username" explanation="Enter your full name as you would like it to appear.">
        <InputText type="text" v-model="userData.username" />
      </ProfileInfoCom>

      <ProfileInfoCom header="Pronouns" explanation="What do you like to be called?">
        <Dropdown
          v-model="userData.pronouns"
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
            <InputText id="1" v-model="userData.mobile" />
            <label for="mobile">mobile</label>
          </FloatLabel>

          <FloatLabel>
            <InputText id="2" v-model="userData.email" />
            <label for="email">email</label>
          </FloatLabel>
        </div>
      </ProfileInfoCom>

      <ProfileInfoCom
        header="Social Accounts"
        explanation="Include links to your social media profiles."
      >
        <div class="flex-ver-start son-gap-10">
          <div class="flex-hor-start son-gap-10" v-for="(obj,idx) in userData.social_account" :key="idx">
            <i class="pi pi-link"></i>
            <InputText type="text" v-model="obj.url" />
          </div>
          <!--          <div class="flex-hor-start son-gap-10">-->
          <!--            <i class="pi pi-link"></i>-->
          <!--            <InputText type="text" v-model="userData.social_account[1]" />-->
          <!--          </div>-->
          <!--          <div class="flex-hor-start son-gap-10">-->
          <!--            <i class="pi pi-link"></i>-->
          <!--            <InputText type="text" v-model="userData.social_account[2]" />-->
          <!--          </div>-->
        </div>

      </ProfileInfoCom>

      <ProfileInfoCom header="Birthday" explanation="Enter your full name as you would like it to appear.">
        <Calendar v-model="date" />
      </ProfileInfoCom>

      <ProfileInfoCom header="Industry" explanation="Specify the industry you are associated with.">
        <Dropdown
          v-model="userData.industry"
          :options="industryOptions"
          placeholder="Select a Industry"
        />
      </ProfileInfoCom>

      <ProfileInfoCom header="Location" explanation="Where are you based or where do you primarily operate?">
        <InputText type="text" v-model="userData.location" />
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