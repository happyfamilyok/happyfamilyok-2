<template>
  <div>
        <div class="flex-1 px-1 sm:px-4">
                <h2 class="text-4xl text-black uppercase font-viola">FRIED RICE</h2>
                <p class="text-xl">炒饭</p>
                <div class="grid grid-cols-4 mt-4 font-medium text-center">
                    <div class="text-red-700"></div>
                    <div class="text-red-700"></div>
                    <div class="text-red-700">小 SM</div>
                    <div class="text-red-700">大 LG</div>
                </div>
                <div class="mt-3 w-full space-y-1">
                    <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                        <div class="relative font-medium flex items-center gap-1">26. Vegetable Fried Rice
                        </div>
                        <div>蔬菜炒饭</div>
                        <div class="text-center">$4.25</div>
                        <div class="text-center">$6.25</div>
                    </div>
                    <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                        <div class="relative font-medium flex items-center gap-1">27. Roast Pork Fried Rice
                        </div>
                        <div>烤猪肉炒饭</div>
                        <div class="text-center">$4.55</div>
                        <div class="text-center">$6.95</div>
                    </div>
                    <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                        <div class="relative font-medium flex items-center gap-1">28. Chicken Fried Rice</div>
                        <div>鸡肉炒饭</div>
                        <div class="text-center">$4.55</div>
                        <div class="text-center">$6.95</div>
                    </div>
                    <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                        <div class="relative font-medium flex items-center gap-1">29. Beef Fried Rice</div>
                        <div>牛肉炒饭</div>
                        <div class="text-center">$4.95</div>
                        <div class="text-center">$7.55</div>
                    </div>
                    <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                        <div class="relative font-medium flex items-center gap-1">30. Shrimp Fried Rice</div>
                        <div>虾仁炒饭</div>
                        <div class="text-center">$4.95</div>
                        <div class="text-center">$7.55</div>
                    </div>
                    <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                        <div class="relative font-medium flex items-center gap-1">31. Crab Meat Fried Rice</div>
                        <div>蟹肉炒饭</div>
                        <div class="text-center">$5.50</div>
                        <div class="text-center">$7.95</div>
                    </div>
                    <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                        <div class="relative font-medium flex items-center gap-1">32. House Special Fried Rice
                            (CHICKEN, SHRIMP &amp; PORK)</div>
                        <div>特色炒饭（鸡肉、虾和猪肉）</div>
                        <div class="text-center">$5.50</div>
                        <div class="text-center">$7.95</div>
                    </div>
                    <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                        <div class="relative font-medium flex items-center gap-1">33. Ham Fried Rice</div>
                        <div>火腿炒饭</div>
                        <div class="text-center">$5.50</div>
                        <div class="text-center">$7.95</div>
                    </div>
                </div>
            </div>
        <div class="absolute right-20 top-16  text-center"><img
                src="../assets/pupu-plater/pupu.png" alt="House Special Fried Rice"
                class="h-full rounded-full object-contain" />
            <p class="text-sm font-serif">House Special Fried Rice</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FriedRice"
}
</script>

<style>

</style>