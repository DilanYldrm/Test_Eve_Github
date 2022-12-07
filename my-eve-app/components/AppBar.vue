<template>
    <v-sheet>
      <v-app-bar height="75" class="pt-3" dense dark color="white" >
        <v-container class="d-flex flex-row">
          <v-app-bar-nav-icon class="ml-15">
              <nuxt-link to="/">
                <img 
                  title="Eve Logo"
                  alt="Eve Logo"
                  style="width:10em  "
                  src="@/static/eve.png"
                />  
                  
              </nuxt-link>
           </v-app-bar-nav-icon>
                <v-text-field solo light class="ml-15" placeholder="ürün ara" >
                </v-text-field>
                <v-btn class="mr-7" color="black" large>
                  <v-icon color="white" > {{icons.mdiMagnify}}</v-icon>
                </v-btn>
            <v-spacer></v-spacer>
            <v-btn text to="SignIn" class="my-2" ><p style="color:gray" class="my-2">ÜYE GİRİŞİ</p>  </v-btn>
            <v-divider vertical light ></v-divider>
            <v-btn text to="Register" class="my-2" ><p style="color:gray" class="my-2">YENİ ÜYE</p> </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon to="Basket" class="my-1" >
              <p style="color:black" class="my-2">
                Sepetim
              </p>
              <v-icon color="pink" large > {{ icons.mdiCart }} </v-icon>
            </v-btn>
  
                
              
        </v-container>
      </v-app-bar>
    </v-sheet>
  </template>
  
  <script>
  import { mdiCart, mdiChevronDown, mdiMagnify } from '@mdi/js'
  export default {
    data() {
      return {
        icons: {
          mdiCart,
          mdiChevronDown,
          mdiMagnify,
        },
      }
    },
  }
  </script>