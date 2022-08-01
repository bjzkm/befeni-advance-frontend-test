<template>
  <div class="p-4">
    <div class="flex justify-between mb-5">
      <div class="w-full flex justify-between md:justify-start">
        <h1 class="text-lg font-medium md:order-last md:ml-4">{{fabric?.name }}</h1>
        <span class="text-lg font-medium">{{ $route.params.id}}</span>
      </div>
      <a href="#inspiration" v-smooth-scroll class="hidden md:block shrink-0">View Design Inspiration ></a>
    </div>
    <div class="flex flex-col md:flex-row mb-5 md:space-x-10">
      <div class="w-full md:w-5/12 lg:w-4/12 h-[300px] md:h-[450px] max-h-[80vh] test mb-5 md:mb-0 border border-slate-600 p-2">
        <swiper
          :spaceBetween="30"
          :centeredSlides="true"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :modules="modules"
        >
          <swiper-slide v-for="image in fabric?.fabricImages">
            <img class="w-full object-contain h-full" :src="image.image_url" :alt="image.type">
          </swiper-slide>
        </swiper>
      </div>
      <div class="w-full md:w-7/12 lg:w-8/12">
        <table class="border-collapse border border-slate-600 bg-slate-100 w-full">
          <tbody>
            <tr>
              <td class="border border-slate-600 p-2">Type</td>
              <td class="border border-slate-600 p-2">{{ fabric?.type }}</td>
            </tr>
            <tr>
              <td class="border border-slate-600 p-2">Material</td>
              <td class="border border-slate-600 p-2">{{ fabric?.compositionLabel.fiber_1_percentage }}% {{ fabric?.compositionLabel.fiber_1 }}</td>
            </tr>
            <tr>
              <td class="border border-slate-600 p-2">Webart</td>
              <td class="border border-slate-600 p-2">{{ fabric?.default_weave }}</td>
            </tr>
            <tr>
              <td class="border border-slate-600 p-2">Gewicht</td>
              <td class="border border-slate-600 p-2">{{ fabric?.default_weight }} g/m<sup>2</sup></td>
            </tr>
          </tbody>
        </table>

        <div class="flex space-x-4 mt-5">
          <div class="pt-1 font-medium">Ironing</div>
          <star-rating :rating="fabric?.ironing" :star-size="25" :read-only="true" :increment="0.01" :show-rating="false" :padding="15"></star-rating>
        </div>

        <div class="flex space-x-4 mt-2">
          <div class="pt-1 font-medium">Comfort</div>
          <star-rating :rating="fabric?.comfort" :star-size="25" :read-only="true" :increment="0.01" :show-rating="false" :padding="15"></star-rating>
        </div>
      </div>
    </div>
    <div class="flex justify-center mb-4 md:hidden">
      <a href="#inspiration" v-smooth-scroll class="rounded-full bg-slate-200 px-4 py-2 border border-slate-700 inline-block">View Design Inspiration</a>
    </div>
    <hr>
    <div class="mt-4">
      <h2 id="inspiration" class="text-center text-lg font-medium">Disign Inspiration</h2>
      <div class="flex flex-wrap mt-4">
        <div v-for="image in shirtGallery?.items" class="xs:w-12/12 sm:w-6/12 md:w-6/12 lg:w-4/12 p-2">
          <img :src="image.shirtImages[0].image_url" alt="">
          <div class="text-center mt-3 space-y-1">
            <button class="rounded-full bg-slate-600 text-white px-3 py-2 text-xs">Bestellen {{ image.price.value }}</button>
            <div class="text-xs font-medium">{{ image.fabric_name }}</div>
            <div class="text-xs">{{ image.fabric_composition_label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ApiService from '@/services/ApiService';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
import StarRating from 'vue-star-rating';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

let fabric = ref<Fabric>();
let shirtGallery = ref<shirtGallery>();
let modules = [Autoplay, Pagination, Navigation]

async function getFabricDetail(id : any) {
  let api = new ApiService()
  let res : Fabric = await api.getFabricDetail(id)
  fabric.value = res;
}

async function getShirtsGallery(id : any) {
  let api = new ApiService()
  let res : shirtGallery = await api.getShirtsGallery(id)
  shirtGallery.value = res;
}

onMounted(() => {
  const route = useRoute();  
  const id = route.params.id; 
  getFabricDetail(id)
  getShirtsGallery(id)
})

</script>

