<script setup>
//@ts-ignore
import Header from '@/components/header.vue'
import MainSlider from '@/components/mainSlider.vue'
import Vitrina from '@/components/vitrina.vue'
import Colors from '@/components/colors.vue'
import doIt from '@/components/doIt.vue';
import catalouge from  '@/components/catalouge.vue'
import itemlist from '@/components/itemlist.vue'
import showcase from '@/components/showcase.vue'
import newscomp from '@/components/newscomp.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header></Header>
  <MainSlider class="pt-[80px]"></MainSlider>
  <Vitrina title="Новые поступления"></Vitrina>
  <Colors></Colors>
  <doIt></doIt>
  <catalouge></catalouge>
  <itemlist></itemlist>
  <showcase></showcase>
  <newscomp></newscomp>
  <Footer></Footer>
</template>
<script>
</script>

