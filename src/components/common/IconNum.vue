<template>
    <div class="v-cen">
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
defineProps(['icon', 'num'])
</script>
