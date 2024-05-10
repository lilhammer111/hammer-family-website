<template>
  <div class="card">
    <Card>
      <template #content>

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

  </div>
</template>

<script setup>
import { ref } from 'vue'

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
    image_size: '400',
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
    topic: 'New Guy',
    date: '16/10/2020',
    icon: '🧑🏻‍🍼',
    image: 'src/assets/pictures/first_eye.jpg',
    image_size: '260',
    text: 'Look, this little life truly arrived as promised.'
  }
])

</script>

<style lang="scss" scoped>
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
