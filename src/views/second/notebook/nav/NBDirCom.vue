<script setup>

</script>

<template>
<div>
    <div class="notebook-title-stl common-stl flex-hor-sb">
        <span>Operate</span>
        <Button
            icon="pi pi-angle-left"
            text
            :pt="{root: {style: 'margin:0'}}"
            @click="nbStore.navVisible = false"
        ></Button>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>