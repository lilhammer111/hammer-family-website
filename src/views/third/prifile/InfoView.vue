<script setup>
import { ref } from 'vue'
import ProfileInfoCom from '@/components/common/ProfileInfoCom.vue'
import FloatLabel from 'primevue/floatlabel'

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
  // ?
  fileUpload.value.$refs.fileInput.click()
}

const nameValue = ref('')
ref([
  {
    header: 'Name',
    explanation: 'Enter your full name as you would like it to appear.'
  },
  {
    header: 'Bio',
    explanation: 'You can @mention other users and organizations to link to them.'
  },
  {
    header: 'Pronouns',
    explanation: 'What do you like to be called?'
  },
  {
    header: 'Social Accounts',
    explanation: 'Include links to your social media profiles.'
  },
  {
    header: 'Industry',
    explanation: 'Specify the industry you are associated with.'
  },
  {
    header: 'Location',
    explanation: 'Where are you based or where do you primarily operate?'
  },
  {
    header: 'Contact Information',
    explanation: 'Provide your email address or phone number for contact.'
  }
])

const form = ref({
  pronouns: '',
  contact: {
    email: '',
    mobile: ''
  }
})

const pronounsOptions = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])


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
          name="pic[]"
          url="/api/upload"
          accept="image/*"
          :maxFileSize="1000000"
          :auto="true"
          choose-label="Upload a photo"
          :pt="fileUploadOptions"
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

      </ProfileInfoCom>

      <ProfileInfoCom header="Birthday" explanation="Enter your full name as you would like it to appear.">
        <Calendar v-model="date" />
      </ProfileInfoCom>

      <ProfileInfoCom header="Industry" explanation="Specify the industry you are associated with.">
        <Calendar v-model="date" />
      </ProfileInfoCom>

      <ProfileInfoCom header="Location" explanation="Where are you based or where do you primarily operate?">
        <Calendar v-model="date" />
      </ProfileInfoCom>

    </template>
    <template #footer>
      <Button label="Save Modification" severity="secondary" style="float: right;"></Button>
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