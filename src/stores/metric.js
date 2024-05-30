import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { baseUrl } from '@/api/index.js'

export const useMetricStore = defineStore('metric', () => {
  const healthData = ref([])
  const dietData = ref([])
  const behaviorData = ref([])

  async function setHealthData() {
    const resp = await axios.get(`${baseUrl}/health/all`, {
      withCredentials: true
    })

    try {
      if (resp.status === 200) {
        healthData.value = resp.data['data']
        console.log('health data now', healthData.value)
      } else {
        console.log('unexpected response status', resp)
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function setDietData() {
    const resp = await axios.get(`${baseUrl}/diet/all`, {
      withCredentials: true
    })

    try {
      if (resp.status === 200) {
        dietData.value = resp.data['data']
        console.log('diet data now', dietData.value)
      } else {
        console.log('unexpected response status', resp)
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function setBehaviorData() {
    const resp = await axios.get(
      `${baseUrl}/behavior/all`,
      {
        withCredentials: true
      }
    )

    try {
      if (resp.status === 200) {
        behaviorData.value = resp.data['data']
        console.log('behavior data now', behaviorData.value)
      } else {
        console.log('unexpected response status', resp)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return { healthData, dietData, behaviorData, setHealthData, setDietData, setBehaviorData }
})