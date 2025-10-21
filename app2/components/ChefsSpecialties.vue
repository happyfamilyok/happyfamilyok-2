<template>
    <div>
        <div class="w-full bg-white p-6 rounded-md my-8 max-w-[1330px] mx-auto" id="chef-specialties">
                    <div class="text-center">
                        <h1 class="text-3xl tracking-wider font-viola">CHEF&#x27;S SPECIALTIES</h1>
                        <p class="text-lg mt-1">厨师特色菜</p>
                    </div>
                    <div class="w-11/12 flex flex-col items-start justify-center" role="menu" aria-label="Chef's Specialties Menu">
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                             role="menuitem" 
                             tabindex="0" 
                             @keydown.enter="() => {}" 
                             @keydown.space.prevent="() => {}"
                             aria-label="H1 Happy Family - $11.50">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H1. HAPPY FAMILY</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Crab Meat, Jumbo Shrimp, Beef, Chicken, Pork, Straw Mushroom, Baby Corn, Snow Pear, Carrot, Green Pepper &amp; Broccoli in House Special Sauce</p>
                                <p class="mt-2 text-base">蟹肉、大虾、牛肉、鸡肉、猪肉、草菇、小玉米、荷兰豆、胡萝卜、青椒和西兰花，配以店内特制酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-sm text-gray-600">均码 ORDER</p>
                                <p class="text-lg font-bold">$11.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                             role="menuitem" 
                             tabindex="0" 
                             @keydown.enter="() => {}" 
                             @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-red-600"><img
                                        src="../assets/spicy.png" alt="spicy"
                                        class="absolute left-[-45px] h-15 object-contain" />H2. Kung Po Delight</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Shrimp &amp; Chicken Stir-Fried Within A
                                    Rich Brown Sauce And Green Pepper, And Peanuts</p>
                                <p class="mt-2 text-base">虾和鸡肉在浓郁的棕色酱汁中翻炒，配上青椒和花生</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$9.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                             role="menuitem" 
                             tabindex="0" 
                             @keydown.enter="() => {}" 
                             @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H3. Four Seasons</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Jumbo Shrimp, Beef, Chicken Pork w. Mix Vegetables In House Special Sauce</p>
                                <p class="mt-2 text-base">大虾、牛肉、鸡肉、猪肉和什锦蔬菜，佐以店内特制酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$10.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H4. Triple Delight</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Jumbo Shrimp, Beef, Chicken w. Mix Chinese Vegetables In House Special Sauce</p>
                                <p class="mt-2 text-base">大虾、牛肉、鸡肉和什锦蔬菜，佐以店内特制酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$10.25</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H5. Fresh Scallops With Beef</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Fresh Scallops Slices Beef W. Mix Vegetables In House Special Sauce</p>
                                <p class="mt-2 text-base">新鲜扇贝、牛肉片、什锦蔬菜，佐以店内特制酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$10.25</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H6. Seafood Delight</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Jumbo Shrimp, Fresh Scallops, Crab Meat
                                    W. Straw Mushrooms, Snow Peas, Baby Corn, Carrots, Green Pepper &amp; Broccoli In
                                    Cantonese Sauce</p>
                                <p class="mt-2 text-base">大虾、新鲜扇贝、蟹肉、草菇、荷兰豆、小玉米、胡萝卜、青椒和西兰花，配粤式酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$11.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-red-600"><img
                                        src="../assets/spicy.png" alt="spicy"
                                        class="absolute left-[-45px] h-15 object-contain" />H7. Dragon Meets/(Mixed) Phoenix</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">General Tso's Chicken W. Hot &amp; Spicy Shrimp</p>
                                <p class="mt-2 text-base">左宗棠鸡配香辣虾</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$9.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-red-600"><img
                                        src="../assets/spicy.png" alt="spicy"
                                        class="absolute left-[-45px] h-15 object-contain" />H8. Double Delight W. Garlic Sauce</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Shrimp Scallops W. Mixed Vegetable &amp; Green Pepper</p>
                                <p class="mt-2 text-base">虾仁扇贝配什锦蔬菜和青椒</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$10.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-red-600"><img
                                        src="../assets/spicy.png" alt="spicy"
                                        class="absolute left-[-45px] h-15 object-contain" />H9. Triple Delight Hunan Style</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Chicken, Beef, Shrimp W. Mixed Vegetable
                                    &amp; Green Pepper In Black Bean Kung Po Sauce</p>
                                <p class="mt-2 text-base">鸡肉、牛肉、虾仁、什锦蔬菜和青椒，佐以黑豆宫保酱</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$10.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H10. Tung Ting Shrimp</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Prawn &amp; Mixed Vegetable In Egg White Sauce</p>
                                <p class="mt-2 text-base">虾仁什锦蔬菜蛋清酱</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">10.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H11. Sesame Chicken</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide"></p>
                                <p class="mt-2 text-base">芝麻鸡</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$8.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-red-600"><img
                                        src="../assets/spicy.png" alt="spicy"
                                        class="absolute left-[-45px] h-15 object-contain" />H12. Orange Flavored Chicken</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide"></p>
                                <p class="mt-2 text-base">橙味鸡</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$8.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-red-600"><img
                                        src="../assets/spicy.png" alt="spicy"
                                        class="absolute left-[-45px] h-15 object-contain" />H13. General Tso's Chicken</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide"></p>
                                <p class="mt-2 text-base">左宗棠鸡</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$8.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H14. Sesame Bean Curd</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide"></p>
                                <p class="mt-2 text-base">芝麻豆腐</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$8.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H15. Hawaii Chicken</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide"></p>
                                <p class="mt-2 text-base">夏威夷鸡</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$8.95</p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
</template>
<script>
export default {
    name: "ChefsSpecialties"
}
</script>