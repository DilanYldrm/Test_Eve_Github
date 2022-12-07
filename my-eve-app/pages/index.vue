<template>
  <v-carousel :show-arrows="true"
              height="650px"
              cycle="true">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
data () {
  return {
    items: [
      {
        src: '/eveslider/slider1.jpeg',
      },
      {
        src: '/eveslider/slider2.jpeg',
      },
      {
        src: '/eveslider/slider3.jpeg',
      },
      {
        src: '/eveslider/slider4.jpeg',
      },
      {
        src: '/eveslider/slider5.jpeg',
      },
      {
        src: '/eveslider/slider6.jpeg',
      },
    ],
  }
},
}
</script>
