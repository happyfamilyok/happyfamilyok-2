<template>
    <div>
                <div id="appetizers" class="relative w-full bg-gradient-to-r from-[#9f9870] to-[#f3d59f] py-6">
                    <div class="flex justify-between items-center relative">
                        <div class="flex flex-col items-center w-1/3"><img src="/assets/appeziert/download (1).png"
                                alt="Pu Pu Platter" height="120" class="rounded-full object-contain" /><span
                                class="text-lg font-semibold mt-2">Pu Pu Platter</span></div>
                        <h2 class="text-3xl font-bold text-center font-viola">APPETIZERS</h2>
                        <div class="flex flex-col items-center w-1/3"><img src="/assets/appeziert/download (2).png"
                                alt="Fried Dumplings" height="120" class="rounded-full object-contain" /><span
                                class="text-lg font-semibold mt-2">Fried Dumplings</span></div>
                    </div>
                    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 px-2 sm:px-6">
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">1. Roast Pork Egg Roll (1pc)</span><span
                                class="text-sm">肉卷</span><span class="font-bold">$1.35</span></div>
                         <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">2. Shrimp Roll (1pc)</span><span class="text-sm">虾卷</span><span
                                class="font-bold">1.35</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">3. Spring Roll (1pc)</span><span class="text-sm">上海卷</span><span
                                class="font-bold">$1.35</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">3a. Fried Bread (10pc)</span><span class="text-sm">炸面包</span><span
                                class="font-bold">$3.96</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">4. French Fries</span><span class="text-sm">薯条</span><span
                                class="font-bold">$1.85</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">5. Crab Rangoon (8pc) (Cheese Wonton)</span><span
                                class="text-sm">蟹角八个</span><span class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">6. Fried Jumbo Shrimp (5pc)</span><span
                                class="text-sm">炸大虾五个</span><span class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">7. Shrimp Toast</span><span
                                class="text-sm">蝦吐司</span><span class="font-bold">$3.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">8. Fried or Steamed Dumplings (8pc)</span><span
                                class="text-sm">煎饺或水饺八个</span><span class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">9a. Barbecued Spare Ribs (Small)</span><span
                                class="text-sm">排骨小</span><span class="font-bold">$5.55</span></div>
<div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">9b. Barbecued Spare Ribs (Large)</span><span
                                class="text-sm">排骨大</span><span class="font-bold">$9.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">10a. Boneless Spare Ribs (Small)</span><span
                                class="text-sm">無骨排小</span><span class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">10b. Boneless Spare Ribs (Large)</span><span
                                class="text-sm">無骨排大</span><span class="font-bold">$9.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">11. Fried Baby Shrimp (15)</span><span class="text-sm">炸小球</span><span
                                class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">12. Chicken Sticks (5)</span><span class="text-sm">鸡肉条</span><span
                                class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">13. Fried Wonton (10)</span><span class="text-sm">炸雲吞</span><span
                                class="font-bold">$3.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">14. Sesame Ball (10)</span><span class="text-sm">炸芝麻球</span><span
                                class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">15. Beef Teriyaki (5)</span><span
                                class="text-sm">芝士馄饨</span><span class="font-bold">$6.85</span></div>
                        <!--<div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">16. Pu Pu Platter</span><span class="text-sm">資路盤</span><span
                                class="font-bold">$9.95</span></div>-->
                    </div>
                </div>
                <PuPuPlatter />
    </div>
</template>

<script>
import PuPuPlatter from './PuPuPlatter.vue';
export default {
    name: "Appetizers",
    components: {
        PuPuPlatter
    }
}
</script>

<style>

</style>