<template>
    <div>
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-[20px] w-full max-w-[1330px] mx-auto mb-[48px] sm:mb-[72px] lg:mb-[96px] px-4">
                    <div class="flex flex-col gap-5 sm:gap-6 lg:gap-[28px] justify-start items-center w-full lg:flex-1 min-w-0" id="sweet-sour">
                        <div class="flex flex-col items-center">
                            <h3
                                class="text-[20px] sm:text-[24px] lg:text-[28px] font-viola font-normal leading-[24px] sm:leading-[28px] lg:leading-[33px] text-global-1 ">
                                SWEET &amp; SOUR</h3>
                                <!-- TODO: Image alt should be descriptive for accessibility -->
                            <h3
                                class="text-[18px] sm:text-[20px] lg:text-[22px] font-viola font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-global-1">
                                糖醋类</h3><img src="/assets/menu-platter/platter-01.png" alt="A platter of sweet and sour dishes"
                                class="h-50 object-cover rounded-lg " />
                        </div>
                        <div class="w-full h-[435px] flex flex-row justify-start items-start bg-global-5 rounded-[32px] shadow-[0px_4px_32px_#888888ff] border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] p-4 sm:p-5 lg:p-[20px]">
                            <div
                                class="flex flex-col gap-4 sm:gap-5 lg:gap-[22px] justify-start items-start w-full mb-[38px] sm:mb-[57px] lg:mb-[76px]" role="menu" aria-label="Sweet & Sour Menu">
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
                                            106. Sweet &amp; Sour Chicken $8.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        糖醋鸡</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            107. Sweet &amp; Sour Pork $8.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        糖醋猪肉</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            108. Sweet &amp; Sour Shrimp $8.95</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        糖醋虾</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            109. Sum Po <i>(Chicken, Shrimp and Pork)</i> $8.95</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        三宝（鸡肉、虾和猪肉）</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    </div>

    </template>

    <script>
    export default {
        name: "SweetAndSour"
    }
    </script>