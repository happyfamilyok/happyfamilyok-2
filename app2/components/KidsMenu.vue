<template>
    <div>
                       <div id="kids-menu"
                    class="relative w-full bg-white min-h-[500px] flex flex-col items-center justify-center p-8">
                    <div class="w-full text-left mb-4">
                        <h2 class="text-4xl font-bold text-black font-viola">KIDS MENUS <span
                                class="ml-4 text-2xl font-normal c">儿童菜单</span></h2>
                        <p class="text-red-600 italic text-xl mt-2">(served w. french fries or fried rice)</p>
                        <p class="text-black mt-1">(配薯条或炒饭)</p>
                    </div>
                    <div class="absolute sm:top-20 top-35 sm:right-24 right-2">
                        <div class="relative">
                            <div
                                class="w-28 h-28 bg-yellow-400 text-pink-700 font-bold text-xl flex items-center justify-center rounded-full shadow-lg starburst rotate-[15deg]">
                                $5.50</div><span
                                class="absolute top-1/2 -left-10 -translate-y-1/2 text-black text-lg">价格</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-y-12 mt-12 max-w-5xl w-full" role="menu" aria-label="Kids Menu Items">
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem" aria-label="K1 Chicken Nuggets - $5.50">
                            <p class="font-bold text-lg text-black">K1. Chicken Nuggets (8)</p>
                            <p class="text-black text-lg">炸鸡粒</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K2. Fried Fish (2)</p>
                            <p class="text-black text-lg">炸鱼</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K3. Fried Scallops (8)</p>
                            <p class="text-black text-lg">炸干贝</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K4. Fried Chicken Wings (3)</p>
                            <p class="text-black text-lg">炸鸡翅</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K5. Fried Baby Shrimp (8)</p>
                            <p class="text-black text-lg">炸虾</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K6. Fried Squid (12)</p>
                            <p class="text-black text-lg">炸鱿鱼</p>
                        </div>
                    </div>
                </div>
    </div>
</template>

<script>
export default {
    name: "KidsMenu"
}
</script>

<style>

</style>