<template>
    <div class="bg-[#1E1E1E] px-[60px] container py-[50px] flex justify-between">
        <img class="items-start" src="/logow.svg">
        <div class="flex flex-col">
            <ul class="text-white flex text-iner uppercase font-semibold">
                <li class="mb-3 relative mr-[70px]">
                    <a @click="this.$router.push({ name: 'man' })" class="text-base hover:text-grape cursor-pointer duration-200">Мужчинам</a>
                </li>
                <li class="mb-3 relative mr-[70px]">
                    <a @click="this.$router.push({ name: 'woman' })" class="text-base hover:text-grape cursor-pointer duration-200">Девушкам</a>
                </li>
                <li class="mb-3 relative mr-[70px]">
                    <a @click="this.$router.push({ name: 'poizon' })" class="text-base hover:text-grape cursor-pointer duration-200">Grape</a>
                </li>
                <li class="mb-3 relative mr-[70px]">
                    <a @click="this.$router.push({ name: 'pay' })" class="text-base hover:text-grape cursor-pointer duration-200">Оплата и доставка</a>
                </li>
                <li class="relative">
                    <a @click="this.$router.push({ name: 'news' })" class="text-base hover:text-grape cursor-pointer duration-200">Новости</a>
                </li>
            </ul>
            <ul class="flex mt-[40px] justify-end">
                <li class="mr-4 cursor-pointer"> <img src="/searchw.svg" alt="search"> </li>
                <li class="mr-4 cursor-pointer"> <img src="/peoplesw.svg" alt="search"> </li>
                <li class="mr-4 cursor-pointer"> <img src="/likew.svg" alt="search"> </li>
                <li class="mr-4 cursor-pointer"> <img src="/cartw.svg" alt="search"> </li>
            </ul>
            <div class="flex justify-between text-white text-iner mt-[40px]">
                <span>Политика конфиденциальности</span>
                <span>SITE BY BRANDYVAY /</span>
            </div>
        </div>
    </div>
</template>