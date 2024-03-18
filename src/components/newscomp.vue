<template>
    <div class="pl-[60px] pb-[170px] container">
        <h2 class="font-iner font-bold text-4xl pb-[30px] uppercase">новости</h2>
        <Swiper ref="swiper" class="w-[100%]"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
            }"
            :slides-per-view="1"
            :space-between="50"
            :allowTouchMove="false"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :modules="modules"
            :navigation = "{
                prevEl: prev,
                nextEl: next,
            }"
            >
                <swiper-slide>
                    <div class="flex justify-between h-[100%]">
                        <div class="">
                            <h1 class="text-grape font-semibold text-[23px]">CELINE ANNOUNCES SUMMER 2023 TENNIS CAPSULE</h1>
                            <span class="text-sm font-semibold">12.04.2023</span> <br>
                            <span class="text-iner text-sm uppercase leading-6">CELINE just announced its new Summer 2023 tennis capsule,<br>complemented by a campaign shot in sunny Saint-Tropez.<br><br> Comprising a range of spring-ready apparel, including tennis skirts, polo<br>tops, vests and jackets, the collection also offers a range of seasonal<br>sneakers in five core silhouettes. Arriving in low and high-top iterations,<br>the footwear collection also sees the introduction of a wedge sneaker</span>
                        </div>
                        <img class="w-[50%] h-[30%]" src="/newslide.jpg" alt="" srcset="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="flex justify-between h-[100%]">
                        <div class="">
                            <h1 class="text-grape font-semibold text-[23px]">CELINE ANNOUNCES SUMMER 2023 TENNIS CAPSULE</h1>
                            <span class="text-sm font-semibold">12.04.2023</span> <br>
                            <span class="text-iner text-sm uppercase leading-6">CELINE just announced its new Summer 2023 tennis capsule,<br>complemented by a campaign shot in sunny Saint-Tropez.<br><br> Comprising a range of spring-ready apparel, including tennis skirts, polo<br>tops, vests and jackets, the collection also offers a range of seasonal<br>sneakers in five core silhouettes. Arriving in low and high-top iterations,<br>the footwear collection also sees the introduction of a wedge sneaker</span>
                        </div>
                        <img class="w-[50%] h-[30%]" src="/newslide.jpg" alt="" srcset="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="flex justify-between h-[100%]">
                        <div class="">
                            <h1 class="text-grape font-semibold text-[23px]">CELINE ANNOUNCES SUMMER 2023 TENNIS CAPSULE</h1>
                            <span class="text-sm font-semibold">12.04.2023</span> <br>
                            <span class="text-iner text-sm uppercase leading-6">CELINE just announced its new Summer 2023 tennis capsule,<br>complemented by a campaign shot in sunny Saint-Tropez.<br><br> Comprising a range of spring-ready apparel, including tennis skirts, polo<br>tops, vests and jackets, the collection also offers a range of seasonal<br>sneakers in five core silhouettes. Arriving in low and high-top iterations,<br>the footwear collection also sees the introduction of a wedge sneaker</span>
                        </div>
                        <img class="w-[50%] h-[30%]" src="/newslide.jpg" alt="" srcset="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="flex justify-between h-[100%]">
                        <div class="">
                            <h1 class="text-grape font-semibold text-[23px]">CELINE ANNOUNCES SUMMER 2023 TENNIS CAPSULE</h1>
                            <span class="text-sm font-semibold">12.04.2023</span> <br>
                            <span class="text-iner text-sm uppercase leading-6">CELINE just announced its new Summer 2023 tennis capsule,<br>complemented by a campaign shot in sunny Saint-Tropez.<br><br> Comprising a range of spring-ready apparel, including tennis skirts, polo<br>tops, vests and jackets, the collection also offers a range of seasonal<br>sneakers in five core silhouettes. Arriving in low and high-top iterations,<br>the footwear collection also sees the introduction of a wedge sneaker</span>
                        </div>
                        <img class="w-[50%] h-[30%]" src="/newslide.jpg" alt="" srcset="">
                    </div>
                </swiper-slide>
        </Swiper>
        <div class="flex items-center pb-3">
                    <a ref="prev"><img src="/arrow.svg" alt=""></a>
                    <p class="text-lg px-5 w-[120px] text-center"><span>{{ getSlide }}</span> OF <span>{{ slideLenght }}</span></p>
                    <a ref="next"><img class="scale-x-[-1] pointer" src="/arrow.svg" alt=""></a>
        </div>
    </div>
</template>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide} from 'swiper/vue';
import { Navigation } from 'swiper/modules'
import { Autoplay } from 'swiper/modules'
import 'swiper/css/navigation';
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
        console.log(swiper)
        return slideLenght.value = swiper.slides.length

    };
    const onSlideChange = (slide) => {
        getSlide.value = slide.activeIndex + 1
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Autoplay],
      prev,
      next,
      getSlide,
      slideLenght
    };
  },
};
</script>