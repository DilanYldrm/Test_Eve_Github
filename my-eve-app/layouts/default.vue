<template>
  <v-app light>
    <div class="black text-center">
        <span class="white--text">📦 199 TL ve Üzeri Siparişlerde Kargo Bedava!!</span>
    </div>
    <AppBar/>
    <ToolBar/>
    
    <BottomAppBar />
    <v-main>
      <v-container>
        <Nuxt></Nuxt>
      </v-container>
    </v-main>
     <Footer></Footer>
  </v-app>
  
</template>

<script>
export default {
  data() {
    return{}
  },
}
</script>
