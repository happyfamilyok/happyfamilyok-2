<template>
    <div>
          <div class="flex-1 bg-white/70 rounded-2xl p-4 shadow-md" id="pork">
                        <div class="text-center mb-4">
                            <h2 class="text-2xl font-bold font-viola">PORK</h2>
                            <p class="text-lg">猪肉</p>
                        </div>
                        <div class="flex flex-col items-center mb-4"><img
                                src="../assets/chicken-pork/chicken-pork.png" alt=""
                                class="h-32 object-contain" /></div>
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
                                    <td class="relative flex items-center gap-2 text-left py-2">86. Roast Pork w. Broccoli
                                    </td>
                                    <td class="text-left">西兰花烤猪肉</td>
                                    <td>$5.25</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">86. Roast Pork w. Chinese Vegs.</td>
                                    <td class="text-left">烤猪肉配中式蔬菜</td>
                                    <td>$5.25</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">86. Roast Pork w. Mixed Vegs.</td>
                                    <td class="text-left">烤猪肉配什锦蔬菜</td>
                                    <td>$5.25</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">86. Roast Pork w. Black Bean Sauce</td>
                                    <td class="text-left">豉汁烤猪肉</td>
                                    <td>$5.25</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />87. Pork w. Garlic Sauce</td>
                                    <td class="text-left">蒜蓉猪肉</td>
                                    <td>-</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />88. Szechuan Pork</td>
                                    <td class="text-left">四川猪肉</td>
                                    <td>-</td>
                                    <td>$8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />89. Hot &amp; Spicy Pork
                                    </td>
                                    <td class="text-left">香辣猪肉</td>
                                    <td>-</td>
                                    <td>$8.55</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    </div>
</template>
<script>
export default {
    name: "Pork"
}
</script>