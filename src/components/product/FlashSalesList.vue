<script setup>
// Import
import { SwiperSlide, Swiper } from 'swiper/vue';
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'
// Contanst
const products = ref([
  {
    id: 1,
    name: 'Long Product Name 1 You Might Forget the BeginningYou Might Forget the Beginning',
    cost: 29.99,
    image:
      'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 5,
    location: 'Location 1',
    star: 4.2,
    sold: 50,
  },
  {
    id: 2,
    name: 'Very Long Product Name 2 with Many Words',
    cost: 39.99,
    image:
      'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 10,
    location: 'Location 2',
    star: 4.5,
    sold: 75,
  },
  {
    id: 3,
    name: 'Product 3 with a Long Name That Goes On and On',
    cost: 49.99,
    image:
      'https://plus.unsplash.com/premium_photo-1677234148135-2bb4f10f6332?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 0,
    location: 'Location 3',
    star: 3.8,
    sold: 30,
  },
  {
    id: 4,
    name: 'A Really Long Product Name 4 for Your Consideration',
    cost: 19.99,
    image:
      'https://plus.unsplash.com/premium_photo-1677451335829-c863209d463b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 8,
    location: 'Location 4',
    star: 4.0,
    sold: 40,
  },
  {
    id: 5,
    name: "Product 5 with an Extremely Long Name that Doesn't End",
    cost: 59.99,
    image:
      'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 15,
    location: 'Location 5',
    star: 4.7,
    sold: 60,
  },
  {
    id: 6,
    name: 'Product 6 with a Name So Long It Might Wrap to the Next Line',
    cost: 69.99,
    image:
      'https://plus.unsplash.com/premium_photo-1678218575597-5d0a2810825f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 12,
    location: 'Location 6',
    star: 4.3,
    sold: 90,
  },
  {
    id: 7,
    name: 'Product 7 with a Name Long Enough to Fill the Space Provided',
    cost: 24.99,
    image:
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 3,
    location: 'Location 7',
    star: 4.1,
    sold: 25,
  },
  {
    id: 8,
    name: 'Product 8 with a Really, Really Long Name That Keeps Going',
    cost: 79.99,
    image: 'https://via.placeholder.com/150',
    discount: 20,
    location: 'Location 8',
    star: 4.8,
    sold: 120,
  },
  {
    id: 9,
    name: 'Product 9 with an Absurdly Long Name Just for Fun',
    cost: 44.99,
    image: 'https://via.placeholder.com/150',
    discount: 7,
    location: 'Location 9',
    star: 4.4,
    sold: 55,
  },
  {
    id: 10,
    name: 'Product 10 with a Name So Long You Might Forget the Beginning',
    cost: 34.99,
    image: 'https://via.placeholder.com/150',
    discount: 9,
    location: 'Location 10',
    star: 4.6,
    sold: 80,
  },
])
</script>

<template>
    <div class="w-full h-fit bg-[#f9f9f9] rounded-md">
        <div class="flex w-full justify-between p-4">
            <!-- title flash sale-->
             <div class="w-full flex justify-between p-4">
                <div class="flex">
                   <div class="text-xl font-bold">Newest Product</div>
                </div>
                <div class="text-[#5a4098]">See more</div>
             </div>
             <!-- End title product-->
            
        </div>
        <div class="w-full flex p-4 gap-4 relative">
            <div class="absolute z-10 flex justify-center items-center top-[45%] -right-5 w-[50px] cursor-pointer bg-white bg-shadow rounded-full">
                <i class="ri-arrow-right-s-line text-2"></i>
            </div>

            <swiper
              style="padding: 0 8px 10px 8px"
              class="w-full pb-2" 
              :slides-per-view="'auto'"
              :space-between="10"
              @swiper="onSwipe"
            >
              <SwiperSlide v-for="product in products" :key="product.name" style="width: auto" class="w-fit">
                <RouterLink :to="`/product/${product.id}`">
                    <ProductCard :product="product"/>
                </RouterLink>

              </SwiperSlide>

            </swiper>
        </div>
    </div>
</template>

<style>
</style>