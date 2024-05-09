<template>
  <Panel
    v-for="item in items"
    :key="item.id"
    class="light-shadow-style mg-btm-15 width-100 card-border-radius"
    toggleable
  >
    <template #header>
      <div class="flex align-items-center gap-2 v-cen">
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          size="small"
          shape="circle"
        />
        <span style="margin-left: 10px" class="font-bold">{{ item.user.name }}</span>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-wrap align-items-center justify-content-between gap-2 ver-cen-sb">
        <span class="p-text-secondary">written at {{ item.created_at }}</span>
        <div class="flex align-items-center gap-2 v-cen">
          <IconNum icon="pi pi-thumbs-up" :num="item.tu_num"></IconNum>
          <IconNum icon="pi pi-comment" :num="item.com_num"></IconNum>
        </div>
      </div>
    </template>
    <template #icons>
      <button class="p-panel-header-icon p-link mr-2" @click="toggle"></button>
      <!-- <Menu ref="menu" id="config_menu" :model="items" popup /> -->
    </template>
    <p class="m-0">{{ item.msg }}</p>
  </Panel>
</template>

<script setup>
import IconNum from '@/components/IconNum.vue'
import { ref } from 'vue'

const items = ref([
  {
    user: {
      name: 'Demon'
    },
    created_at: '2024/1/31 15:30',
    msg: '祝我们永远幸福哦！',
    tu_num: '15',
    com_num: '16'
  },
  {
    user: {
      name: 'Jojo'
    },
    created_at: '2024/1/31 15:30',
    msg: '要做幸福快乐的宝宝！ 小锤子，我们永远爱你哦',
    tu_num: '15',
    com_num: '16'
  },
  {
    user: {
      name: 'lilhammer'
    },
    created_at: '2024/1/31 15:30',
    msg: '嗯。。。嗯。。。',
    tu_num: '15',
    com_num: '16'
  },
  {
    user: {
      name: 'Demon'
    },
    created_at: '2024/1/31 15:30',
    msg: '愿你的每一天都充满阳光，心情如这绚烂的阳光一样明媚。',
    tu_num: '15',
    com_num: '16'
  },
  {
    user: {
      name: 'hhhhelloworld'
    },
    created_at: '2024/1/31 15:30',
    tu_num: '15',
    com_num: '16',
    msg: '在这个特别的日子里，我送上我所有的爱和最好的祝福，愿你幸福快乐！'
  },
  {
    user: {
      name: 'en???'
    },
    created_at: '2024/1/31 15:30',
    tu_num: '15',
    com_num: '16',
    msg: '在这个充满希望的新早晨，我想对你说，每个新的日子都是一个新的开始，一个重新开始追逐梦想的机会。愿你抓住这些机会，用你的勇气和智慧去实现那些看似不可能的梦想。无论你的旅程多么艰难，都要记得，有爱的地方就有希望。祝你勇敢无畏，坚持自己的选择，用心去感受生活的每一次奇迹。'
  },

  {
    user: {
      name: 'joker'
    },
    created_at: '2024/1/31 15:30',
    tu_num: '15',
    com_num: '16',
    msg: '愿你拥有一颗不老的心，一个永远向上的灵魂。'
  },
  {
    user: {
      name: 'faker'
    },
    created_at: '2024/1/31 15:30',
    tu_num: '15',
    com_num: '16',
    msg: '真诚地祝愿你，在人生的旅途中，无论风雨或晴天，都能以乐观的心态去面对。生活中的每一个小小幸运，都是值得珍惜的宝贵财富。愿你的心中总有一片阳光普照的地方，温暖你的每一个清晨，带你走过每一个黑暗。愿你的生活如诗如画，愿你的未来如星辰广阔。'
  },
  {
    user: {
      name: 'pian'
    },
    created_at: '2024/1/31 15:30',
      tu_num: '15',
    com_num: '16',
    msg: '在你的世界里，愿快乐无限，梦想成真。'
  },
  {
    user: {
      name: 'dior'
    },
    created_at: '2024/1/31 15:30',
    tu_num: '15',
    com_num: '16',
    msg: '愿你在未来的日子里，每一步都走在春风里。'
  },
  {
    user: {
      name: 'uncle'
    },
    created_at: '2024/1/31 15:30',
    tu_num: '15',
    com_num: '16',
    msg: '在你生命的每一步旅程中，我都衷心祝愿你能找到那份属于自己的宁静和满足。每一个微笑背后，都藏着无限的故事和深刻的意义。愿你的每一个努力都能得到回报，每一份付出都能映照未来。记住，无论遇到什么困难，你都不是孤单一人。愿爱、希望和坚持永远是你前行的灯塔。'
  },
  {
    user: {
      name: 'ant'
    },
    created_at: '2024/1/31 15:30',
    tu_num: '15',
    com_num: '16',
    msg: '生活就像一本书，每一天都是新的一页。愿你的书页中充满了欢笑、成就和美好回忆。当挑战来临时，愿你拥有足够的力量和智慧将其转化为成长的契机。记住，每一次跌倒都是向前迈进的一步。愿你的生活故事充满光彩，愿你的每一步都坚实而有力。'
  },
  {
    user: {
      name: 'mayun'
    },
    created_at: '2024/1/31 15:30',
    tu_num: '15',
    com_num: '16',
    msg: '在这个美好的时刻，我想告诉你，你的存在本身就是这个世界上最美的奇迹之一。你的笑容可以点亮最暗的天，你的话语可以温暖最冷的心。愿你永远珍惜自己的价值，无论前方道路多么不确定，都要带着自信和骄傲前行。愿每一天都能带给你新的希望和喜悦，愿你的人生旅程永远充满爱与奇迹。'
  },
  //   {
  //     user: {
  //       name: 'Demon'
  //     },
  //     created_at: '2024/1/31 15:30',
  //     tu_num: 15,
  //     com_num: 16,
  //     msg: '要做幸福快乐的宝宝！ 小锤子，我们永远爱你哦'
  //   },
  //   {
  //     user: {
  //       name: 'Demon'
  //     },
  //     created_at: '2024/1/31 15:30',
  //     tu_num: 15,
  //     com_num: 16,
  //     msg: '要做幸福快乐的宝宝！ 小锤子，我们永远爱你哦'
  //   }
])
</script>
