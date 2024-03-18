<template>
    <div class="mt-[400px] mb-[200px]">
        <h2 class="font-iner font-bold text-4xl	pl-[60px] pb-[30px] uppercase">Лучшее предложение</h2>
        <div class="grid-coll"> 
            <div class="grid1 relative border border-l-0 border-black duration-400 ">
                <img src="/list1.png" alt="">
                <div class="w-[100%] opacity-0 h-[100%] top-0 absolute flex justify-center items-center hover:opacity-100 transition-all duration-300">
                    <div class="bg-[#A552E7] rounded-full w-[75%] h-[90%] flex items-center justify-center"><span class="text-iner text-white text-lg text-center"> <span class="font-semibold">AIR FORCE 1</span><br><span>LOW FONTANKA <br>“university blue”</span> <br> <span class="inline-block mt-5">4999 RUB.</span> </span></div>
                </div>
            </div>
            <div class="grid2 border relative border-l-0 border-b-0  border-black hover:text-grape duration-400 ">
                <img src="/list2.png" alt="">
                <div class="w-[100%] opacity-0 h-[100%] top-0 absolute flex justify-center items-center hover:opacity-100 transition-all duration-300">
                    <div class="bg-[#A552E7] rounded-full w-[75%] h-[90%] flex items-center justify-center"><span class="text-iner text-white text-lg text-center"> <span class="font-semibold">AIR FORCE 1</span><br><span>LOW FONTANKA <br>“university blue”</span> <br> <span class="inline-block mt-5">4999 RUB.</span> </span></div>
                </div>
            </div>
            <div class="grid3 border relative border-l-0 border-b-0 border-r-0 border-black hover:text-grape duration-400 ">
                <img src="/list3.png" alt="">
                <div class="w-[100%] opacity-0 h-[100%] top-0 absolute flex justify-center items-center hover:opacity-100 transition-all duration-300">
                    <div class="bg-[#A552E7] rounded-full w-[75%] h-[90%] flex items-center justify-center"><span class="text-iner text-white text-lg text-center"> <span class="font-semibold">AIR FORCE 1</span><br><span>LOW FONTANKA <br>“university blue”</span> <br> <span class="inline-block mt-5">4999 RUB.</span> </span></div>
                </div>
            </div>
            <div class="grid4 border relative border-l-0  border-black hover:text-grape duration-400 ">
                <img src="/list4.png" alt="">
                <div class="w-[100%] opacity-0 h-[100%] top-0 absolute flex justify-center items-center hover:opacity-100 transition-all duration-300">
                    <div class="bg-[#A552E7] rounded-full w-[75%] h-[90%] flex items-center justify-center"><span class="text-iner text-white text-lg text-center"> <span class="font-semibold">AIR FORCE 1</span><br><span>LOW FONTANKA <br>“university blue”</span> <br> <span class="inline-block mt-5">4999 RUB.</span> </span></div>
                </div>
            </div>
            <div class="grid5 border  relative border-l-0 border-r-0 border-black hover:text-grape duration-400 ">
                <img src="/list5.png" alt="">
                <div class="w-[100%] opacity-0 h-[100%] top-0 absolute flex justify-center items-center hover:opacity-100 transition-all duration-300">
                    <div class="bg-[#A552E7] rounded-full w-[75%] h-[90%] flex items-center justify-center"><span class="text-iner text-white text-lg text-center"> <span class="font-semibold">AIR FORCE 1</span><br><span>LOW FONTANKA <br>“university blue”</span> <br> <span class="inline-block mt-5">4999 RUB.</span> </span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
.grid-coll
{ 
    display: grid;
    grid-template-columns: 50% repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
}
.grid1 { grid-area: 1 / 1 / 3 / 2; }
.grid2 { grid-area: 1 / 2 / 2 / 4; }
.grid3 { grid-area: 1 / 4 / 2 / 6; }
.grid4 { grid-area: 2 / 2 / 3 / 4; }
.grid5 { grid-area: 2 / 4 / 3 / 6; }
</style>