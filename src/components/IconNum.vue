<template>
  <div class="v-cen">
    <!-- <Button :icon="icon" severity="secondary" rounded text> </Button>
    <span>{{ num }}</span> -->
    <Button
      type="button"
      :icon="icon"
      :badge="num"
      badgeSeverity="secondary"
      severity="secondary"
      text
    />
  </div>
</template>

<script setup>
const { icon, num } = defineProps(['icon', 'num'])
</script>
