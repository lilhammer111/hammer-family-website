<script setup>
import { isSignIn } from '@/stores/user.js'
import { ref } from 'vue'
import router from '@/router/index.js'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()
const Items = ref([
  {
    icon: 'pi pi-user',
    label: 'Profile',
    route: 'info',
    action: (item) => {
      router.push({ name: item.route })
    }
  },
  {
    icon: 'pi  pi-cog',
    label: 'Settings',
    route: 'secure',
    action: (item) => {
      router.push({ name: item.route })
    }
  },
  {
    icon: 'pi pi-sign-out',
    label: 'Logout',
    route: 'home',
    action: (item) => {
      router.push({ name: item.route })
      isSignIn.value = false
      userStore.clearUserData()
      console.log("user info after logout",userStore.userData)
    }
  }
])


const opRef = ref()
const toggle = (event) => {
  opRef.value.toggle(event)
}


</script>

<template>
  <!--  <div style="position: relative;"-->
  <!--       @mouseover="avaItemEnabled = true"-->
  <!--       @mouseleave="avaItemEnabled = false"-->
  <!--  >-->
  <Avatar
    v-if="isSignIn"
    :image="userStore.userData.avatar_url"
    class="ava-stl"
    size="normal"
    shape="circle"
    @click="toggle"
  />

  <OverlayPanel ref="opRef" class="op-stl">
    <div v-for="item of Items"
         :key="item.label"
         class="op-item-stl v-cen"
         @click="item.action(item)"
    >
      <i :class="item.icon" style="margin-right:10px"></i>
      <span>{{ item.label }}</span>
    </div>
  </OverlayPanel>

</template>

<style scoped lang="scss">
.ava-stl {
  font-size: 55px;
  margin-right: 10px;
}

.ava-stl:hover {
  box-sizing: border-box;
  cursor: pointer;
  border: 3px solid var(--gray-400);
}

.ava-item-stl {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.op-item-stl {
  height: 30px;
  line-height: 30px;
  color: black;
}

.op-item-stl:hover {
  cursor: pointer;
  color: var(--gray-400);

}

.p-overlaypanel .p-overlaypanel-content {
  padding: 0.5px;
}


</style>
