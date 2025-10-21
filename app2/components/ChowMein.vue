<template>
  <div>
      <div id="chow-mein"
                    class="w-full bg-[#fdf9f2] min-h-screen flex flex-col justify-center items-center gap-3">
                    <div class="w-11/12 px-6 py-10 bg-white/95 rounded-xl shadow-sm">
                        <h2 class="text-center text-3xl uppercase tracking-wide mb-1 font-viola">CHOW MEIN OR CHOP SUEY
                            (VEGETABLE)</h2>
                        <p class="text-center text-lg text-gray-800 mb-4">炒面或杂碎，什锦蔬菜，不是面条</p>
                        <p class="text-red-700 text-lg font-serif text-center mb-6">(w. White Rice &amp; Crispy Noodles)
                        </p>
                        <p class="text-center text-base text-gray-800 mb-6">配白米和脆面条</p>
                        <div class="flex justify-between items-center text-red-700 font-serif text-sm mb-2"><span
                                class="w-1/3"></span><span class="w-1/3 text-center">价格</span>
                            <div class="w-1/3 flex justify-end gap-12"><span>小 SM</span><span>大 LG</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">34. Vegetable Chow Mein or Chop Suey</div>
                            <div class="w-1/3 text-center text-black text-sm">蔬菜炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>$4.25</span><span>$6.25</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">35. Roast Pork Chow Mein or Chop Suey</div>
                            <div class="w-1/3 text-center text-black text-sm">烤猪肉炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>$4.55</span><span>$6.95</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">36. Chicken Chow Mein or Chop Suey</div>
                            <div class="w-1/3 text-center text-black text-sm">鸡肉炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>$4.55</span><span>$6.95</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">37. Beef Chow Mein or Chop Suey</div>
                            <div class="w-1/3 text-center text-black text-sm">牛肉炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>$4.95</span><span>$7.55</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">38. Shrimp Chow Mein or Chop Suey</div>
                            <div class="w-1/3 text-center text-black text-sm">虾炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>$4.95</span><span>$7.55</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">39. House Special Chow Mein or Chop Suey</div>
                            <div class="w-1/3 text-center text-black text-sm">本店特色炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>$5.50</span><span>$7.95</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">(CHICKEN, SHRIMP &amp; PORK)</div>
                            <div class="w-1/3 text-center text-black text-sm">鸡肉、虾和猪肉</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium"><span>-</span>
                            </div>
                        </div>
                    </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "ChowMein"
}
</script>

<style>

</style>