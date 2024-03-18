<template>
    <h2 class="font-iner font-bold text-4xl	pl-[60px] pb-[30px] uppercase">Выбери свой стиль</h2>
    <div class="w-[100%] h-[70vh] flex">
        <swiper 
                :allowTouchMove="false"
                :slides-per-view="1"
                :space-between="50"
                @swiper="onSwiper2" 
                class="w-[45%]" >
            <swiper-slide><img class="w-[100%] h-[100%]" src="/pers.png"></swiper-slide>
            <swiper-slide><img class="w-[100%] h-[100%]" src="/black.jpeg"></swiper-slide>
            <swiper-slide><img class="w-[100%] h-[100%]" src="/brown.jpeg"></swiper-slide>
        </swiper >
        <div class="px-[30px] text-lx">
            <span>С тех пор, как в прошлом месяце<br>были представлены</span><br>
            <span class="uppercase font-semibold text-grape">Air Jordan 4 «Shimmer»</span>
            <p>новый женский эксклюзив от Jumpman <br> сравнивают с популярными моделями<br>от Hender Scheme <br>и Off-White x Air Jordan 4 «Sail».<br>В ознаменование этого действительно <br> классного релиза GOAT выбрали лучшие <br> женские Air Jordan 4, выпущенные за всю <br> историю этого силуэта. Модельный ряд <br>демонстрирует разнообразие, доказывая,<br>что «четверки» учитывают различие<br>и разнообразие личностей сильных<br>и вдохновляющих девушек-сникерхедов,<br> которые их носят.</p>
            <div class="flex mt-[20px]">
                <div @click="indexSlideTo(0)" class="w-[30px] h-[30px] bg-[#EBD8C7] mr-[10px] rounded-full"></div>
                <div @click="indexSlideTo(1)" class="w-[30px] h-[30px] bg-black mr-[10px] rounded-full"></div>
                <div @click="indexSlideTo(2)" class="w-[30px] h-[30px] bg-orange-900 rounded-full"></div>
            </div>
        </div>
        <swiper class="w-[25%]"
                :allowTouchMove="false"
                :slides-per-view="1"
                :space-between="50"
                :options="swiperOptions"
                @swiper="onSwiper" >
            <swiper-slide><img class="w-[100%] h-[100%]" src="/pers2.png"></swiper-slide>
            <swiper-slide><img class="w-[100%] h-[100%]" src="/black2.jpeg"></swiper-slide>
            <swiper-slide><img class="w-[100%] h-[100%]" src="/brown2.jpeg"></swiper-slide>
        </swiper>
    </div> 
</template>
<script>
import { Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css/navigation';
import { ref } from 'vue';
export default{
    components: {
      Swiper,
      SwiperSlide,
    },
    setup(){
        const slider = ref(0)
        const slider2 = ref(0)
        const swiperOptions = ref({
            allowSlidePrev: false,
            allowSlideNext: false
        });
        const onSwiper = (swiper) => {
            slider.value = swiper
        }
        const onSwiper2 = (swiper) => {
            slider2.value = swiper
        }
        function indexSlideTo(index){
            slider2.value.slideTo(index)
            slider.value.slideTo(index)
        }
        return{
            onSwiper,
            onSwiper2,
            slider,
            indexSlideTo,
            swiperOptions

        }
    },
    methods(){
    }
}
</script>