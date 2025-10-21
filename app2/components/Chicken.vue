<template>
    <div>
         <div class="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-10 max-w-[1330px] ">
                    <div class="flex-1 bg-white/70 rounded-2xl p-4 shadow-md" id="chicken">
                        <div class="text-center mb-4">
                            <h2 class="text-2xl font-bold font-viola">CHICKEN</h2>
                            <p class="text-lg">鸡肉</p>
                        </div>
                        <div class="flex flex-col items-center mb-4"><img src="../images/chicken.png"
                                alt="Moo Goo Gai Pian" class="h-32 object-contain" />
                            <p class="mt-2 font-semibold">Moo Goo Gai Pian</p>
                        </div>
                        <div class="text-center mb-2">
                            <p class="text-red-600 italic font-medium">(W. White Rice)</p>
                            <p class="text-black">配白米饭</p>
                        </div>
                        <table class="w-full text-left border-separate border-spacing-y-2">
                            <thead>
                                <tr class="text-center text-sm md:text-base font-semibold">
                                    <th class="w-1/3"></th>
                                    <th class="w-1/3"></th>
                                    <th class="w-1/6">小 SM</th>
                                    <th class="w-1/6">大 LG</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">73. Chicken with Broccoli</td>
                                    <td class="text-left">西兰花鸡肉</td>
                                    <td>$5.25</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">74. Moo Goo Gai Pan</td>
                                    <td class="text-left">蘑菇鸡片</td>
                                    <td>$5.25</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">75. Chicken with Mixed Vegetables</td>
                                    <td class="text-left">鸡肉什锦蔬菜</td>
                                    <td>$5.25</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">76. Chicken with Almond Ding</td>
                                    <td class="text-left">杏仁鸡丁</td>
                                    <td>$5.25</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">77. Chicken with Cashew Nuts</td>
                                    <td class="text-left">腰果鸡丁</td>
                                    <td>$5.25</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">78. Chicken with Bean Curd</td>
                                    <td class="text-left">豆腐鸡</td>
                                    <td>$5.25</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">79. Chicken with Black Bean Sauce</td>
                                    <td class="text-left">豉汁鸡</td>
                                    <td>$5.25</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />80. Hunan Chicken</td>
                                    <td class="text-left">湖南鸡</td>
                                    <td>-</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />81. Curry Chicken</td>
                                    <td class="text-left">咖喱鸡</td>
                                    <td>-</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />82. Chicken with Garlic Sauce
                                    </td>
                                    <td class="text-left">蒜蓉鸡</td>
                                    <td>-</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />83. Szechuan Chicken</td>
                                    <td class="text-left">四川鸡</td>
                                    <td>-</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />84. Kung Po Chicken</td>
                                    <td class="text-left">宫保鸡丁</td>
                                    <td>-</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />85. Hot &amp; Spicy Chicken
                                    </td>
                                    <td class="text-left">香辣鸡</td>
                                    <td>-</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">85a. Lemon Chicken</td>
                                    <td class="text-left">柠檬鸡</td>
                                    <td>-</td>
                                    <td>$8.55</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
    </div>
</template>
<script>
export default {
    name: "Chicken"
}
</script>