<template>
  <div class="flex-hor-sb mg-btm-10">
    <div style="color: var(--bluegray-600)">{{ time }}</div>
    <div class="icon-stl">
      <IconNum icon="pi pi-thumbs-up" :num="remark.thumb_num"></IconNum>
      <IconNum icon="pi pi-comment" :num="remark.comment_num" @click="toggleState"></IconNum>
    </div>
  </div>
  <div v-if="showRemark">
    <div class="input-stl mg-btm-10">
      <Avatar style="margin-top:3px" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg"
              size="normal" shape="square" />
      <InputGroup style="width:100%;position: relative">
        <InputText v-show="!showTextArea"
                   style="width:100%"
                   :class="inputClass"
                   type="text"
                   v-model="inputContent"
                   variant="filled"
                   @click="showTextArea = true"
                   :pt="inputTextPassThrough"
        />
        <Textarea v-show="showTextArea" v-model="inputContent" rows="5" cols="30" style="width:100%"
                  variant="filled" />
        <Button class="submit-btn-stl" v-if="showTextArea" severity="contract" label="Confirm"
                size="small"></Button>
      </InputGroup>
    </div>
    <div class="comment-stl">
      <div class="every-comment-stl " v-for="(comment, index) in comments" :key="comment.username">
        <div class="flex-hor-sb">
          <div class="flex-hor-start">
            <Avatar :image="comment.avatar"
                    size="small" shape="circle" />
            <div style="font-weight:bolder">{{ comment.username }}</div>

          </div>
          <div style="color: var(--bluegray-600);font-size: 14px">{{ comment.date }}</div>
        </div>
        <div style="font-size:0.9rem;margin:0.5rem 0 0 2.6rem">{{ comment.content }}</div>
        <Divider v-if="index < comments.length - 1" />
      </div>
    </div>
  </div>

</template>

<script setup>
import IconNum from '@/components/IconNum.vue'
import { ref } from 'vue'

const showRemark = ref(false)
const showTextArea = ref(false)

function toggleState() {
  showRemark.value = !showRemark.value
  showTextArea.value = false
}

const inputTextPassThrough = {
  root: {
    placeholder: 'Be kind and leave a comment...'
  }
}

const inputContent = ref('')

defineProps(['time', 'remark'])

const inputClass = ref({})


const comments = ref([
  {
    username: 'demon',
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    content: 'Wishing you a day filled with love and happiness!',
    date: 'Oct 5'
  },
  {
    username: 'demon',
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png',
    content: 'May your dreams come true and your life be full of joy.',
    date: 'Oct 5'
  },
  {
    username: 'demon',
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png',
    content: 'Sending you lots of love and best wishes!',
    date: 'Oct 5'
  },
  {
    username: 'demon',
    avatar: 'https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp',
    content: 'May you always find reasons to smile.',
    date: 'Oct 5'
  },
  {
    username: 'demon',
    avatar: 'https://primefaces.org/cdn/primevue/images/organization/walter.jpg',
    content: 'Hope your day is as amazing as you are!',
    date: 'Oct 5'
  }
])

</script>

<style scoped lang="scss">
.icon-stl {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
}

.input-stl {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 15px
}

.input-text-expand {
  height: 80px;
}

.submit-btn-stl {
  height: 32px;
  position: absolute;
  bottom: 8px;
  right: 4px;
}

.comment-stl {
  border: var(--gray-200) 1px solid;
  padding: 10px
}

</style>