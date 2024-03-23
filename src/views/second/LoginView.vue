<template>
  <div class="signupFrm">
    <form action="" class="form" @submit="handleSubmit">
      <h1 class="title">Sign In</h1>
      <div class="inputContainer" v-for="item in items" :key="item.id">
        <input :type="item.type" class="input" placeholder="a" v-model="item.input" />
        <label for="" class="label">{{ item.text }}</label>
      </div>
      <input type="submit" class="submitBtn" value="Sign In" />
    </form>
    <div style="margin-top: 10px">
      yet have an account?
      <a href="">Sign up</a>
      now!
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
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
</script>

<style lang="css" scoped>
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
  border: 1px solid #dadce0;
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
  color: #dadce0;
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
  /* background-color: purple; */
  background-color: #10b981;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px 0;
}

.submitBtn:hover {
  /* background-color: #9867c5; */
  background-color: #188a42;
  transform: translateY(-2px);
}

.input:focus + .label {
  top: -7px;
  left: 3px;
  font-size: 14px;
  font-weight: 600;
  color: #10b981;
  z-index: 10;
}

.input:not(:placeholder-shown) + .label {
  top: -7px;
  left: 3px;
  font-size: 14px;
  font-weight: 600;
}

.input:focus {
  border: 2px solid #10b981;
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
