<template>
    <div class="d-flex flex-row my-2 mb-5">
        <p class="my-2">AnaSayfa</p>
      <v-icon class="mx-2" > {{ icons.mdiHomeOutline }} </v-icon>
      <v-icon class="mx-2" > {{ icons.mdiChevronRight }} </v-icon>
      <p class="mx-2 my-auto">Cilt Bakımı</p>
    </div>
  </template>
  
  <script>
  import { mdiHomeOutline,mdiChevronRight } from '@mdi/js';
  export default {
    data() {
      return {
        icons : {
          mdiHomeOutline,mdiChevronRight
        },
      }
    },
  }
  </script>