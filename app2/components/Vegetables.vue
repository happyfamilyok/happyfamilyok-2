<template>
  <div>
  <!-- Vegetable Section -->
    <div
        class="flex flex-col gap-5 sm:gap-6 lg:gap-[28px] justify-start items-center w-full lg:flex-1 min-w-0" id="vegetables">
        <div class="flex flex-col items-center">
            <h3
                class="text-[20px] sm:text-[24px] lg:text-[28px] font-viola font-normal leading-[24px] sm:leading-[28px] lg:leading-[33px] text-global-1 ">
                VEGETABLE</h3>
                <!-- FIXME: alt text needs to be discriptive-->
            <h3
                class="text-[18px] sm:text-[20px] lg:text-[22px] font-viola font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-global-1">
                蔬菜类</h3><img src="/assets/menu-platter/platter-02.png" alt="A platter of assorted vegetables"
                class="h-50 object-cover rounded-lg " />
        </div>
        <div
            class="w-full h-[435px] flex flex-row justify-start items-start bg-global-5 rounded-[32px] shadow-[0px_4px_32px_#888888ff] border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] p-4 sm:p-5 lg:p-[20px]">
            <div
                class="flex flex-col gap-4 sm:gap-5 lg:gap-[22px] justify-start items-start w-full justify-center w-[62%] mt-1 lg:mt-[4px]" role="menu" aria-label="Vegetables Menu">
                <div class="flex flex-row gap-1">
                    <p
                        class="text-[14px] sm:text-[16px] lg:text-[18px] font-viola font-normal leading-[17px] sm:leading-[19px] lg:leading-[21px] text-global-text-4">
                        (w. White Rice)</p>
                    <p
                        class="text-[13px] sm:text-[15px] lg:text-[17px] font-viola font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-text-4">
                        配白米饭</p>
                </div>
                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                     role="menuitem" 
                     tabindex="0" 
                     @keydown.enter="() => {}" 
                     @keydown.space.prevent="() => {}">
                    <div class="relative flex flex-row items-center gap-2">
                        <p
                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                            115. Vegetable Delight $7.55</p>
                    </div>
                    <p
                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                        素什锦</p>
                </div>
                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                     role="menuitem" 
                     tabindex="0" 
                     @keydown.enter="() => {}" 
                     @keydown.space.prevent="() => {}">
                    <div class="relative flex flex-row items-center gap-2"><img src="../assets/spicy.png"
                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />
                        <p
                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                            116. Broccoli w. Garlic Sauce $7.55</p>
                    </div>
                    <p
                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                        蒜蓉西兰花</p>
                </div>
                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                     role="menuitem" 
                     tabindex="0" 
                     @keydown.enter="() => {}" 
                     @keydown.space.prevent="() => {}">
                    <div class="relative flex flex-row items-center gap-2"><img src="../assets/spicy.png"
                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />
                        <p
                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                            117. Bean Curd Szechuan Style $7.55</p>
                    </div>
                    <p
                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                        四川豆腐</p>
                </div>
                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                     role="menuitem" 
                     tabindex="0" 
                     @keydown.enter="() => {}" 
                     @keydown.space.prevent="() => {}">
                    <div class="relative flex flex-row items-center gap-2"><img src="../assets/spicy.png"
                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />
                        <p
                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                            118. Ma Po Tofu $7.55</p>
                    </div>
                    <p
                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                        麻婆豆腐</p>
                </div>
                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                     role="menuitem" 
                     tabindex="0" 
                     @keydown.enter="() => {}" 
                     @keydown.space.prevent="() => {}">
                    <div class="relative flex flex-row items-center gap-2">
                        <p
                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                            119. Sauteed Snow Peas $7.55</p>
                    </div>
                    <p
                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                        清炒荷兰豆</p>
                </div>
                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                     role="menuitem" 
                     tabindex="0" 
                     @keydown.enter="() => {}" 
                     @keydown.space.prevent="() => {}">
                    <div class="relative flex flex-row items-center gap-2">
                        <p
                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                            120. Sauteed String Bean $7.55</p>
                    </div>
                    <p
                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                        干煸四季豆</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Vegetables",
}
</script>

<style>

</style>