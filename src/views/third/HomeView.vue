<template>
  <Card class="mg-btm-15">
    <template #title>😊 HI STRANGER</template>
    <template #content>
      <p class="m-0">
        Welcome to the <b>lilhammer family</b> website! Nestled in the vast digital landscape, this is a place crafted
        with love and laughter, where every moment is cherished and every visitor is valued.
      </p>

      <p class="m-0">
        We are the lilhammer family—united by bonds that extend beyond the ordinary. Each page you explore here is
        imbued with our stories and dreams, and we are thrilled to share them with you.
      </p>

      <p class="m-0">
        In this ever-spinning world, your choice to step into my little corner of the internet fills me with immense
        honor. 🌟
      </p>

      <p class="m-0">
        Whether you are a long-lost friend or a traveler making your first visit, here you'll find
        a peaceful pause from the bustling world outside.
        This place, though virtual, is pulsing with warmth and gratitude for your presence.
      </p>
      <p class="m-0">
        Thank you for crossing this digital threshold.
        May your stay not only be pleasant but also sprinkled with moments of joy and insight.
        As you wander through these pages, may you find the warmth of home and the gentle touch of inspiration. 💖
      </p>
      <p class="m-0">
        And to all who venture here, both strangers and friends, I send out wishes for peace and prosperity.
        May your paths be ever enveloped in the soft light of kindness and understanding.
      </p>
    </template>
  </Card>

  <div class="paral-stl">

    <Card class="mg-btm-15">
      <template #title>🥰 MEET LITTLE HAMMER</template>
      <template #content>
        <p class="m-0">
          This is my son, {{ familyMembers.son.name }}.
          He's already {{ familyMembers.son.age }} year old. How time flies.
        </p>
        <p class="m-0">
          Look at him. He's a real pain in the ass.
        </p>
        <p class="m-0">
          <video :src="familyMembers.son.vide_url" style="height: 300px"></video>
        </p>

      </template>
    </Card>

    <Card class="mg-btm-15">
      <template #title>💕 MY GIRL</template>
      <template #content>
        <p class="m-0">
          <b>"The club isn't the best place to find a lover, so the bar is where I go..."</b>
        </p>
        <p class="m-0">
          and there I found my Jojo.
          Just like the song "Shape of You" paints pictures of irresistible charm and spontaneous romance,
          so does the
          story of how I met Jojo.
        </p>
        <p class="m-0">
          Jojo, a true Aquarius and not very tall, caught my eye with her spunky demeanor and stylish short hair. She's
          not just my wife but my dream come true—my ideal in every sense.

        </p>
        <p class="m-0">
          To my dream wife, Jojo: Thank you for being my heart's rhythm and the love of my life. Here's to continuing
          our
          dance together through life, perfectly in sync and better with every step.
        </p>

      </template>
    </Card>
  </div>

  <Card>
    <template #title>
      ✨ MOMENT
    </template>
    <template #content>
      <br>
      <Timeline :value="events" align="alternate" class="customized-timeline">
        <template #marker="slotProps">
                <span class="flex align-items-center justify-content-center" :style="`font-size: 24px`">
                    {{ slotProps.item.icon }}
                </span>
        </template>
        <template #opposite="slotProps">
          <div>
            <img v-if="slotProps.item.image"
                 :src="slotProps.item.image"
                 :alt="slotProps.item.name" :width="slotProps.item.image_size" class="shadow-1" />
          </div>
          <Button label="View more" text></Button>

        </template>

        <template #content="slotProps">
          <h3>
            {{ slotProps.item.topic }}
            {{ slotProps.item.date }}
          </h3>
          <div>
          </div>
          <p>
            {{ slotProps.item.text }}
          </p>

        </template>
      </Timeline>


    </template>
  </Card>
  <PageBottomCom content="Each step forward is a step toward something better."></PageBottomCom>
</template>

<script setup>
import Card from 'primevue/card'
import { ref } from 'vue'
import PageBottomCom from '@/components/common/PageBottomCom.vue'

const lilhammer = ref({
  'name': 'Little Hammer',
  'age': 1,
  'vide_url': 'src/assets/videos/hammer.mov'
})

const demon = ref({
  'name': 'Demon',
  'age': 27
})

const jojo = ref({
  'name': 'Demon',
  'age': 27
})


const familyMembers = ref(
  {
    'father': demon,
    'son': lilhammer,
    'mom': jojo
  }
)


const events = ref([
  {
    topic: 'Dating',
    date: '2022/01/14',
    icon: '💐',
    image: 'src/assets/pictures/genesis.jpg',
    image_size: '200',
    text: 'This is a photo I took of her when I first met her, ' +
      'I didn\'t think it was anything special at the time, ' +
      'but looking back, ' +
      'I realize how lucky I was to ' +
      'have unintentionally captured one of the most important moments of my life!'
  },
  {
    topic: 'Travel',
    date: '2020/15/10',
    icon: '✈️',
    image: 'src/assets/pictures/us.jpg',
    image_size: '300',
    text: '\n' +
      'She once told me her wish was to visit Lhasa. ' +
      'We were at the foot of Mount Huangshan at the time, ' +
      'and I suddenly felt as though I was at a crossroads in life. ' +
      'Should I simply return to Shanghai and continue my mundane job, ' +
      'or should I take a wild adventure with her? ' +
      'In the end, I chose to quit my job ' +
      'and embark on a \'shuo zou jiu zou\' journey.' +
      'This photo was taken with her in the park opposite the Potala Palace, ' +
      'and to this day, it still serves as my WeChat profile picture.'
  },
  {
    topic: 'Wedding',
    date: '15/10/2020',
    icon: '👰‍♀️',
    image: 'src/assets/pictures/wedding.jpg',
    image_size: '260',
    text: 'I am often slow to realize many things, ' +
      'perhaps this is a foolishness common to men. ' +
      'Because even at that time, ' +
      'I had not yet grasped how indispensable ' +
      'this woman and the new soul ' +
      'she was about to bring into our world were to my very existence.'
  },
  {
    topic: 'New Soul',
    date: '16/10/2020',
    icon: '🧑🏻‍🍼',
    image: 'src/assets/pictures/first_eye.jpg',
    image_size: '260',
    text: 'Look, this little life truly arrived as promised.'
  }
])

</script>

<style lang="scss" scoped>
.paral-stl {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.paral-stl > * {
  width: 50%;
}

@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row;

      .p-timeline-event-content {
        text-align: left;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }
  }
}

</style>
