<template>
  <div>
                        <!-- Moo Shu Section -->
                    <div
                        class="flex flex-col gap-5 sm:gap-6 lg:gap-[28px] justify-start items-center w-full lg:flex-1 min-w-0" id="moo-shu">
                        <div class="flex flex-col items-center">
                            <h3
                                class="text-[20px] sm:text-[24px] lg:text-[28px] font-viola font-normal leading-[24px] sm:leading-[28px] lg:leading-[33px] text-global-1 ml-16 sm:ml-20 lg:ml-[94px]">
                                MOO SHU</h3>
                            <h3
                                class="text-[18px] sm:text-[20px] lg:text-[22px] font-viola font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-global-1">
                                木须类</h3>
                            <div class="h-50 sm:block hidden"></div>
                        </div>
                        <div
                            class="w-full h-[435px] flex flex-row justify-start items-start bg-global-5 rounded-[32px] shadow-[0px_4px_32px_#888888ff] border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] p-4 sm:p-5 lg:p-[20px]">
                            <div
                                class="flex flex-col gap-4 sm:gap-5 lg:gap-[22px] justify-start items-start w-full justify-center mb-[18px] sm:mb-[27px] lg:mb-[36px]" role="menu" aria-label="Moo Shu Menu">
                                <div class="flex flex-row gap-1">
                                    <p
                                        class="text-[14px] sm:text-[16px] lg:text-[18px] font-viola font-normal leading-[17px] sm:leading-[19px] lg:leading-[21px] text-global-text-4">
                                        (w. Rice &amp; Pancakes)</p>
                                    <p
                                        class="text-[13px] sm:text-[15px] lg:text-[17px] font-viola font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-text-4">
                                        配米饭和薄饼</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            110. Moo Shu Chicken $7.85</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        木须鸡</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            111. Moo Shu Beef $8.25</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        木须牛肉</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            112. Moo Shu Pork $7.85</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        木须猪肉</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            113. Moo Shu Shrimp $8.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        木须虾</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            114. House Special Moo Shu $8.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        本楼木须</p>
                                </div>
                            </div>
                        </div>
                    </div>
  </div>
</template>

<script>
export default {
    name: "MooShu",
}
</script>

<style>

</style>