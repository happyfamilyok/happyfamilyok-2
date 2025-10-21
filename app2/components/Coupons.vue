<template>
  <div>
        <!-- Coupons Section -->
            <div class="w-full bg-[#8B1C1B] flex flex-col items-center py-8 relative" id="coupons">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center px-4" role="menu" aria-label="Coupons">
                    <div class="relative bg-white border-3 border-dashed border-red-600 w-52 p-4 text-center hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                         role="menuitem" 
                         tabindex="0" 
                         @keydown.enter="() => {}" 
                         @keydown.space.prevent="() => {}"
                         aria-label="Free Egg Drop Soup, Hot & Sour Soup or Egg Rolls with purchase of $20 or more"><span
                            class="absolute -top-5 left-1/2 -translate-x-1/2 text-black text-sm">自由的</span>
                        <h2 class="text-red-600 text-4xl font-bold">FREE</h2>
                        <p class="text-red-600 mt-2 text-lg font-medium">Pt. Egg Drop Soup or Pt. Hot &amp; Sour Soup or
                            Egg Rolls</p>
                        <p class="mt-4 font-semibold">with Purchase of $20.00 or More</p>
                        <p class="mt-2 text-sm whitespace-pre-line">coupon cannot be combined w. other offer
                            lunch special not included</p>
                    </div>
                    <div class="relative bg-white border-3 border-dashed border-red-600 w-52 p-4 text-center hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                         role="menuitem" 
                         tabindex="0" 
                         @keydown.enter="() => {}" 
                         @keydown.space.prevent="() => {}"><span
                            class="absolute -top-5 left-1/2 -translate-x-1/2 text-black text-sm">自由的</span>
                        <h2 class="text-red-600 text-4xl font-bold">FREE</h2>
                        <p class="text-red-600 mt-2 text-lg font-medium">Qt. Egg Drop Soup or 2 Liter Soda or 2 Egg
                            Rolls</p>
                        <p class="mt-4 font-semibold">with Purchase of $30.00 or More</p>
                        <p class="mt-2 text-sm whitespace-pre-line">coupon cannot be combined w. other offer
                            lunch special not included</p>
                    </div>
                    <div class="relative bg-white border-3 border-dashed border-red-600 w-52 p-4 text-center hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                         role="menuitem" 
                         tabindex="0" 
                         @keydown.enter="() => {}" 
                         @keydown.space.prevent="() => {}"><span
                            class="absolute -top-5 left-1/2 -translate-x-1/2 text-black text-sm">自由的</span>
                        <h2 class="text-red-600 text-4xl font-bold">FREE</h2>
                        <p class="text-red-600 mt-2 text-lg font-medium">Qt. Sweet &amp; Sour Chicken</p>
                        <p class="mt-4 font-semibold">with Purchase of $40.00 or More</p>
                        <p class="mt-2 text-sm whitespace-pre-line">coupon cannot be combined w. other offer
                            lunch special not included</p>
                    </div>
                    <div class="relative bg-white border-3 border-dashed border-red-600 w-52 p-4 text-center hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                         role="menuitem" 
                         tabindex="0" 
                         @keydown.enter="() => {}" 
                         @keydown.space.prevent="() => {}"><span
                            class="absolute -top-5 left-1/2 -translate-x-1/2 text-black text-sm">自由的</span>
                        <h2 class="text-red-600 text-4xl font-bold">FREE</h2>
                        <p class="text-red-600 mt-2 text-lg font-medium">Qt. Sesame Chicken or General Tso’s Chicken</p>
                        <p class="mt-4 font-semibold">with Purchase of $50.00 or More</p>
                        <p class="mt-2 text-sm whitespace-pre-line">coupon cannot be combined w. other offer
                            lunch special not included</p>
                    </div>
                </div>
                <div class="mt-6 text-white font-medium">优惠券不可与其他优惠同时使用，且不包含午餐特价</div>
            </div>
            <!--<div class="w-full px-0 bg-global-3 py-3 sm:py-4 lg:py-[18px] flex flex-row justify-center items-center bg-[#ffff00]">
                <p
                    class="text-[20px] sm:text-[24px] lg:text-[28px] font-viola font-normal leading-[24px] sm:leading-[28px] lg:leading-[33px] text-[#A02929] self-end">
                    Last updated: Aug 30, 2025.</p>
            </div>-->
  </div>
</template>

<script>
export default {
  name: 'Coupons'
}
</script>

<style>

</style>