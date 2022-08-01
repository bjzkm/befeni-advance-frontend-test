<template>
  <div class="flex flex-wrap mt-4">
    <div @click="$router.push(`/fabrics/${shortenFabricID(fabric['id'])}`)" v-for="fabric in fabrics?.items" class="w-full sm:w-6/12 md:w-4/12 lg:w-4/12 cursor-pointer p-2">
      <img class="w-full h-[300px] object-contain bg-slate-100 p-2" :src="fabric.fabricImages[0].image_url" alt="">
      <div class="font-medium text-center mt-2">{{ fabric.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ApiService from '@/services/ApiService';
import { onMounted, ref } from 'vue';
import { shortenFabricID } from '@/helpers/helpers';

let fabrics = ref<AllFabrics>()

async function getAllFabrics() {
  let api = new ApiService()
  let res  = await api.getAllFabrics()
  fabrics.value = res
}

onMounted(() => {
  getAllFabrics()
})
</script>