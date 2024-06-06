<script setup>
const props = defineProps(['name', 'avatar', 'withFollowBtn'])

function loadAvatarErrorHandle(event) {
    console.log('load avatar error handle event', event)
    // eslint-disable-next-line vue/no-mutating-props
    props.avatar = '@/assets/pictures/hammer_logo.webp'
}
</script>

<template>
    <div class="flex-hor-start son-gap-10">
        <Avatar
            :image="props.avatar"
            size="small"
            shape="circle"
            @error="loadAvatarErrorHandle"
        />
        <Button :label="props.name" icon="pi pi-at" link></Button>
        <Button
            v-if="withFollowBtn" label="Follow" icon="pi pi-plus" severity="contrast"
        ></Button>
    </div>
</template>

<style scoped lang="scss">

</style>