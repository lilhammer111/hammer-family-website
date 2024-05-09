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
        <video :src="familyMembers.son.vide_url" style="width: 100%"></video>
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
        To my dream wife, Jojo: Thank you for being my heart's rhythm and the love of my life. Here's to continuing our
        dance together through life, perfectly in sync and better with every step.
      </p>

    </template>
  </Card>
</template>

<script setup>
import Card from 'primevue/card'
import { ref } from 'vue'

const lilhammer = ref({
  'name': 'Little Hammer',
  'age': 1,
  'vide_url': 'https://videocdn.cdnpk.net/joy/content/video/free/2018-03/large_preview/180301_01_B_Basketball_05.mp4'
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

</script>

<style lang="scss" scoped></style>
