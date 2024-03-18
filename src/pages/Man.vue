<script setup>
import Header from '@/components/header.vue'
import Footer from '@/components/Footer.vue';
import Card from '@/components/card.vue'
</script>

<template>
  <Header></Header>
  <div class="text-iner text-xl pt-[80px]  border-black border-b pb-[20px] mb-[30px] pl-[60px]"><a>ГЛАВНАЯ </a> / <a> МУЖЧИНАМ</a></div>
  <ul class="flex px-[60px] pb-[30px]">
    <li class="mr-[30px] flex"><select class="outline-none active:outline-none box-border pr-[10px] focus:outline-none">
       <option selected="true" disabled="disabled">Категория</option>
       <option>Обувь</option>
       <option>Верхняя одежда</option>
       <option>Штаны</option>
    </select><img src="/select.svg" alt="">
    </li>
    <li class="mr-[20px] flex"><select class="outline-none active:outline-none box-border pr-[10px] focus:outline-none">
        <option selected="true" disabled="disabled">Брэнд</option>
        <option>Adidas</option>
        <option>Nike</option>
        <option>Yungrussia</option>
    </select><img src="/select.svg" alt=""></li>
    <li class="mr-[30px] flex items-center"><select class="outline-none active:outline-none box-border focus:outline-none pr-[10px]">
        <option selected="true" disabled="disabled">Размер</option>
        <option>38 EU</option>
        <option>39 EU</option>
        <option>40 EU</option>
        <option>41 EU</option>
        <option>42 EU</option>
        <option>43 EU</option>
    </select><img src="/select.svg" alt=""></li>
    <li class="mr-[30px] flex"><select class="outline-none active:outline-none box-border pr-[10px] focus:outline-none">
        <option selected="true" disabled="disabled">Цвет</option>
        <option>Черный</option>
        <option>Белый</option>
        <option>Зеленый</option>
        <option>Оранжевый</option>
        <option>Серый</option>
        <option>Синий</option>
    </select><img src="/select.svg" alt=""></li>
  </ul>
  <div class="grid grid-cols-4 border__top pb-[170px]">
      <Card imageUrl="/item2.png" :price="4999" price_name="RETRO “ROYALTY”" title="AIR JORDAN 12"/>
      <Card imageUrl="/item2.png" :price="4999" price_name="RETRO “ROYALTY”" title="AIR JORDAN 12"/>
      <Card imageUrl="/item2.png" :price="4999" price_name="RETRO “ROYALTY”" title="AIR JORDAN 12"/>
      <Card imageUrl="/item2.png" :price="4999" price_name="RETRO “ROYALTY”" title="AIR JORDAN 12"/>
      <Card imageUrl="/item2.png" :price="4999" price_name="RETRO “ROYALTY”" title="AIR JORDAN 12"/>
      <Card imageUrl="/item2.png" :price="4999" price_name="RETRO “ROYALTY”" title="AIR JORDAN 12"/>
      <Card imageUrl="/item2.png" :price="4999" price_name="RETRO “ROYALTY”" title="AIR JORDAN 12"/>
      <Card imageUrl="/item2.png" :price="4999" price_name="RETRO “ROYALTY”" title="AIR JORDAN 12"/>
      <Card imageUrl="/item2.png" :price="4999" price_name="RETRO “ROYALTY”" title="AIR JORDAN 12"/>
      <Card imageUrl="/item2.png" :price="4999" price_name="RETRO “ROYALTY”" title="AIR JORDAN 12"/>
      <Card imageUrl="/item2.png" :price="4999" price_name="RETRO “ROYALTY”" title="AIR JORDAN 12"/>
      <Card imageUrl="/item2.png" :price="4999" price_name="RETRO “ROYALTY”" title="AIR JORDAN 12"/>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.border__top{
  border-top: 1px solid black;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
}

select::-ms-expand {
  display: none;
}
</style>
