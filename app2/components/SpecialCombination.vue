<template>
    <div>
           <div class="relative w-full mx-auto py-8 max-w-[1330px]" id="special-combination-platter">
                    <div class="text-center mb-8">
                        <h2 class="text-2xl font-bold tracking-wide uppercase font-viola">SPECIAL COMBINATION PLATTER</h2>
                        <p class="text-lg text-gray-600">(Each plate served w. egg roll or egg drop or hot &amp; sour soup)</p>
                        <p class="text-lg text-gray-600">特色拼盘</p>
                    </div>
                    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6" role="menu" aria-label="Special Combination Platter Menu">
                        <div v-for="item in currentComboItems" 
                             :key="item.id"
                             class="flex justify-between items-start border-b border-gray-300 py-2 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                             role="menuitem" 
                             tabindex="0" 
                             @keydown.enter="() => {}" 
                             @keydown.space.prevent="() => {}">
                            <div>
                                <span class="font-semibold mr-2">{{ item.id }}</span>
                                <span class="font-medium">{{ item.name }}</span>
                                <span v-if="item.spicy" class="ml-2 text-red-600 font-bold">🌶️</span>
                                <p class="text-gray-700 text-sm">{{ item.chinese }}</p>
                            </div>
                            <div class="font-semibold">{{ item.price }}</div>
                        </div>
                    </div>
                    
                    <!-- Debug display for Special Combo Platter -->
                    <div class="bg-yellow-100 p-2 rounded text-xs text-center mt-4 border">
                        <div>showAllComboItems = {{ showAllComboItems }}</div>
                        <div>currentComboItems.length = {{ currentComboItems.length }}</div>
                    </div>
                    
                    <div class="text-center mt-6">
                        <button 
                            @click="handleToggleComboItems"
                            class="text-red-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:rounded px-2 py-1">
                            {{ showAllComboItems ? 'SHOW LESS' : 'LOAD MORE' }}
                        </button>
                        <div class="text-black text-lg">{{ showAllComboItems ? '显示更少' : '加载更多' }}</div>
                    </div><img src="/assets/special-platter/special.png" alt="Special Platter"
                        class="absolute right-0 bottom-[-60px] transform -translate-y-1/2 h-auto" />
                </div>
    </div>
</template>
<script>
export default {
    name: "SpecialCombinations",
    data() {
        return {
            showAllComboItems: false,
            comboItems: [
                { id: 'S1', name: 'Chicken Chow Mein', chinese: '鸡炒面', price: '$7.95', spicy: false },
                { id: 'S2', name: 'Beef with Broccoli', chinese: '西兰花牛肉', price: '$8.55', spicy: false },
        ]
        };
    },
    computed: {
        currentComboItems() {
            return this.showAllComboItems ? this.comboItems : this.comboItems.slice(0,
    2);
            
        }
    },
    methods: {
        handleToggleComboItems() {
            this.showAllComboItems = !this.showAllComboItems;
        }
    }
}
</script>
            