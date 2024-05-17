<script setup>
import ProfileInfoCom from '@/components/common/ProfileInfoCom.vue'
import { ref } from 'vue'
import FloatLabel from 'primevue/floatlabel'

const passwordInput = ref({
  old: '',
  new: '',
  confirm: ''
})
</script>

<template>
  <Card>
    <template #title>
      Secure
    </template>
    <template #content>
      <ProfileInfoCom header="Change password"
                      explanation="Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. ">
        <div class="password-stl">
          <FloatLabel>
            <Password v-model="passwordInput.old" inputId="old" toggleMask :feedback="false" />
            <label for="old">Old Password</label>
          </FloatLabel>
          <FloatLabel>
            <Password v-model="passwordInput.new" inputId="new" toggleMask :feedback="false" />
            <label for="new">New Password</label>
          </FloatLabel>
          <FloatLabel>
            <Password v-model="passwordInput.confirm" inputId="confirm" toggleMask :feedback="false" />
            <label for="confirm">Confirm Password</label>
          </FloatLabel>
        </div>
      </ProfileInfoCom>
    </template>

    <template #footer>
      <Button label="Save Modification" severity="contract" style="float: right;"></Button>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.password-stl {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}
</style>