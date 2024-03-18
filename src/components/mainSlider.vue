<template>
    <div class="bg-white container mx-auto px-4 flex justify-between pb-[100px]">
        <div class="flex flex-col justify-between">
            <h1 class="text-8xl font-inter font-black">GRAPE <br> <span class="text-grape">&</span> POIZON</h1>
            <p class="max-w-lg font-inter text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="border border-black w-[50vw] h-[45vw] flex justify-end flex-col items-center">
            <Swiper ref="swiper" class="w-[100%]"
            :slides-per-view="1"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :modules="modules"
            :navigation = "{
                prevEl: prev,
                nextEl: next,
            }"
            >
                <swiper-slide>
                    <div class="flex flex-col items-center justify-end h-[100%]">
                        <img class="w-[30vw] h-[30vw]" src="/stuff.png" alt="" srcset="">
                        <h2 class="text-center text-grape font-semibold uppercase text-xl">Louis vuitton<br> <span class="font-normal text-lg">trainer</span></h2>
                        <span class="font-normal text-lg uppercase text-center text-grape my-4">4999 rub.</span>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="flex flex-col items-center justify-end h-[100%]">
                        <img class="w-[30vw] h-[30vw]" src="/stuff.png" alt="" srcset="">
                        <h2 class="text-center text-grape font-semibold uppercase text-xl">Louis vuitton<br> <span class="font-normal text-lg">trainer</span></h2>
                        <span class="font-normal text-lg uppercase text-center text-grape my-4">4999 rub.</span>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="flex flex-col items-center justify-end h-[100%]">
                        <img class="w-[30vw] h-[30vw]" src="/stuff.png" alt="" srcset="">
                        <h2 class="text-center text-grape font-semibold uppercase text-xl">Louis vuitton<br> <span class="font-normal text-lg">trainer</span></h2>
                        <span class="font-normal text-lg uppercase text-center text-grape my-4">4999 rub.</span>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="flex flex-col items-center justify-end h-[100%]">
                        <img class="w-[30vw] h-[30vw]" src="/stuff.png" alt="" srcset="">
                        <h2 class="text-center text-grape font-semibold uppercase text-xl">Louis vuitton<br> <span class="font-normal text-lg">trainer</span></h2>
                        <span class="font-normal text-lg uppercase text-center text-grape my-4">4999 rub.</span>
                    </div>
                </swiper-slide>
            </Swiper>
            <div class="flex items-center pb-3">
                    <a class="pointer" ref="prev"><img src="/arrow.svg" alt=""></a>
                    <p class="text-lg px-5 w-[120px] text-center"><span>{{ getSlide }}</span> OF <span>{{ slideLenght }}</span></p>
                    <a class="pointer" ref="next"><img class="scale-x-[-1] pointer" src="/arrow.svg" alt=""></a>
            </div>
        </div>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide} from 'swiper/vue';
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import { ref } from 'vue';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const prev = ref(null);
    const next = ref(null);
    let getSlide = ref(1);
    let slideLenght = ref(0);
    const onSwiper = (swiper) => {
        return slideLenght.value = swiper.slides.length

    };
    const onSlideChange = (slide) => {
        getSlide.value = slide.activeIndex + 1
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
      prev,
      next,
      getSlide,
      slideLenght
    };
  },
};
</script>