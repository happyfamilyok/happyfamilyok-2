<template>
    <div>
                             <div class="flex-1 px-4" id="chow-mai-fun">
                            <h2 class="text-center text-2xl font-viola uppercase tracking-wide mb-3">CHOW MAI FUN
                                <!-- --> <span class="ml-1 font-sans">炒面粉</span></h2>
                            <div class="bg-white/90 rounded-2xl shadow-sm p-4 mb-6">
                                <div class="mb-2">
                                    <h3 class="text-red-700 font-serif text-lg uppercase">(Rice Noodle)</h3>
                                    <p class="text-black text-base">炒面粉</p>
                                </div>
                                <div class="flex justify-between text-red-700 font-serif text-sm mb-2">
                                    <span>均码</span><span>ORDER</span></div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">
                                        47. Vegetable Chow Mai Fun</div>
                                    <div class="text-black text-sm flex-1 text-center">蔬菜炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$6.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">48. Roast Pork Chow Mai Fun</div>
                                    <div class="text-black text-sm flex-1 text-center">烤猪肉炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">49. Chicken Chow Mai Fun</div>
                                    <div class="text-black text-sm flex-1 text-center">鸡肉炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">50. Beef Chow Mai Fun</div>
                                    <div class="text-black text-sm flex-1 text-center">牛肉炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">51. Shrimp Chow Mai Fun</div>
                                    <div class="text-black text-sm flex-1 text-center">虾仁炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />52. Singapore Chow Mai Fun
                                    </div>
                                    <div class="text-black text-sm flex-1 text-center">新加坡炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">52a. House Special Chow Mai Fun</div>
                                    <div class="text-black text-sm flex-1 text-center">本店特色炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>7.95</span></div>
                                </div>
                            </div>
                        </div>
    </div>
</template>

<script>
export default {
    name: "ChowMaiFun"
}
</script>

<style>

</style>