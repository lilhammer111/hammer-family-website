<template>
  <div class="left-nav">
    <Card>
      <template #content>
        <div class="left-nav-item" v-for="item in items" :key="item.id">
          <RouterLink :to="item.route">
            <Button :label="item.text" :icon="item.icon" severity="secondary" link />
          </RouterLink>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    text: 'Home',
    icon: 'pi pi-home',
    route: 'home'
  },
  {
    text: 'Lilhammer',
    icon: 'pi pi-backward',
    route: 'lilhammer'
  },
  {
    text: 'Msg',
    icon: 'pi pi-comments',
    route: 'msg'
  },
  {
    text: 'Plan',
    icon: 'pi pi-check-circle',
    route: 'plan'
  },
  {
    text: 'Article',
    icon: 'pi pi-comments',
    route: 'article'
  }
])
</script>

<style lang="scss" scoped>
.left-nav {
  width:100%;
  .left-nav-item {
    margin: 5px 0;
  }

  .left-nav-item:hover {
    background-color: var(--teal-400);
    border-radius: 10px;
  }
}

.p-button {
  color: #000000;
}
</style>
