<template>
  <v-sheet weight="100%">
    <v-card
        style="border-radius: 3%"
        class="mx-auto"
        
        outlined
        >
        <v-list-item>
            <v-list-item-content>
                <div class="d-flex flex-row my-5">
                    <v-col md="6">
                      <v-row md="1">
                        <v-col md="2">
                            <p>Ürün</p>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col md="2">
                            <p>Fiyat</p>
                        </v-col>
                        <v-col md="2">
                            <p>Adet</p>
                        </v-col>
                        <v-col md="2">
                            <p>Toplam</p>
                        </v-col>
                      </v-row>
                     <v-divider></v-divider>
                      <v-row md="6" hight="500"> 
                        <v-col md="1">
                            <img 
                            title="Footer Resim"
                            height="80"
                            alt="Eve Logo"
                            style="width:4em  "
                            src="@/static/Sepet.jpeg"
                            />  
                        </v-col>
                        <v-col></v-col>
                        <v-col md="2">
                            <v-row>
                                <p class="my-6" small style="width:15em">Colossal Big Shot Maskara</p>  
                                <v-btn small elevation="0" class="my-2" style="background-color:white; color: white;">
                                    <v-icon style="color:#ff007f">
                                        {{icons.mdiClose}}
                                    </v-icon>
                                    <p letter class="my-2" style="color:#ff007f">Sil</p>
                                </v-btn>
                            </v-row>
                              <v-row></v-row>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col md="2">
                            <p class="my-10">₺149,94</p>
                        </v-col>
                        <v-col md="2">
                            <v-col></v-col>
                            <v-btn  rounded class="mr-2" color="white" medium>
                                <v-icon style="color:grey">
                                    {{icons.mdiPlus}}
                                </v-icon>
                                <p class="my-5">1</p>
                                <v-icon style="color:grey">
                                    {{icons.mdiMinus}}
                                </v-icon>
                                  
                            </v-btn>
                        </v-col>
                        <v-col md="2">
                            <p class="my-10">149,94 TL</p>
                        </v-col>
                      </v-row>
                      <v-row></v-row>
                      <v-divider></v-divider>
                      <v-row md="2">
                        <v-col md="1">
                                <v-btn small class="my-2" elevation="0" style="background-color:white">
                                    <v-icon style="color:black">
                                        {{icons.mdiArrowLeft}}
                                    </v-icon>
                                    <p class="my-2"  style="color:black">Alışverişe Devam Et</p>
                                </v-btn>
                        </v-col>
                      </v-row>

                    </v-col>
                    <v-col md="1"></v-col>

                    <v-col md="3">
                        <v-row>
                            <v-col>
                                <v-sheet
                                class="d-flex"
                                color="grey"
                                dark="true"
                                height="250"
                                width="400" >
                                <v-row ></v-row>
                                <v-row>
                                    
                                    <v-col>
                                        <v-row>
                                            <v-text-field class="mx-2" rounded solo light placeholder="İndirim kodunu girin" outlined clearable></v-text-field> 
                                            <v-btn class="mx-4" rounded color="#ff007f" medium>
                                            <p class="my-1" style="color:white" >EKLE</p>
                                            </v-btn> 
                                        </v-row>
                                        <v-row >
                                            <p class="my-1" style="color:black" >KDV Dahil Toplam:</p>
                                            <v-col md="4"></v-col>
                                            <p class="my-1" style="color:black" >149,94 TL</p>

                                        </v-row>
                                        <v-row >
                                            <p class="my-1" style="color:#ff007f" >Net Toplam</p>
                                            <v-col md="6"></v-col>
                                            
                                            <p class="my-1" style="color:#ff007f" >149,94 TL</p>

                                        </v-row>
                                        
                                    </v-col>
                                       
                                      
                                </v-row>
                                
                                </v-sheet>
                                
                                </v-col>
                                </v-row>
                                <v-row md="4">
                            <v-btn to="/Basket" rounded class="mr-2" color="#ff007f" x-large >
                                  <p style="color:white; font-size: small; text" class="my-2">Devam Et  </p> 
                                  <v-icon style="color:white">
                                        {{icons.mdiArrowLeft}}
                                    </v-icon>  
                            </v-btn>

                        </v-row>

                    </v-col>
                  
                </div>
            </v-list-item-content>
        </v-list-item>
    </v-card>
  </v-sheet>
</template>

<script>

  import { mdiClose,mdiArrowLeft,mdiPlus,mdiMinus} from '@mdi/js'
  export default {
    data() {
      return {
        icons: {
          mdiClose,
          mdiArrowLeft,
          mdiPlus,
          mdiMinus
        },
      }
    },
  }
  </script>