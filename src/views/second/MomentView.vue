<template>
  <div class="card">
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
        <Button label="Look more" text></Button>

      </template>

      <template #content="slotProps">
        <div>
          {{ slotProps.item.date }}
        </div>
        <div>
          {{ slotProps.item.topic }}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
          numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
          cupiditate
          neque quas!
        </p>

      </template>
    </Timeline>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const events = ref([
  { topic: 'Dating', date: '2022/01/14', icon: '💐', image: 'src/assets/pictures/genesis.jpg', image_size: '200' },
  { topic: 'Travel', date: '2020/15/10', icon: '✈️', image: 'src/assets/pictures/us.jpg', image_size: '400' },
  { topic: 'Wedding', date: '15/10/2020', icon: '👰‍♀️', image: 'src/assets/pictures/wedding.jpg', image_size: '260' },
  { topic: 'New Guy', date: '16/10/2020', icon: '🧑🏻‍🍼', image: 'src/assets/pictures/first_eye.jpg' ,image_size: '260'}
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
