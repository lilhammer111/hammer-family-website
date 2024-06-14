<template>
    <div class="flex-hor-start-start son-gap-10" style="width:100%">
        <div style="width: 75%;" class="flex-ver-start son-gap-10">
            <!--     Hi Strange       -->
            <Card>
                <template #title>😊 HI STRANGER</template>
                <template #content>
                    <p class="m-0">
                        Welcome to the <b>lilhammer family website</b> ! Nestled in the vast digital landscape, this is
                        a
                        place crafted
                        with love and laughter, where every moment is cherished and every visitor is valued.
                    </p>

                    <p class="m-0">
                        We are the lilhammer family—united by bonds that extend beyond the ordinary. Each page you
                        explore here is
                        imbued with our stories and dreams, and we are thrilled to share them with you.
                    </p>

                    <p class="m-0">
                        In this ever-spinning world, your choice to step into my little corner of the internet fills me
                        with immense
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
                        As you wander through these pages, may you find the warmth of home and the gentle touch of
                        inspiration. 💖
                    </p>
                    <p class="m-0">
                        And to all who venture here, both strangers and friends, I send out wishes for peace and
                        prosperity.
                        May your paths be ever enveloped in the soft light of kindness and understanding.
                    </p>
                </template>
            </Card>
            <!--     meet jojo       -->
            <Card>
                <template #title>💕 MEET JOJO</template>
                <template #content>
                    <p class="m-0">
                        <b>"The club isn't the best place to find a lover, so the bar is where I go..."</b>
                    </p>
                    <p class="m-0">
                        and there I found my Jojo.
                        Just like the song "Shape of You" paints pictures of irresistible charm and spontaneous
                        romance,
                        so does the
                        story of how I met Jojo.
                    </p>
                    <p class="m-0">
                        Jojo, a true Aquarius and not very tall, caught my eye with her spunky demeanor and stylish
                        short hair. She's
                        not just my wife but my dream come true—my ideal in every sense.

                    </p>
                    <p class="m-0">
                        To my dream wife, Jojo: Thank you for being my heart's rhythm and the love of my life.
                        Here's to continuing
                        our
                        dance together through life, perfectly in sync and better with every step.
                    </p>

                </template>
            </Card>
            <!--     meet hammer       -->
            <Card>
                <template #title>🥰 MEET HAMMER</template>
                <template #content>
                    <p>
                        This is my son, {{ familyMembers.son.name }}, who was born on Feb. 28, 2023.
                    </p>
                    <p>
                        Until now, it has been <span class="time-highlight">{{ elapsedTime.years }}</span> years,
                        <span class="time-highlight">{{ elapsedTime.days }}</span> days,
                        <span class="time-highlight">{{ elapsedTime.hours }}</span> hours,
                        <span class="time-highlight">{{ elapsedTime.minutes }}</span> minutes,
                        <span class="time-highlight">{{ elapsedTime.seconds }}</span> seconds.
                    </p>
                    <p>
                        How time flies.
                    </p>
                    <div style="text-align: center; height: 100%;">
                        <video muted autoplay loop :src="familyMembers.son.vide_url" style="width: 60%; height: auto; "></video>
                    </div>
                </template>
            </Card>

        </div>
        <div style="width:25%">
            <HomeSecondaryCom></HomeSecondaryCom>
        </div>
    </div>



</template>

<script setup>
import Card from 'primevue/card'
import { onMounted, ref } from 'vue'
import HomeSecondaryCom from '@/views/third/home/HomeSecondaryCom.vue'
import hammerVid from '@/assets/videos/hammer.mov'

onMounted(() => {
    updateElapsedTime()
    setInterval(updateElapsedTime, 1000)
})

const updateElapsedTime = () => {
    const birthDate = new Date('2023-02-28T00:00:00')
    const now = new Date()
    const diff = now - birthDate

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)


    elapsedTime.value.years = years
    elapsedTime.value.days = days
    elapsedTime.value.hours = hours
    elapsedTime.value.minutes = minutes
    elapsedTime.value.seconds = seconds
}

const lilhammer = ref({
    name: 'Little Hammer',
    age: 1,
    vide_url: hammerVid

})

const elapsedTime = ref({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
})

const demon = ref({
    name: 'Demon',
    age: 27
})

const jojo = ref({
    name: 'Demon',
    age: 27
})


const familyMembers = ref(
    {
        father: demon,
        son: lilhammer,
        mom: jojo
    }
)

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

.time-highlight {
    font-size: 16px;
    font-weight: bolder;
    color: black;
    /*background-color: #f0f8ff;*/
    padding: 2px 2px;
}
</style>
