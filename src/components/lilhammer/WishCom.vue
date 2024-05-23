<template>
  <Card v-for="item of paginatedItems" :key="item.id">
    <template #title>
      <AvaWithNameCom :name="item.user.name" :avatar="item.user.avatar"></AvaWithNameCom>
    </template>
    <template #content>
      <p>
        {{ item.msg }}
      </p>
      <RemarkCom :time="item.created_at" :remark="item.remark"></RemarkCom>
    </template>
  </Card>

  <Paginator
    :first="first"
    :rows="rowsPerPage"
    :totalRecords="items.length"
    style="width: 100%"
    @page="onPageChange"
  >
  </Paginator>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import RemarkCom from '@/components/common/RemarkCom.vue'
import AvaWithNameCom from '@/components/common/AvaWithNameCom.vue'
import axios from 'axios'

onMounted(() => {
  axios.get(
    `${import.meta.env.VITE_API_URL}/api/wish/paginated`,
    {
      withCredentials: true,
      params: {
        page_number: first.value,
        page_size: rowsPerPage.value
      }
    }
  ).then((resp) => {
    console.log('get wish resp: ', resp)
    items.value = resp.data
  }).catch((err) => {
    console.log('get wish error: ', err)
  })
})

const items = ref([
  {
    user: {
      name: 'Demon',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    msg: '祝我们永远幸福哦！',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    }
  },
  {
    user: {
      name: 'Jojo',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    msg: '要做幸福快乐的宝宝！ 小锤子，我们永远爱你哦',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    }
  },
  {
    user: {
      name: 'lilhammer',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    msg: '嗯。。。嗯。。。',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    }
  },
  {
    user: {
      name: 'Demon',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    msg: '愿你的每一天都充满阳光，心情如这绚烂的阳光一样明媚。',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    }
  },
  {
    user: {
      name: 'hhhhelloworld',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    },
    msg: '在这个特别的日子里，我送上我所有的爱和最好的祝福，愿你幸福快乐！'
  },
  {
    user: {
      name: 'en???',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    },
    msg: '在这个充满希望的新早晨，我想对你说，每个新的日子都是一个新的开始，一个重新开始追逐梦想的机会。愿你抓住这些机会，用你的勇气和智慧去实现那些看似不可能的梦想。无论你的旅程多么艰难，都要记得，有爱的地方就有希望。祝你勇敢无畏，坚持自己的选择，用心去感受生活的每一次奇迹。'
  },

  {
    user: {
      name: 'joker',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    },
    msg: '愿你拥有一颗不老的心，一个永远向上的灵魂。'
  },
  {
    user: {
      name: 'faker',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    },
    msg: '真诚地祝愿你，在人生的旅途中，无论风雨或晴天，都能以乐观的心态去面对。生活中的每一个小小幸运，都是值得珍惜的宝贵财富。愿你的心中总有一片阳光普照的地方，温暖你的每一个清晨，带你走过每一个黑暗。愿你的生活如诗如画，愿你的未来如星辰广阔。'
  },
  {
    user: {
      name: 'pian',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    },
    msg: '在你的世界里，愿快乐无限，梦想成真。'
  },
  {
    user: {
      name: 'dior',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    },
    msg: '愿你在未来的日子里，每一步都走在春风里。'
  },
  {
    user: {
      name: 'uncle',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    },
    msg: '在你生命的每一步旅程中，我都衷心祝愿你能找到那份属于自己的宁静和满足。每一个微笑背后，都藏着无限的故事和深刻的意义。愿你的每一个努力都能得到回报，每一份付出都能映照未来。记住，无论遇到什么困难，你都不是孤单一人。愿爱、希望和坚持永远是你前行的灯塔。'
  },
  {
    user: {
      name: 'ant',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    },
    msg: '生活就像一本书，每一天都是新的一页。愿你的书页中充满了欢笑、成就和美好回忆。当挑战来临时，愿你拥有足够的力量和智慧将其转化为成长的契机。记住，每一次跌倒都是向前迈进的一步。愿你的生活故事充满光彩，愿你的每一步都坚实而有力。'
  },
  {
    user: {
      name: 'mayun',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png'
    },
    created_at: '2024/1/31 15:30',
    remark: {
      thumb_num: '15',
      comment_num: '16'
    },
    msg: '在这个美好的时刻，我想告诉你，你的存在本身就是这个世界上最美的奇迹之一。你的笑容可以点亮最暗的天，你的话语可以温暖最冷的心。愿你永远珍惜自己的价值，无论前方道路多么不确定，都要带着自信和骄傲前行。愿每一天都能带给你新的希望和喜悦，愿你的人生旅程永远充满爱与奇迹。'
  }
])

const first = ref(0) // 当前页的起始索引
const rowsPerPage = ref(10) // 每页显示的行数

const paginatedItems = computed(() => {
  return items.value.slice(first.value, first.value + rowsPerPage.value)
})

const onPageChange = (event) => {
  first.value = event.first
}
</script>

<style lang="scss">

:deep(.p-paginator) {
  flex-wrap: nowrap;
}
</style>