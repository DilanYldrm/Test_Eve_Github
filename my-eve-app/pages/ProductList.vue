<template>
    <div>
        <v-row>
            <NavigationPageTree></NavigationPageTree>
        </v-row>
        <ProductFiltering></ProductFiltering>

        <v-item-group>
            <v-container class="d-flex">
                <v-col cols="3">
          <CategoryProductList></CategoryProductList>
        </v-col>
        <v-col cols="9">
            <ProductListItem></ProductListItem>
          <v-row v-if="products"> 
            <v-col  
              v-for="product in products"
              :key="product.id"
              cols="12"
              md="3">
                
            </v-col>        
          </v-row>

        </v-col>
            </v-container>
        </v-item-group>
    </div>
</template>

<script>
import ProductListItem from '~/components/ProductListItem.vue'
export default{
    components: {
    ProductListItem,
  },
  
}
</script>
