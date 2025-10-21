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
                { id: 'C1', name: 'CHICKEN OR PORK CHOW MEIN', chinese: '鸡肉或猪肉炒面', price: '$7.55' },
                { id: 'C2', name: 'CHICKEN OR PORK EGG FOO YOUNG', chinese: '鸡肉或猪肉芙蓉蛋', price: '$7.55' },
                { id: 'C3', name: 'CHICKEN OR PORK LO MEIN', chinese: '鸡肉或猪肉捞面', price: '$7.55' },
                { id: 'C4', name: 'SWEET & SOUR CHICKEN OR PORK', chinese: '糖醋鸡或糖醋猪肉', price: '$7.55' },
                { id: 'C5', name: 'SWEET & SOUR SHRIMP', chinese: '糖醋虾', price: '$7.95' },
                { id: 'C6', name: 'BARBECUED SPARE RIBS', chinese: '烤排骨', price: '$7.95' },
                { id: 'C7', name: 'BONELESS RIBS', chinese: '无骨排骨', price: '$7.95' },
                { id: 'C8', name: 'PEPPER STEAK W. ONION', chinese: '洋葱胡椒牛排', price: '$7.75' },
                { id: 'C9', name: 'BEEF W. BROCCOLI', chinese: '西兰花牛肉', price: '$7.75' },
                { id: 'C10', name: 'CHICKEN W. BROCCOLI', chinese: '西兰花鸡肉', price: '$7.75' },
                { id: 'C11', name: 'SHRIMP W. BROCCOLI', chinese: '虾仁西兰花', price: '$7.95' },
                { id: 'C12', name: 'ROAST PORK W. BROCCOLI', chinese: '西兰花烤猪肉', price: '$7.55' },
                { id: 'C13', name: 'SHRIMP W. LOBSTER SAUCE', chinese: '龙虾酱虾', price: '$7.95' },
                { id: 'C14', name: 'MOO GOO GAI PAN', chinese: '蘑菇鸡片', price: '$7.55' },
                { id: 'C15', name: 'SHRIMP W. CHINESE VEGETABLES', chinese: '虾仁炒蔬菜', price: '$7.95' },
                { id: 'C16', name: 'CHICKEN W. MIX VEGETABLES', chinese: '鸡肉什锦蔬菜', price: '$7.55' },
                { id: 'C17', name: 'SESAME CHICKEN', chinese: '芝麻鸡', price: '$7.95' },
                { id: 'C18', name: 'GENERAL TSO\'S CHICKEN', chinese: '左宗棠鸡', price: '$7.95', spicy: true },
                { id: 'C19', name: 'ORANGE CHICKEN', chinese: '橙汁鸡', price: '$7.95' },
                { id: 'C20', name: 'HONEY CHICKEN', chinese: '蜜汁鸡', price: '$7.95' },
                { id: 'C21', name: 'KUNG PAO CHICKEN', chinese: '宫保鸡丁', price: '$7.95', spicy: true },
                { id: 'C22', name: 'CASHEW CHICKEN', chinese: '腰果鸡丁', price: '$7.95' },
                { id: 'C23', name: 'BEEF WITH GARLIC SAUCE', chinese: '鱼香牛肉', price: '$7.95', spicy: true },
                { id: 'C24', name: 'MONGOLIAN BEEF', chinese: '蒙古牛肉', price: '$7.95', spicy: true }
        ]
        };
    },
    computed: {
        currentComboItems() {
            return this.showAllComboItems ? this.comboItems : this.comboItems.slice(0, 16);
            
        }
    },
    methods: {
        handleToggleComboItems() {
            this.showAllComboItems = !this.showAllComboItems;
        }
    }
}
</script>
            