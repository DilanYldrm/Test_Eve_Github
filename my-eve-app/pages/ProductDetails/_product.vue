<template>
    <v-container>
      <v-row class="pa-5 px-auto">
        <span style="width: 50%">
          <v-carousel style="height: 30em; width: 40em" hide-delimiters>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="product.Url"
            ></v-carousel-item>
          </v-carousel>
        </span>
        <span style="width: 50%" class="d-flex justify-center pa-15">
          <div>
            <div class="text-h6">
              {{product.name}}
            </div>
            <div class="text-h6 mt-5">TL{{product.GuestPrice}}</div>
            <div class="text-Subtitle-2" style="color: #731472">
              Registered Customer price:
            </div>
            <NuxtLink to="/">Home page -></NuxtLink>
            <div class="text-subtitle-1">Ordering number: {{product.OrderingNumber}}</div>
            <div class="text-subtitle-1">Size: 5,5gr</div>
            <div
              class="ml-10"
              style="width: 40; height: 100; color: #f7f7f7"
            >
              <v-card flat class="py-12">
                <v-card-text>
                  <v-row>
              <p class="text-h6 mr-3 pt-3">Quantity:</p>
                    <v-btn-toggle v-model="toggle_exclusive" mandatory>
                      <v-btn class="mr-1"> - </v-btn>
                      <v-btn class="mr-1"> 1 </v-btn>
                      <v-btn class="mr-1">
                        <v-icon color="red">+</v-icon>
                      </v-btn>
                    </v-btn-toggle>
                  </v-row>
                </v-card-text>
                <div class="text-center ml-2">
                  <v-card-actions>
                    <v-btn to="/Basket" rounded color="primary" class="px-15" dark large> Add to cart </v-btn>
                  </v-card-actions>
                </div>
              </v-card>
            </div>
          </div>
        </span>
      </v-row>
      <div class="d-flex justify-end">
        <v-card flat class="py-12">
          <v-card-text>
            <v-row align-center="center" justify="center">
              <v-icon>{{ icons.mdiTransitConnectionVariant }}</v-icon>
              <p class="text-h6 mr-3 pt-3">share:</p>
              <v-btn-toggle v-model="toggle_exclusive2" mandatory>
                <v-btn style="background-color: blue" class="mr-1">
                  <v-icon small>{{ icons.mdiConnection }}</v-icon>
                </v-btn>
                <v-btn style="background-color: darkblue" class="mr-1">
                  <v-icon small>{{ icons.mdiFacebook }}</v-icon>
                </v-btn>
                <v-btn style="background-color: green" class="mr-1">
                  <v-icon small>{{ icons.mdiWhatsapp }}</v-icon>
                </v-btn>
                <v-btn style="background-color: lightblue" class="mr-1">
                  <v-icon small>{{ icons.mdiTwitter }}</v-icon>
                </v-btn>
                <v-btn style="background-color: darkgreen" class="mr-1">
                  <v-icon small>{{ icons.mdiMessage }}</v-icon>
                </v-btn>
                <v-btn style="background-color: gray" class="mr-1">
                  <v-icon small>{{ icons.mdiPost }}</v-icon>
                </v-btn>
                <v-btn style="background-color: lightblue">
                  <v-icon small>{{ icons.mdiFacebookMessenger }}</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
      <Comments />
    </v-container>
  </template>
  <script>
  import {
    mdiConnection,
    mdiFacebook,
    mdiWhatsapp,
    mdiTwitter,
    mdiMessage,
    mdiPost,
    mdiFacebookMessenger,
    mdiTransitConnectionVariant,
  } from '@mdi/js'
  import Comments from '~/components/Comments.vue'
  export default {
    components: { Comments },
    props: {
      
    },
       data() {
      return {
        icons: {
          mdiConnection,
          mdiFacebook,
          mdiWhatsapp,
          mdiTwitter,
          mdiMessage,
          mdiPost,
          mdiFacebookMessenger,
          mdiTransitConnectionVariant,
        },
        toggle_exclusive: undefined,
        toggle_exclusive2: undefined,
        items: [
          {
            src: 'product.Url',
          },
          
        ],
      }
  
    },
    
    computed: {
      products(){
        return this.$store.getters.getProducts
      },
     product(){
       return this.products[this.$route.params.product.split('-').slice(-1).pop()-1]
     },
   },
   created() {
     this.$store.dispatch('getProduct').then(() => {
     })
   },
  
  
   computed: {
       methodproduct(){
         return this.$store.getters.getProduct
      }
     },
     created(){
      this.$store.dispatch( 'getProduct', {
        id: this.$route.params.product
      });
        this.product= this.$store.getters.getProduct;
   },
  
    methods: {
      async loadProduct () {
        this.loading = true
        this.product = await Product.get("http://localhost:3004/products/${this.productId}")
         this.loading = false
       },
     },
  }
  </script>
  