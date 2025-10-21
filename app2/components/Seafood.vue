<template>
    <div>
        <div class="relative w-full mx-auto py-10 max-w-[1330px]">
            <!-- MARK: Seafood Section -->
            <div class="flex justify-between items-center mb-6">
                <!-- MARK: Left Image -->
                <div class="flex flex-col items-center"><img src="/assets/sea-foos/sea-01.png"
                        alt="Shrimp with Lobster Sauce" class="h-40 object-contain" />
                    <p class="font-semibold mt-2">Shrimp w. Lobster Sc.</p>
                </div>
                <!-- MARK: Center Text -->
                <div class="text-center" id="seafood">
                    <h2 class="text-2xl font-bold font-viola">SEAFOOD</h2>
                    <p class="text-lg">海鲜</p>
                    <p class="text-red-600 italic font-medium mt-2">(W. White Rice)</p>
                    <p class="text-black">配白米饭</p>
                </div>
                <!-- MARK: Right Image -->
                <div class="flex flex-col items-center"><img src="/assets/sea-foos/sea-02.png"
                        alt="Seafood Delight" class="h-40 object-contain" />
                    <p class="font-semibold mt-2">Seafood Delight</p>
                </div>
            </div>
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
                    <td class="relative flex items-center gap-2 text-left py-2">93. Shrimp w. Lobster Sauce</td>
                    <td class="text-left">龙虾酱虾</td>
                    <td>$5.75</td>
                    <td>$9.50</td>
                </tr>
                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                    <td class="relative flex items-center gap-2 text-left py-2">94. Shrimp w. Broccoli</td>
                    <td class="text-left">虾仁西兰花</td>
                    <td>$5.75</td>
                    <td>$9.50</td>
                </tr>
                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                    <td class="relative flex items-center gap-2 text-left py-2">95. Shrimp w. Chinese Veg</td>
                    <td class="text-left">虾仁炒蔬菜</td>
                    <td>$5.75</td>
                    <td>$9.50</td>
                </tr>
                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                    <td class="relative flex items-center gap-2 text-left py-2">96. Shrimp w. Pepper &amp; Tomato</td>
                    <td class="text-left">辣椒番茄虾</td>
                    <td>$5.75</td>
                    <td>$9.50</td>
                </tr>
                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                    <td class="relative flex items-center gap-2 text-left py-2">97. Shrimp w. Black Bean Sauce</td>
                    <td class="text-left">豉汁虾</td>
                    <td>$5.75</td>
                    <td>$9.50</td>
                </tr>
                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                    <td class="relative flex items-center gap-2 text-left py-2"><img src="../assets/spicy.png"
                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />98. Hot &amp; Spicy Shrimp</td>
                    <td class="text-left">香辣虾</td>
                    <td>-</td>
                    <td>$9.50</td>
                </tr>
                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                    <td class="relative flex items-center gap-2 text-left py-2"><img src="../assets/spicy.png"
                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />99. Hunan Shrimp</td>
                    <td class="text-left">湖南虾</td>
                    <td>-</td>
                    <td>$9.50</td>
                </tr>
                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                    <td class="relative flex items-center gap-2 text-left py-2"><img src="../assets/spicy.png"
                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />100. Szechuan Shrimp</td>
                    <td class="text-left">四川虾</td>
                    <td>-</td>
                    <td>$9.50</td>
                </tr>
                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                    <td class="relative flex items-center gap-2 text-left py-2">101. Curry Shrimp</td>
                    <td class="text-left">咖喱虾</td>
                    <td>-</td>
                    <td>$9.50</td>
                </tr>
                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                    <td class="relative flex items-center gap-2 text-left py-2"><img src="../assets/spicy.png"
                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />102. Shrimp &amp; Scallop w. Garlic Sauce</td>
                    <td class="text-left">蒜蓉扇贝虾</td>
                    <td>-</td>
                    <td>$9.50</td>
                </tr>
                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                    <td class="relative flex items-center gap-2 text-left py-2"><img src="../assets/spicy.png"
                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />103. Scallop w. Hunan Sauce</td>
                    <td class="text-left">湖南风味扇贝</td>
                    <td>-</td>
                    <td>$9.50</td>
                </tr>
                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                    <td class="relative flex items-center gap-2 text-left py-2">104. Fresh Scallops w. Broccoli</td>
                    <td class="text-left">鲜扇贝配西兰花</td>
                    <td>-</td>
                    <td>$9.50</td>
                </tr>
                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                    <td class="relative flex items-center gap-2 text-left py-2"><img src="../assets/spicy.png"
                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />105. Kung Po Shrimp</td>
                    <td class="text-left">宫保虾</td>
                    <td>-</td>
                    <td>$9.50</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
<script>
export default {
    name: "Seafood"
}
</script>