<script setup>
import { ref } from 'vue'

const items = ref([
  {
    label: 'Food',
    icon: '',
    items: [
      [
        {
          label: 'Hot Pot',
          items: [
            { label: 'Xiao Long Kan' },
            { label: 'Hai Di Lao' },
            { label: 'Shu Daxia' }
          ]
        },
        {
          label: 'Barbecue',
          items: [
            { label: 'Korean BBQ' },
            { label: 'American BBQ' },
            { label: 'Japanese Yakiniku' },
            { label: 'Brazilian Churrasco' }
          ]
        },
        {
          label: 'Sushi',
          items: [
            { label: 'Sushiro' },
            { label: 'Sushi Zanmai' },
            { label: 'Genki Sushi' }
          ]
        }
      ],
      [
        {
          label: 'Seafood',
          items: [
            { label: 'Red Lobster' },
            { label: 'Joe\'s Crab Shack' },
            { label: 'The Boiling Crab' }
          ]
        },
        {
          label: 'Desserts',
          items: [
            { label: 'Cheesecake Factory' },
            { label: 'Baskin Robbins' },
            { label: 'Krispy Kreme' }
          ]
        },
        {
          label: 'Street Food',
          items: [
            { label: 'Thai Street Food' },
            { label: 'Mexican Tacos' },
            { label: 'Indian Chaat' }
          ]
        }
      ],
      [
        {
          label: 'Pizza',
          items: [
            { label: 'Domino\'s Pizza' },
            { label: 'Pizza Hut' },
            { label: 'Papa John\'s' }
          ]
        },
        {
          label: 'Burgers',
          items: [
            { label: 'McDonald\'s' },
            { label: 'Burger King' },
            { label: 'In-N-Out Burger' }
          ]
        },
        {
          label: 'Pasta',
          items: [
            { label: 'Olive Garden' },
            { label: 'Macaroni Grill' },
            { label: 'Pasta House' }
          ]
        }
      ],
      [
        {
          label: 'Salads',
          items: [
            { label: 'Caesar Salad' },
            { label: 'Greek Salad' },
            { label: 'Cobb Salad' }
          ]
        },
        {
          label: 'Soups',
          items: [
            { label: 'Tom Yum Soup' },
            { label: 'Minestrone' },
            { label: 'French Onion Soup' }
          ]
        },
        {
          label: 'Bakeries',
          items: [
            { label: 'Boulangerie' },
            { label: 'Patisserie' },
            { label: 'BreadTalk' }
          ]
        }
      ]
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
  {
    label: 'Comedy',
    icon: '',
    items: [
      [
        {
          label: 'Stand-up Comedy',
          items: [
            { label: 'Dave Chappelle' },
            { label: 'Kevin Hart' },
            { label: 'Amy Schumer' }
          ]
        }
      ],
      [
        {
          label: 'Sitcoms',
          items: [
            { label: 'Friends' },
            { label: 'The Office' },
            { label: 'Brooklyn Nine-Nine' }
          ]
        }
      ],
      [

        {
          label: 'Sketch Shows',
          items: [
            { label: 'Saturday Night Live' },
            { label: 'Key & Peele' },
            { label: 'MADtv' }
          ]
        }
      ]
    ]
  },
  {
    label: 'Others',
    icon:
      '',
    items:
      [
        [
          {
            label: 'Books',
            items: [
              { label: 'Fiction' },
              { label: 'Non-fiction' },
              { label: 'Sci-Fi' }
            ]
          }
        ],
        [
          {
            label: 'Movies',
            items: [
              { label: 'Action' },
              { label: 'Drama' },
              { label: 'Comedy' }
            ]
          }
        ],
        [
          {
            label: 'Music',
            items: [
              { label: 'Rock' },
              { label: 'Pop' },
              { label: 'Jazz' }
            ]
          }
        ]
      ]
  }
])


</script>

<template>
  <MegaMenu :model="items" />
</template>

<style scoped lang="scss">

</style>