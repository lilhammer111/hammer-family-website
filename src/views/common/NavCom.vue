<template>
    <div class="left-nav">
        <Card>
            <template #content>
                <div class="flex-ver-start son-gap-10">
                    <RouterLink class="left-nav-item " v-for="item of items" :key="item.id" :to="{name: item.route}"
                                :target="item.target">{{ item.text }}
                    </RouterLink>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>

defineProps([
    'items'
])

</script>

<style lang="scss" scoped>
.left-nav {
    width: 100%;


}

.p-button {
    color: #000000;
}
</style>
