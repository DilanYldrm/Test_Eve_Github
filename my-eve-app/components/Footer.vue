<template>
    <v-card
        flat
        tile
        height="400"
        width="100%"
        class="black  text-start"
      >
      <v-card color="black" class="white--text">
        <v-card-text>
            <v-col></v-col>

            <v-row md="1">
                <v-col></v-col>
                <v-col md="2">
                    <h3 class="mx-5" style="color:white">KURUMSAL </h3>
                    <h4 class="mx-5" style="color:grey">Hakkımızda</h4>
                    <h5 class="mx-5" style="color:grey">Bize Ulaşın</h5>
                    <h5 class="mx-5" style="color:grey">Sıkça Sorulan Sorular</h5>
                    <h5 class="mx-5" style="color:grey">Kullanım Şartları</h5>
                    <h5 class="mx-5" style="color:grey">Kullanım Sözleşmesi</h5>
                    <h5 class="mx-5" style="color:grey">Eve'de Kariyer</h5>
                    <h5 class="mx-5" style="color:grey">Bilgi Toplumu Hizmetleri</h5>
                </v-col>
                <v-col md="2">
                    <h3 class="mx-5" style="color:white">KATEGORİLER </h3>
                    <h5 class="mx-5" style="color:grey">Makyaj</h5>
                    <h5 class="mx-5" style="color:grey">Cilt Bakım</h5>
                    <h5 class="mx-5" style="color:grey">Saç Bakım</h5>
                    <h5 class="mx-5" style="color:grey">Kişisel Bakım</h5>
                    <h5 class="mx-5" style="color:grey">Erkek Bakım</h5>
                    <h5 class="mx-5" style="color:grey">Süper Market</h5>
                </v-col>
                <v-col md="3">
                    <h2 class="mx-5" style="color:white">SOSYAL MEDYA </h2>
                    <v-col></v-col>
                    <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-5"
                        dark
                        icon
                        >
                        <v-icon size="30px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                    <v-col></v-col>
                    <v-btn large rounded class="mx-5" style="background-color:#ff007f" >
                   <p style="color:white">EVE KATALOG</p>

                    </v-btn>
                <v-col></v-col>

                    <v-btn large rounded class="mx-5" style="background-color:#ff007f">
                        <p style="color:white">MAĞAZALAR</p>   
                    </v-btn>

                </v-col>
                <v-col md="2">
                    <v-btn large rounded class="mx-5" style="background-color:#ff007f">
                    <p style="color:white">KİRALIK YERİNİZ Mİ VAR?</p>
                </v-btn>
                <v-col></v-col>
                <img 
                  title="Footer Resim"
                  height="120"
                  alt="Eve Logo"
                  style="width:8em  "
                  class="mx-10"
                  src="@/static/FooterResim.jpeg"
                />  
       
                </v-col>
            <v-col></v-col>
            </v-row>
            <v-row></v-row>
            <v-row >
                <v-col></v-col>
                <p large style="color:grey">2018 EVESHOP.COM.TR TÜM HAKLARI SAKLIDIR</p>
                <v-col></v-col>
                <v-col></v-col>
                <v-col></v-col>
                <v-col></v-col>
                <v-col></v-col>
                <v-col></v-col>
                <v-col></v-col>
            </v-row>

        </v-card-text>

        </v-card>
      </v-card>
</template>
<script>
export default {
    data: () => ({
     icons: [
        'mdi-youtube',
        'mdi-facebook',
        'mdi-instagram',
        'mdi-twitter',
      ],

    }),

  }
</script>