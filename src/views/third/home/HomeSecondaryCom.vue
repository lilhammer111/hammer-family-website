<script setup>
import foodExample from '@/assets/pictures/food1.webp'
</script>

<template>
    <Button label="🌈  Taste & Tell" link size="large"></Button>

            <Image
                preview
                :src="foodExample"
                alt="Image"
                width="100%"
                imageStyle="height:220px;border-radius: 5px"
            />
</template>

<style scoped lang="scss">

</style>