<script setup>
import { ref } from 'vue'

const items = ref([
  {
    label: 'Latest',
    icon: '',
    command:()=> {

    }
  },
  {
    label: 'Food',
    icon: '',
    items: [
      [
        {
          label: 'Chinese Cuisine',
          items: [
            { label: 'Hot Pot' },
            { label: 'BBQ' },
            { label: 'Spicy Hotchpotch' }
          ]
        },
        {
          label: 'Asian Cuisine',
          items: [
            { label: 'Sushiro' },
            { label: 'Sushi Zanmai' },
            { label: 'Genki Sushi' }
          ]
        }
      ],
      [
        {
          label: 'Casual and Fast Food',
          items: [
            { label: 'Red Lobster' },
            { label: 'Joe\'s Crab Shack' },
            { label: 'The Boiling Crab' }
          ]
        },
        {
          label: 'International Cuisine',
          items: [
            { label: 'Cheesecake Factory' },
            { label: 'Baskin Robbins' },
            { label: 'Krispy Kreme' }
          ]
        },
      ],
      [
        {
          label: 'Western Cuisine',
          items: [
            { label: 'Hamburgers' },
            { label: 'Pizza Hut' },
            { label: 'Papa John\'s' }
          ]
        },
        {
          label: 'Asian Cuisine',
          items: [
            { label: 'McDonald\'s' },
            { label: 'Burger King' },
            { label: 'In-N-Out Burger' }
          ]
        },
      ],
    ]
  },
  {
    label: 'Electronics',
    icon: '',
    items: [
      [
        {
          label: 'Smartphones',
          items: [
            { label: 'iPhone' },
            { label: 'Samsung Galaxy' },
            { label: 'Google Pixel' }
          ]
        },
        {
          label: 'Laptops',
          items: [
            { label: 'MacBook' },
            { label: 'Dell XPS' },
            { label: 'HP Spectre' }
          ]
        }

      ],
      [
        {
          label: 'Tablets',
          items: [
            { label: 'iPad' },
            { label: 'Samsung Galaxy Tab' },
            { label: 'Amazon Fire' }
          ]
        },
        {
          label: 'Cameras',
          items: [
            { label: 'Canon' },
            { label: 'Nikon' },
            { label: 'Sony' }
          ]
        }
      ],
      [

        {
          label: 'Wearables',
          items: [
            { label: 'Apple Watch' },
            { label: 'Fitbit' },
            { label: 'Garmin' }
          ]
        },
        {
          label: 'Gaming Consoles',
          items: [
            { label: 'PlayStation' },
            { label: 'Xbox' },
            { label: 'Nintendo Switch' }
          ]
        }
      ]
    ]
  },
])


</script>

<template>
  <MegaMenu :model="items" />
</template>

<style scoped lang="scss">

</style>