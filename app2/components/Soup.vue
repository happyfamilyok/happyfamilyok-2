<template>
    <div>
                <div id="soup" class="relative bg-gradient-to-r from-white to-amber-50 p-10">

                    <div class="flex flex-col gap-2 sm:flex-row">
                        <div class="flex-1 px-1 sm:px-4">
                            <h2 class="text-4xl text-black uppercase font-viola">SOUP</h2>
                            <p class="text-xl">汤</p>
                            <p class="mt-3 text-red-700 italic font-medium">(w. Crispy Noodles)<span
                                    class="ml-2 text-black">配脆面</span></p>
                            <div class="grid grid-cols-4 mt-4 font-medium text-center">
                                <div class="text-red-700"></div>
                                <div class="text-red-700"></div>
                                <div class="text-red-700">小 PT</div>
                                <div class="text-red-700">大 QT</div>
                            </div>
                            <div class="mt-3 w-full space-y-1">
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">17. Wonton Soup</div>
                                    <div>馄饨汤</div>
                                    <div class="text-center">$1.95</div>
                                    <div class="text-center">$3.25</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">18. Egg Drop Soup</div>
                                    <div>蛋花汤</div>
                                    <div class="text-center">$1.95</div>
                                    <div class="text-center">$3.25</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">19. Chicken Rice Soup</div>
                                    <div>鸡肉饭汤</div>
                                    <div class="text-center">$1.95</div>
                                    <div class="text-center">$3.25</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">20. Chicken Noodle Soup</div>
                                    <div>鸡肉面汤</div>
                                    <div class="text-center">$1.95</div>
                                    <div class="text-center">$3.25</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">21. Wonton Egg Drop Soup</div>
                                    <div>馄饨蛋花汤</div>
                                    <div class="text-center">$2.35</div>
                                    <div class="text-center">$3.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">22. Vegetable Bean Curd Soup</div>
                                    <div>蔬菜豆腐汤</div>
                                    <div class="text-center">$2.35</div>
                                    <div class="text-center">$3.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />23. Hot &amp; Sour Soup
                                    </div>
                                    <div>酸辣汤</div>
                                    <div class="text-center">$2.35</div>
                                    <div class="text-center">$3.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">24. House Special Soup (for 2)
                                    </div>
                                    <div>本店特色汤</div>
                                    <div class="text-center">5.50</div>
                                    <div class="text-center">-</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">25. Seafood Soup (For 2)</div>
                                    <div>海鲜汤（2人份）</div>
                                    <div class="text-center">$6.50</div>
                                    <div class="text-center">-</div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>  
    </div>
</template>

<script>
export default {
    name: "Soup"
}
</script>

<style>

</style>