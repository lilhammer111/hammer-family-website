import { ref, watchEffect } from 'vue'


export const isSignIn = ref(localStorage.getItem('isSignIn') === 'true')

watchEffect(
  () => {
    localStorage.setItem('isSignIn', String(isSignIn.value))
  }
)