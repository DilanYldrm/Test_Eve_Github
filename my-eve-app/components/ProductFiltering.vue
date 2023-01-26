<template>
    <div style="border-bottom: 0.01em solid gray;">
        <v-row md="1">
          <v-col md="1" class="my-7" >       
                <p style="font-size: medium; color: #ff007f ">12 Ürün</p>  
          </v-col>
          <v-col md="2" class="my-7" >               
                <p style="font-size: medium">Tüm Ürünleri Listele</p>  
          </v-col>
    
          <v-spacer></v-spacer>
            <v-col md="1"></v-col>
              <v-spacer></v-spacer>
          <v-col md="2" class="d-flex">
            <p class="mx-5 my-7" style="width: 8em;">Gösterim Şekli</p>
            
          </v-col>
          <v-col md="2" >
            <v-row class=" mx-1 my-7 ">
                <v-btn style="background-color: #ff007f">
                <img src="@/static/wid.svg" />
              </v-btn>
              <v-btn style="background-color: white; color:black; display: inline-block">
                <img src="@/static/menu.svg" />
              </v-btn>
            </v-row>
          </v-col>
          <v-divider class="mx-2 my-7" vertical></v-divider>
          <v-col md="1">
            <v-row class="my-4">
                <p class="mx-3 my-7" style="width: 4em;">SIRALA:Seçiniz</p>
            </v-row>
          </v-col>
        </v-row>
    </div>
    </template>
    
    
    
    <script>
    import { mdiChevronDown } from '@mdi/js';
    export default {
      data() {
        return {
          icons : {
            mdiChevronDown
          },
          items: ['Name(A-Z)', 'Price Low-High', 'Brand(A-Z)', 'Oldest'],
          rating1: 5,
          page: 1,
        }
      },
    }
    </script>
    