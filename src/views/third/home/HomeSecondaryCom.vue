<script setup>
import foodExample1 from '@/assets/pictures/food1.webp'
import foodExample2 from '@/assets/pictures/food2.webp'
import foodExample3 from '@/assets/pictures/food3.webp'
import { ref } from 'vue'

const foodData = ref([
    {
        src: foodExample1,
        rating: 3.5
    },
    {
        src: foodExample2,
        rating: 4
    },
    {
        src: foodExample3,
        rating: 5
    },
])
</script>

<template>
    <div class="flex-hor-start">
        <span>🌈</span>
        <Button label="Taste & Tell" link size="large"></Button>
    </div>

    <div class="flex-ver-start son-gap-10">
        <div class="mock-card-stl" v-for="(data, idx) of foodData" :key="idx">
            <Image
                preview
                :src="data.src"
                alt="Image"
                width="100%"
                imageStyle="height:auto;border-top-left-radius: 10px;border-top-right-radius: 10px;"
                :pt="{button: {style: 'margin:0;border-top-left-radius: 10px;border-top-right-radius: 10px;'}}"
            />
            <div style="padding: 5px 10px">
                <div class="flex-hor-start son-gap-10">
                    <Tag severity="contrast" value="Rate"></Tag>
                    <Rating v-model="data.rating" :cancel="false" />
                </div>
            </div>
        </div>
    </div>



</template>

<style scoped lang="scss">
.mock-card-stl {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
</style>