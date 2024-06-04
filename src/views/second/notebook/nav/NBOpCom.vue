<script setup>
import DialogInputElCom from '@/views/common/dialog/DialogInputElCom.vue'
import DialogSelectElCom from '@/views/common/dialog/DialogSelectElCom.vue'
import DialogElCom from '@/views/common/dialog/DialogElCom.vue'
import { ref } from 'vue'
import { useNbStore } from '@/stores/notebook.js'
import axios from 'axios'
import { baseUrl, staticBaseUrl } from '@/api/index.js'


const nbStore = useNbStore()

const uploadDocDialogVisible = ref(false)

const items = ref([
    {
        icon: 'pi pi-home',
        label: 'Home',
        action: async () => {

        }
    },
    {
        icon: 'pi pi-search',
        label: 'Search',
        action: async () => {

        }
    },
    {
        icon: 'pi pi-inbox',
        label: 'Inbox',
        action: async () => {

        }
    },
    {
        icon: 'pi pi-cloud-upload',
        label: 'Import',
        action: async () => {
            uploadDocDialogVisible.value = true
        }
    }
])

const fileInput = ref(null)
const uploadBtnLabel = ref('Select a file in markdown format')
const openFileSystem = () => {
    fileInput.value.click()
}

const uploadDocument = async (event) => {
    console.log('file upload event: ', event)
    const files = event.target.files
    if (!files.length) {
        console.log('files length is 0')
        return
    }

    const file = files[0]

    uploadBtnLabel.value = file.name

    const formData = new FormData()
    formData.append('document', file)

    try {
        const resp = await axios.post(
            `${baseUrl}/file/document`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            }
        )

        if (resp.status === 200) {
            console.log('upload document successfully', resp)
            form.value.text_url = staticBaseUrl + '/document/' + file.name
            console.log('form after uploading doc', form.value)
        } else {
            console.log('status code is not 200')
        }
    } catch (e) {
        console.log('upload document err:', e)
    }
}

const form = ref({
    title: '',
    kind: '',
    summary: '',
    text_url: ''
})

const kindsOptions = ref([
    {
        name: 'Note',
        code: 'N'
    },
    {
        name: 'Tutorial',
        code: 'T'
    }
])

const createArticle = async () => {
    console.log('form: ', form.value)

    try {
        const resp = await axios.post(
            `${baseUrl}/article`,
            form.value,
            { withCredentials: true }
        )

        if (resp.status === 201) {
            const resp_data = resp.data['data']
            console.log('create article successfully', resp.data['data'])

            if (form.value.kind === 'note') {
                nbStore.noteItems.unshift(resp_data)
            } else {
                nbStore.tutorialItems.unshift(resp_data)
            }

        } else {
            console.log('sc is not 201')
        }
    } catch (e) {
        console.log(e)
    } finally {
        uploadDocDialogVisible.value = false
    }
}

</script>

<template>
    <div>
        <div class="notebook-title-stl  flex-hor-sb">
            <span>Operate</span>
            <Button
                icon="pi pi-angle-double-left"
                text
                rounded
                :pt="{root: {style: 'margin:0'}}"
                @click="nbStore.navVisible = false"
            ></Button>
        </div>
        <div
            v-for="(item, idx) of items"
            :key="idx"
            class="notebook-item-stl notebook-common-stl flex-hor-start son-gap-10"
            @click="item.action"
        >
            <i :class="item.icon "></i>
            <span>{{ item.label }}</span>
        </div>
    </div>

    <Dialog
        :visible="uploadDocDialogVisible"
        @update:visible="uploadDocDialogVisible = false"
        header="Upload a Doc"
        :style="{ width: '28rem' }"
    >

        <div class="flex-ver-start son-gap-10">
            <DialogInputElCom :required="true" label="Title" v-model="form.title"></DialogInputElCom>
            <DialogSelectElCom :required="true" label="Accessibility" v-model="form.kind"
                               :options="kindsOptions"></DialogSelectElCom>
            <DialogElCom label="Document" :required="true">
                <template #content>
                    <Button severity="secondary" :label="uploadBtnLabel"
                            @click="openFileSystem"></Button>
                    <input type="file" ref="fileInput" style="display:none" @change="uploadDocument" />
                </template>
            </DialogElCom>
            <DialogElCom label="Introduction" :required="false">
                <template #content>
                    <Textarea auto-resize v-model="form.summary"></Textarea>
                </template>
            </DialogElCom>
            <Divider></Divider>
            <Button severity="contrast" label="Create Doc" @click="createArticle"></Button>
        </div>

    </Dialog>
</template>

<style scoped lang="scss">
</style>