<template>
    <v-sheet>
        <v-app-bar height="45" dense light style="padding-left:8em; padding-right: 8em;">
          <v-container class="d-flex flex-row">
            <v-btn class="my-1" >              
                      <p class="my-2" style="color:black">Yeni</p>
                      <v-icon small color="pink"> {{ icons.mdiStar }} </v-icon>
            </v-btn>
            <v-btn class="my-1"   style="background-color:#ff007f">              
                      <p class="my-1" style="color:black">Sana Özel</p>          
            </v-btn>
            <v-btn  text v-bind="attrs" v-on="on" class="my-1" >              
                      <p class="my-1" style="color:black">Markalar</p>                     
            </v-btn>
              <v-menu left bottom offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on" class="my-1" >              
                      <p class="my-1" style="color:black">Makyaj</p>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item 
                    v-for="(menuitem,n) in menu"
                    :key="n"
                    @click="() => {}"
                    >
                    <v-list-item-title>
                        <div class="text-center">
                          <v-menu offset-x>
                            <template v-slot:activator="{on,attrs}">
                                <v-list-item-title v-bind="attrs" v-on="on">
                                    {{menuitem.head}}
                                </v-list-item-title>
                            </template>
                            <v-list>
                                <v-list-item v-for="(item,index) in menuitem.item" :key="index">
                                    <NuxtLink style="color:black; text-decoration: none; " to="ProductList">
                                      <div>
                                        <v-list-item-title>
                                            {{ item}}
                                        </v-list-item-title>
                                      </div>
                                    </NuxtLink>
                                </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>
                    </v-list-item-title>

                    </v-list-item>
                </v-list>
              </v-menu>
                 
                     
                     
                        <v-btn text color="black" class="my-2">Cilt Bakımı</v-btn>
                     
                    
                        <v-btn text color="black" class="my-2">Saç Bakımı</v-btn>
                    
                   
                        <v-btn text color="black" class="my-2">Kişisel Bakım</v-btn>
                   
                    
                        <v-btn text color="black" class="my-2">Erkek Bakımı</v-btn>
                    
                  
            


          </v-container>
        </v-app-bar>
    </v-sheet>
</template>

<script>
import { mdiStar} from '@mdi/js'
export default {
    data(){
        return{
            icons:{
                mdiStar,
            },
            menu:[
                {
                   head : 'GÖZ MAKYAJI',
                   item :[
                    'Maskara',
                    'Göz Kalemi',
                    'Far',
                     ],

                },
                {
                   head : 'DUDAK MAKYAJI',
                   item :[
                    'Ruj',
                    'Dudak Parlatıcısı',
                    'Dudak Kalemi',
                     ],

                },
                {
                   head : ' TIRNAK',
                   item :[
                    'Oje',
                    'Aseton',
                    
                     ],

                },

            ],

        }
    },
}
</script>
