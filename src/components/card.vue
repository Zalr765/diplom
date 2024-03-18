<script setup>
defineProps( {
    imageUrl: String,
    title: String,
    price_name : String,
    price: Number
} )
</script>
<template>
    <a class="border-top border-right width-[25vw] h-[70vh] border border-black flex flex-col hover:text-grape duration-400 items-center justify-center cursor-pointer">
        <img  :src="imageUrl">
        <div class="text-center">
            <h2 class="font-semibold font-inter text-xl">{{ title }} <br><span class="text-lg	 font-normal">{{ price_name }}</span></h2>
            <p class="text-lg font-normal mt-[20px]">{{ price }} RUB.</p>
        </div>
    </a>
</template>
<style scoped>
    .border-right{
        border-left: none;
    }
    .border-top{
        border-top: none;
    }
</style>