<script setup>
defineProps({
    title: String
})
</script>

<template>
    <h2 class="font-iner font-bold text-4xl	pl-[60px] pb-[30px] uppercase">{{ title }}</h2>
    <div class="flex bg-white pb-[200px] overflow-hidden">
        <a class="width-[25%] h-[70vh] border border-black flex flex-col hover:text-grape duration-400 items-center justify-center vitrina-block">
            <img class="60%" height="60%" src="/item4.png">
            <div class="text-center">
                <h2 class="font-semibold font-inter text-xl">AIR JORDAN 12 <br><span class="text-lg	 font-normal">RETRO “ROYALTY”</span></h2>
                <p class="text-lg font-normal mt-[20px]">4999 RUB.</p>
            </div>
        </a>
        <a class="hover:text-grape duration-400  width-[25%] h-[70vh] border border-black flex flex-col items-center justify-center vitrina-block">
            <img class="60%" height="60%" src="/item2.png">
            <div class="text-center">
                <h2 class="font-semibold font-inter text-xl">AIR JORDAN 12 <br><span class="text-lg	 font-normal">RETRO “ROYALTY”</span></h2>
                <p class="text-lg font-normal mt-[20px]">4999 RUB.</p>
            </div>
        </a>
        <a class="hover:text-grape duration-400  width-[25%] h-[70vh] border border-black flex flex-col items-center justify-center vitrina-block">
            <img class="60%" height="60%" src="/item3.png">
            <div class="text-center">
                <h2 class="font-semibold font-inter text-xl">AIR JORDAN 12 <br><span class="text-lg	 font-normal">RETRO “ROYALTY”</span></h2>
                <p class="text-lg font-normal mt-[20px]">4999 RUB.</p>
            </div>
        </a>
        <a class="hover:text-grape duration-400  width-[25%] h-[70vh] border border-black flex flex-col items-center justify-center vitrina-block">
            <img class="60%" height="60%" src="/item1.png">
            <div class="text-center">
                <h2 class="font-semibold font-inter text-xl">AIR JORDAN 12 <br><span class="text-lg	 font-normal">RETRO “ROYALTY”</span></h2>
                <p class="text-lg font-normal mt-[20px]">4999 RUB.</p>
            </div>
        </a>
    </div>
</template>

<style scoped>
    *{
        background-color: white ;
        box-sizing: border-box;
    }
    .vitrina-block{ 
        margin: 0 -1px;
        transition: transform 0.4s;
    }
    .vitrina-block:last-child{ border-right: 0; }
    .vitrina-block:hover {
        margin: 0;
        transform: translateY(10vh);
    }
</style>