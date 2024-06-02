<script setup>

import { useNbSotre } from '@/stores/notebook.js'

const nbStore = useNbSotre()
</script>

<template>
    <div>
        <div class="flex-hor-sb">
            <Button
                v-show="!nbStore.navVisible"
                @click="nbStore.navVisible = true"
                icon="pi pi-bars"
                text
            ></Button>
            <Button
                icon="pi pi-share-alt"
                text>
            </Button>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>