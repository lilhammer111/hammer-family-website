<script setup>
import { ref } from 'vue'
import ProfileInfoCom from '@/components/common/ProfileInfoCom.vue'
import FloatLabel from 'primevue/floatlabel'
import axios from 'axios'
import { useUserStore } from '@/stores/user.js'
import { imageUrl } from '@/api/account.js'
import PageBottomCom from '@/components/common/PageBottomCom.vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const userStore = useUserStore()

const ptOptions = ref({
  root: { class: 'img-container' },
  image: { style: 'height:100%;width:auto' }
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

const url = ref(imageUrl)

function afterUpload(event) {
  console.log('after uploading event: ', event)
  let filename = event.files[0]['name']
  userStore.userData.avatar_url = `${import.meta.env.VITE_API_URL}/static/file/${filename}`
}


async function updateUserInfo() {

  const data = userStore.userData

  console.log('birthday', data['birthday'])
  if (data['birthday']) {
    data['birthday'] = userStore.userData.birthday.toISOString().split('T')[0]
  }
  console.log('data to post', data)

  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/api/user`,
      data,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    console.log('update user response:', response)
    // todo
    if (response.status === 200) {

      toast.add({
        severity: 'plain',
        summary: 'Great! You\'ve update your information successfully!',
        group: 'dialog',
        life: 150000
      })
    }

    await useUserStore().setUserData()

  } catch (error) {
    console.log('save update user error: ', error)
  }
}
</script>

<template>
  <Card>
    <template #title>Profile</template>
    <template #content>
      <ProfileInfoCom header="Profile Photo" explanation="Upload a photo by clicking the avatar below">
        <div style="height: 180px">
          <Avatar
            :image="userStore.userData.avatar_url"
            :pt="ptOptions"
            @click="triggerFileUpload"
            class="pointer-cursor"
          />
        </div>


        <FileUpload
          ref="fileUpload"
          mode="basic"
          :url="url"
          name="image"
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
        <InputText type="text" v-model="userStore.userData.username" />
      </ProfileInfoCom>

      <ProfileInfoCom header="Pronouns" explanation="What do you like to be called?">
        <Dropdown
          v-model="userStore.userData.pronouns"
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
            <InputText id="1" v-model="userStore.userData.mobile" />
            <label for="mobile">mobile</label>
          </FloatLabel>

          <FloatLabel>
            <InputText id="2" v-model="userStore.userData.email" />
            <label for="email">email</label>
          </FloatLabel>
        </div>
      </ProfileInfoCom>

      <ProfileInfoCom
        header="Social Accounts"
        explanation="Include links to your social media profiles."
      >
        <div class="flex-ver-start son-gap-10">
          <div class="flex-hor-start son-gap-10" v-for="idx in 3" :key="idx">
            <i class="pi pi-link"></i>
            <InputText type="text" v-model="userStore.userData.social_account[idx-1]" />
          </div>
        </div>

      </ProfileInfoCom>

      <ProfileInfoCom header="Birthday" explanation="Enter your full name as you would like it to appear.">
        <Calendar v-model="userStore.userData.birthday" />
      </ProfileInfoCom>

      <ProfileInfoCom header="Industry" explanation="Specify the industry you are associated with.">
        <Dropdown
          v-model="userStore.userData.industry"
          :options="industryOptions"
          placeholder="Select a Industry"
        />
      </ProfileInfoCom>

      <ProfileInfoCom header="Location" explanation="Where are you based or where do you primarily operate?">
        <InputText type="text" v-model="userStore.userData.location" />
      </ProfileInfoCom>

    </template>
    <template #footer>
      <Button @click="updateUserInfo" label="Save Modification" severity="contract" style="float: right;"></Button>
    </template>
  </Card>
  <PageBottomCom content="Hope these words add a little sparkle to your day."></PageBottomCom>
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