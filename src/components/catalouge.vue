<template>
    <div class="container relative">
        <h2 class="ml-[20px] mb-[40px] font-iner font-bold text-[40px]">КАТАЛОГ</h2>
        <div class="top-[0] z-10 absolute left-[50%] w-[100px] flex flex-col">
            <span @mouseover="changeImage('clouth')" class="font-iner cursor-pointer hover:text-grape font-medium text-[50px] transition duration-300">ОДЕЖДА</span>
            <span @mouseover="changeImage('kros')" class="font-iner cursor-pointer hover:text-grape font-medium text-[50px] transition duration-300 mb-[350px]">ОБУВЬ</span>
            <span @mouseover="changeImage('podveska')" class="font-iner cursor-pointer hover:text-grape font-medium text-[50px] transition duration-300">АКСЕССУАРЫ</span>
            <span @mouseover="changeImage" class="font-iner cursor-pointer hover:text-grape font-medium text-[50px] transition duration-300">ДРУГОЕ</span>
        </div>
        <div class="w-full h-[400px]">
            <Transition name="fade" mode="out-in"> <img :key="imageUrl" class="w-full h-[400px]" :src="imageUrl" alt=""> </Transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        imageUrl: '../../public/kros.jpg',
      };
    },
    methods: {
      changeImage(item) {
        if(item == 'kros')
            this.imageUrl = '../../public/kros.jpg'
        else if (item == 'clouth')
            this.imageUrl = '../../public/clouth.jpeg';
        else if(item == 'podveska')
            this.imageUrl = '../../public/yr.jpeg';
        else
            this.imageUrl = '../../public/other.jpeg'
      },
    },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>