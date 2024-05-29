<template>
  <div class="signupFrm">
    <form action="" class="form">
      <h1 class="title">Sign Up</h1>
      <div class="inputContainer" v-for="(item, idx) in registerForm" :key="idx">
        <input :type="item.type" class="input" placeholder="a" v-model="item.input" />
        <label for="" class="label">{{ item.text }}</label>
      </div>
      <Button severity="contract" class="submitBtn" @click="handleSubmit(registerForm)">Sign Up</Button>
    </form>
    <div style="margin-top: 10px">
      already enrolled?
      <router-link to="/index/login">Sign in</router-link>
      now!
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router/index.js'
import { isSignIn, useUserStore } from '@/stores/user.js'

const userStore = useUserStore()

const registerForm = ref([
  {
    type: 'text',
    input: '',
    text: 'username'
  },
  {
    type: 'password',
    input: '',
    text: 'password'
  }
])

async function handleSubmit(registerForm) {

  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/account/register`,
      {
        username: registerForm[0].input,
        password: registerForm[1].input
      },
      {
        withCredentials: true
      }
    )

    if (resp.status === 201) {
      userStore.clearUserData()
      userStore.userData.username = registerForm[0].input
      isSignIn.value = true
      await router.push({
        name: 'home'
      })

      await useUserStore().setUserData()

    }
  } catch (e) {
    console.log('register err', e)
  }
}

</script>

<style lang="scss" scoped>
.signupFrm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed; /* 固定定位 */
  top: 75px;
  left: 0;
  right: 0;
  bottom: 0;
}

.form {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: white;
  width: 400px;
  border: solid 0.5px #d9d9d9;
  border-radius: 12px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
}

.title {
  font-size: 50px;
  margin-bottom: 20px;
}

.inputContainer {
  position: relative;
  height: 45px;
  width: 90%;
  margin-bottom: 17px;
}

.inputContainer:last-of-type {
  margin-bottom: 0;
}

.input {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid var(--gray-600);
  border-radius: 7px;
  font-size: 16px;
  padding: 0 20px;
  outline: none;
  background: none;
  z-index: 1;
}

.label {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0 4px;
  background-color: white;
  color: var(--gray-600);
  font-size: 16px;
  transition: 0.5s;
  z-index: 0;
}

::placeholder {
  color: transparent;
}

.submitBtn {
  display: block;
  padding: 15px 30px;
  width: 90%;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px 0;
}

.submitBtn:hover {
  transform: translateY(-2px);
}

.input:focus + .label {
  top: -7px;
  left: 3px;
  font-size: 14px;
  font-weight: 600;
  color: black;
  z-index: 10;
}

.input:not(:placeholder-shown) + .label {
  top: -7px;
  left: 3px;
  font-size: 14px;
  font-weight: 600;
}

.input:focus {
  border: 2px solid black;
}

.p {
  font-size: 14px;
  color: deepskyblue;
}

.p:hover {
  cursor: pointer;
  color: #10b981;
}

.message {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}
</style>
