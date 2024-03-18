<template>
    <div class="bg-white container mx-auto px-4">
      <header class="flex justify-between pt-8">
        <div>
          <a class="cursor-pointer" @click="$router.push({ name: 'main' })" ><img  src="/logo.svg" alt="logo"></a>
        </div>
        <ul>

          <li class="mb-3 relative">
            <div class="absolute top-[3px] left-[-20px]"><img v-show="this.$route.name === 'man'" src="/grape.svg" alt=""></div>
            <a @click="this.$router.push({ name: 'man' })" class="text-base hover:text-grape cursor-pointer duration-200">Мужчинам</a>
            <div v-show="this.$route.name === 'man'" class="absolute top-[3px] right-[-20px] scale-x-[-1]"><img src="/grape.svg" alt=""></div>
          </li>
          <li class="mb-3 relative">
            <div v-show="$route.name === 'woman'" ref="grape" class="absolute top-[3px] left-[-20px]"><img src="/grape.svg" alt=""></div>
            <a @click="this.$router.push({ name: 'woman' })" class="text-base hover:text-grape cursor-pointer duration-200">Девушкам</a>
            <div v-show="$route.name === 'woman'" class="absolute top-[3px] right-[-20px] scale-x-[-1]"><img src="/grape.svg" alt=""></div>
          </li>
          <li class="mb-3 relative">
            <div v-show="this.$route.name === 'poizon'" ref="grape" class="absolute top-[3px] left-[-20px]"><img src="/grape.svg" alt=""></div>
            <a @click="this.$router.push({ name: 'poizon' })" class="text-base hover:text-grape cursor-pointer duration-200">Grape&Poizon</a>
            <div v-show="this.$route.name === 'poizon'" class="absolute top-[3px] right-[-20px] scale-x-[-1]"><img src="/grape.svg" alt=""></div>
          </li>
          <li class="mb-3 relative">
            <div v-show="this.$route.name === 'pay'" ref="grape" class="absolute top-[3px] left-[-20px]"><img src="/grape.svg" alt=""></div>
            <a @click="this.$router.push({ name: 'pay' })" class="text-base hover:text-grape cursor-pointer duration-200">Оплата и доставка</a>
            <div v-show="this.$route.name === 'pay'" class="absolute top-[3px] right-[-20px] scale-x-[-1]"><img src="/grape.svg" alt=""></div>
          </li>
          <li class="relative">
            <div v-show="this.$route.name === 'news'" ref="grape" class="absolute top-[3px] left-[-20px]"><img src="/grape.svg" alt=""></div>
            <a @click="this.$router.push({ name: 'news' })" class="text-base hover:text-grape cursor-pointer duration-200">Новости</a>
            <div v-show="this.$route.name === 'news'" class="absolute top-[3px] right-[-20px] scale-x-[-1]"><img src="/grape.svg" alt=""></div>
          </li>
        </ul>
  
        <ul class="flex h-[20px]">
          <li class="mr-4 relative cursor-pointer flex items-center"> <div @click="toggleElement"><img src="/search.svg" alt="search"></div> <input placeholder="Поиск..." v-show="showElement" class="h-[25px] border text-iner border-black outline-none absolute right-[30px] w-[20vw] bottom-[-2px] text-[#A552E7] rounded pl-[10px]" type="text"></li>
          <li class="mr-4 cursor-pointer"> <img src="/peopls.svg" alt="search"> </li>
          <li class="mr-4 cursor-pointer"> <img src="/like.svg" alt="search"> </li>
          <li class="mr-4 cursor-pointer"> <img src="/cart.svg" alt="search"> </li>
        </ul>
      </header>
    </div>  
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const showElement = ref(false);

    const toggleElement = () => {
      showElement.value = !showElement.value;
    };

    return {
      showElement,
      toggleElement,
    };
  },
};
</script>