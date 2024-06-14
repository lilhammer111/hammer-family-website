<script setup>
import { ref } from 'vue'

const props = defineProps({
    name: {
        type: String,
        default: 'stranger'
    },
    avatar: {
        type: String,
        // todo
        default: 'default-url'
    },
    withFollowBtn: {
        type: Boolean,
        default: false
    },
    withNameIcon: {
        type: Boolean,
        default: false
    }
})


// function loadAvatarErrorHandle(event) {
//     console.log('load avatar error handle event', event)
//     props.avatar = '@/assets/pictures/hammer_logo.webp'
// }

const avatar = ref(props.avatar ? props.avatar:'@/assets/pictures/hammer_logo.webp')
const icon = ref(props.withNameIcon ? "pi pi-at" : "")
</script>

<template>
    <div class="flex-hor-start son-gap-10">
        <Avatar
            :image="avatar"
            size="small"
            shape="circle"
        />
        <Button :label="props.name" :icon="icon" link></Button>
        <Button
            v-if="withFollowBtn" label="Follow" icon="pi pi-plus" severity="contrast"
        ></Button>
    </div>
</template>

<style scoped lang="scss">

</style>