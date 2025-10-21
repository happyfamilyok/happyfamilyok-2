<template>
  <div>
 <div id="lo-mein" class="bg-[#fdf9f2] h-auto py-10">
                    <div class="flex flex-wrap   justify-center gap-6 max-w-7xl mx-auto">
                        <div class="flex-1 px-4">
                            <h2 class="text-center text-2xl font-viola uppercase tracking-wide mb-3">LO MEIN
                                <!-- --> <span class="ml-1 font-sans">捞面</span></h2>
                            <div class="bg-white/90 rounded-2xl shadow-sm p-4 mb-6">
                                <div class="mb-2">
                                    <h3 class="text-red-700 font-serif text-lg uppercase">(Soft Noodles)</h3>
                                    <p class="text-black text-base">软面条</p>
                                </div>
                                <div class="flex justify-between text-red-700 font-serif text-sm mb-2">
                                    <span>小SM</span><span>大LG</span></div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">
                                        40. Vegetable Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">蔬菜捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$4.25</span><span>$6.25</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">41. Roast
                                        Pork Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">烤猪肉捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$4.55</span><span>$6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">42. Chicken
                                        Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">鸡肉捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$4.55</span><span>$6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">43. Beef
                                        Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">牛肉捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$4.95</span><span>$7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">44. Shrimp
                                        Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">虾捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$4.95</span><span>$7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">45. House Special Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">本店特色捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$5.50</span><span>$7.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">46. Crabmeat
                                        Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">蟹肉捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$5.50</span><span>$7.95</span></div>
                                </div>
                            </div>
                        </div>
                </div>
        </div>

  </div>
</template>

<script>
export default {
    name: "LoMein"
}
</script>

<style>

</style>