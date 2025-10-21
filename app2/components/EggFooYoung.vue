<template>
    <div>
                        <div class="flex-1 px-4" id="egg-foo-young">
                            <h2 class="text-center text-2xl font-viola uppercase tracking-wide mb-3">EGG FOO YOUNG
                                <!-- --> <span class="ml-1 font-sans">芙蓉蛋</span></h2>
                            <div class="bg-white/90 rounded-2xl shadow-sm p-4 mb-6">
                                <div class="mb-2">
                                    <h3 class="text-red-700 font-serif text-lg uppercase">(W. White Rice)</h3>
                                    <p class="text-black text-base"></p>
                                </div>
                                <div class="flex justify-between text-red-700 font-serif text-sm mb-2">
                                    <span>均码</span><span>ORDER</span></div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">
                                        53. Vegetable Egg Foo Young</div>
                                    <div class="text-black text-sm flex-1 text-center">蔬菜芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">54. Roast Pork Egg Foo Young</div>
                                    <div class="text-black text-sm flex-1 text-center">烤猪肉芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.25</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">55. Chicken Egg Foo Young</div>
                                    <div class="text-black text-sm flex-1 text-center">鸡肉芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.25</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">56. Beef Egg Foo Young</div>
                                    <div class="text-black text-sm flex-1 text-center">牛肉芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">57. Shrimp Egg Foo Young</div>
                                    <div class="text-black text-sm flex-1 text-center">虾芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">58. House Special Egg Foo Young</div>
                                    <div class="text-black text-sm flex-1 text-center">本店特色芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">
                                        (Chicken, Shrimp &amp; Pork)</div>
                                    <div class="text-black text-sm flex-1 text-center">鸡肉、虾和猪肉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"></div>
                                </div>
                            </div>
                        </div>
    </div>
</template>

<script>
export default {
    name: "EggFooYoung"
}
</script>

<style>

</style>