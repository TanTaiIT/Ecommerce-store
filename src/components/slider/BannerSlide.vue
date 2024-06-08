<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import 'swiper/css'
// Contanst
const banner = [
{
    id: 1,
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-sale-banner-template-design-9db9afa9dc48742dd1f63f4b3e970eb1_screen.jpg?ts=1605628683',
  },
  {
    id: 2,
    image: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2019/BannerTong.png',
  },
  {
    id: 3,
    image: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2019/BannerTong.png',
  },
  {
    id: 4,
    image: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2019/BannerTong.png',
  },
  {
    id: 5,
    image: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2019/BannerTong.png',
  },
  {
    id: 6,
    image: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2019/BannerTong.png',
  },
]
// Datas
const swipeValue = ref(null)

// Functions
const onSwipe = (swiper) => {
    swiper.value = swiper
}
</script>

<template>
 <div class="w-full">
    <swiper
      style="padding: 0 8px 10px 8px"
      class="w-full pb-2"
      :space-between="1"
      :loop="true"
      :autoplay="{
        delay: 2500
      }"
      @swiper="onSwipe"
    >
        <swiper-slide v-for="item in banner" :key="item.id" class="w-full">
            <img class="w-full h-[300px] object-cover rounded-md" :src="item.image" alt=""/>
        </swiper-slide>
    </swiper>
 </div>    
</template>

<style>
</style>