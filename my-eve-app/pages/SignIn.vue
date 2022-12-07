<template>
    <v-sheet width="100%" class="pa-15">
      <v-card
        style="border-radius: 3%"
        class="mx-auto"
        min-width="200px"
        max-width="498"
        outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="d-flex flex-row my-5">

            </div>
            
            <v-container class="pa-10">
              <h4 style="font-size: 1rem; color: black" class="my-7">
                ÜYE GİRİŞİ
              </h4>
              <form>
                
                <v-text-field
                  rounded
                  v-model="email"
                  label="Email adresinizi giriniz."
                  color="#1b0d5e"
                  outlined>
                </v-text-field>
                
                <v-text-field
                  rounded
                  v-model="password"
                  type="password"
                  label="Şifrenizi giriniz."
                  color="#1b0d5e"
                  outlined>
                </v-text-field>
                <v-list-item>
                  <v-col>
                    <v-container class="px-0" fluid>
                    <v-radio
                  label="Beni Hatırla"
                  color="#ff007f"
                  value="#ff007f">
                </v-radio>
                
              </v-container>
                  </v-col>
                  <v-col>
                    <v-btn elevation="0" block color="white" class="grey--text" >Şifremi Unuttum?</v-btn>
                  </v-col>
                </v-list-item>
                <v-btn rounded block color="#ff007f" class="white--text" >GİRİŞ YAP</v-btn>
                
                  <v-btn elevation="0" block color="white" class="blue--text" >
                    <p>Facebook İle Bağlan</p>
                  </v-btn>
                
                <v-btn elevation="0" block color="white" class="blue--text" >Üye Olmadan Devam Et</v-btn>
                <div>
                  <v-row md="12">
                    <v-spacer></v-spacer>
                    <v-col md="5">
                      <h4 style="color: #007699; cursor: pointer">
                       
                      </h4>
                    </v-col>
                    <v-divider vertical light></v-divider>
                    
                    <v-spacer></v-spacer>
                  </v-row>
                </div>
              </form>
              <v-snackbar
                :timeout="4000"
                v-model="snackbar"
                absolute
                bottom
                center
              >
                {{ snackbarText }}
              </v-snackbar>
            </v-container>
          </v-list-item-content>
        </v-list-item>
      </v-card>
  
    </v-sheet>
  </template>
  
  
  
  <script>
  import { mdiFacebook} from '@mdi/js'
  export default {
    data() {
      return {
        icons: {
          mdiFacebook
        },
      }
    },
  }
  </script>
  