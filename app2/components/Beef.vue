<template>
    <div>
           <div class="text-center text-yellow-200 mt-10 mb-6 bg-black" id="beef">
                            <h2 class="text-3xl font-bold font-viola">BEEF</h2>
                            <p class="text-xl">牛肉</p>
                        </div>
                        <div class="bg-gray-600 text-center text-white py-2 mb-4 rounded-md bg-black">
                            <p>(W. WHITE RICE)</p>
                            <p class="text-sm">配白米饭</p>
                        </div>
                        <div class="px-10 pb-6 bg-black">
                            <table class="w-full text-left border-collapse" role="menu" aria-label="Beef Menu">
                                <thead>
                                    <tr class="bg-gray-600 text-white text-sm md:text-base">
                                        <th class="px-2 py-2 w-1/3"></th>
                                        <th class="px-2 py-2 w-1/3"></th>
                                        <th class="px-2 py-2 w-1/6 text-center">小 SM</th>
                                        <th class="px-2 py-2 w-1/6 text-center">大 LG</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" 
                                        role="menuitem" 
                                        tabindex="0" 
                                        @keydown.enter="() => {}" 
                                        @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>59. Beef w. Broccoli</span></td>
                                        <td class="px-2 py-2">西兰花牛肉</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>60. Pepper Steak w. Onions</span></td>
                                        <td class="px-2 py-2">洋葱胡椒牛排</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>61. Beef w. Pepper &amp; Tomato</span></td>
                                        <td class="px-2 py-2">牛肉配辣椒和西红柿</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>62. Beef w. Chinese Vegs</span></td>
                                        <td class="px-2 py-2">牛肉配中式蔬菜</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>63. Beef w. Mixed Vegetables</span></td>
                                        <td class="px-2 py-2">什锦牛肉</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>64. Beef w. Mushrooms</span></td>
                                        <td class="px-2 py-2">蘑菇牛肉</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>65. Beef w. Black Bean Sauce</span></td>
                                        <td class="px-2 py-2">豉汁牛肉</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>66. Hunan Beef</span></td>
                                        <td class="px-2 py-2">湖南牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>67. Szechuan Beef</span>
                                        </td>
                                        <td class="px-2 py-2">四川牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>68. Mongolian Beef</span></td>
                                        <td class="px-2 py-2">蒙古牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>69. Hot &amp; Spicy Beef</span></td>
                                        <td class="px-2 py-2">香辣牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>70. Kung Pao Beef</span></td>
                                        <td class="px-2 py-2">宫保牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>71. Curry Beef</span></td>
                                        <td class="px-2 py-2">咖喱牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>72. Beef with Garlic Sauce</span></td>
                                        <td class="px-2 py-2">蒜蓉牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
    </div>
</template>
<script>
export default {
    name: "Beef"
}
</script>