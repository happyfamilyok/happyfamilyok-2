<template>
    <div>
  <div id="lunch-special" class="relative w-full mx-auto shadow-lg overflow-hidden">
                    <div class="relative w-full flex justify-center items-center bg-black">
                        <div class="bg-gradient-to-t from-[#A7B0B7] via-[#D7D7D7] to-[#8D7C96] w-[90%] sm:w-[95%] h-[30px] sm:h-[40px] relative flex justify-center items-center rounded-none my-4">
                        </div>
                    </div>
                    <div class="relative bg-[#8b8b6b] p-6">
                        <div class="relative top-0 left-5"><img src="/assets/lunch-special/download (4).png"
                                alt="Sesame Chicken" class="h-36 object-contain rounded-lg " />
                            <h2 class="absolute text-center text-3xl font-light text-white mb-2">Sesame Chicken</h2>
                        </div>
                        <div
                            class="absolute top-[-20px] right-[-20px] w-40 h-40 bg-gradient-to-b from-[#CED249] via-[#889839] via-[#5A7233] to-[#2C4C2C] text-white font-bold rounded-full flex flex-col items-center justify-center rotate-[-10deg] shadow-lg starburst">
                            <span class="text-md font-viola text-black text-capitalize">1 can soda</span><span
                                class="text-4xl font-viola text-white [-webkit-text-stroke:2px_red]">FREE</span></div>
                        <h2 class="text-center text-3xl font-light text-global-3 mb-2 font-viola">LUNCH SPECIAL</h2>
                        <p class="text-center text-sm text-white">Served Every Day 11:00am - 3:00pm - All Items Served
                            w. Fried Rice, Wonton <br />or Egg Drop or Hot &amp; Sour Soup or Egg Roll or Crispy Noodle
                        </p>
                        <p class="text-center text-sm text-black mt-2">每日供应，上午11点至下午3点。所有菜品均配炒饭、蟹肉馄饨、蛋花汤、蛋卷或脆面。</p>
                        <!-- Simplified single menu items container -->
                        <div class="mt-6 grid grid-cols-2 gap-4">
                            <div v-for="item in currentLunchItems" 
                                 :key="item.id"
                                 class="flex justify-between items-center bg-white/30 backdrop-blur-md rounded-2xl px-4 py-3 w-full shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                 tabindex="0" 
                                 @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                 @keydown.space.prevent="$event.target.click()" 
                                 role="menuitem">
                                <div class="flex flex-col">
                                    <p class="text-sm font-bold text-gray-900 text-center flex items-center gap-2">
                                        {{ item.id }}. {{ item.name }} {{ item.price }}
                                    </p>
                                    <p class="text-sm text-black mt-1 text-center">{{ item.chinese }}</p>
                                </div>
                                <img v-if="item.spicy" src="../assets/spicy.png" alt="spicy" class="h-15 object-cover rounded-lg" />
                            </div>
                        </div>
                        <div class="w-full flex justify-center items-center py-6">
                            <!-- Debug info - temporary -->
                            <div class="mb-4 text-center text-white text-sm">
                                Debug: showAllLunchItems = {{ showAllLunchItems }}, 
                                currentLunchItems.length = {{ currentLunchItems.length }}
                            </div>
                            <button
                                @click.stop="handleToggleLunchItems"
                                class="flex flex-col items-center text-center cursor-pointer transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2 rounded-lg"
                                tabindex="0"
                                @keydown.enter.prevent="handleToggleLunchItems"
                                @keydown.space.prevent="handleToggleLunchItems"
                                role="button"
                                type="button"
                                id="lunch-toggle-btn"
                                :aria-label="showAllLunchItems ? 'Show fewer lunch items' : 'Show more lunch items'">
                                <span class="text-white font-semibold tracking-wide">
                                    {{ showAllLunchItems ? 'SHOW LESS' : 'LOAD MORE' }}
                                </span>
                                <span class="text-black font-medium mt-1">
                                    {{ showAllLunchItems ? '显示更少' : '加载更多' }}
                                </span>
                            </button>
                        </div>
                  </div>
                    <!-- Second gradient bar at the end of lunch special section -->
                  <div class="bg-gradient-to-t from-[#A7B0B7] via-[#D7D7D7] to-[#8D7C96] w-[90%] sm:w-[95%] h-[30px] sm:h-[40px] relative flex justify-center items-center rounded-none my-4 mx-auto"></div>
                </div>
    </div>
</template>
<script>
export default {
    name: "LunchSpecial",
    data() {
        return {
            showAllLunchItems: false,
            LunchItems: [
            { id: 'L1', name: 'Chicken or Roast Pork Chow Mein', chinese: '雞或叉燒炒麵', price: '$5.50' },
            { id: 'L2', name: 'Shrimp or Beef Chow Mein', chinese: '蝦或牛炒麵', price: '$5.50' },
            { id: 'L3', name: 'Chicken or Roast Pork Lo Mein', chinese: '雞或叉燒撈麵', price: '$5.50' },
            { id: 'L4', name: 'Shrimp or Beef Lo Mein', chinese: '蝦或牛撈麵', price: '$5.50' },
            { id: 'L5', name: 'Beef With Broccoli', chinese: '芥蘭牛', price: '$5.50' },
            { id: 'L6', name: 'Chicken With Broccoli', chinese: '芥蘭雞', price: '$5.50' },
            { id: 'L7', name: 'Shrimp With Broccoli', chinese: '芥蘭蝦', price: '$5.50' },
            { id: 'L8', name: 'Roast Pork With Broccoli', chinese: '芥蘭叉燒', price: '$5.50' },
            { id: 'L9', name: 'Pepper Steak With Onion', chinese: '青椒牛', price: '$5.50' },
            { id: 'L10', name: 'Roast Pork With Chinese Vegs', chinese: '叉燒炒菜', price: '$5.50' },
            { id: 'L11', name: 'Moo Goo Gai Pan', chinese: '蘑菇雞', price: '$5.50' },
            { id: 'L12', name: 'Shrimp With Chinese Vegs', chinese: '蝦炒菜', price: '$5.50' },
            { id: 'L13', name: 'Beef With Chinese Vegs', chinese: '牛炒菜', price: '$5.50' },
            { id: 'L14', name: 'Sweet & Sour Chicken or Pork', chinese: '甜酸雞或豬', price: '$5.50' },
            { id: 'L15', name: 'Shrimp With Lobster Sauce', chinese: '龍蝦汁蝦', price: '$5.50' },
            { id: 'L16', name: 'Mixed Vegs With Brown Sauce', chinese: '什錦菜', price: '$5.50' },
            { id: 'L17', name: 'Shrimp With Cashew Nuts', chinese: '腰果蝦', price: '$5.50' },
            { id: 'L18', name: 'Chicken With Cashew Nuts', chinese: '腰果雞', price: '$5.50' },
            { id: 'L19', name: 'Sesame Chicken', chinese: '芝麻雞', price: '$5.50' },
            { id: 'L20', name: 'General Tso\'s Chicken', chinese: '左宗棠雞', price: '$5.50', spicy: true },
            { id: 'L21', name: 'Beef With Garlic Sauce', chinese: '魚香牛', price: '$5.50', spicy: true },
            { id: 'L22', name: 'Chicken With Garlic Sauce', chinese: '魚香雞', price: '$5.50', spicy: true },
            { id: 'L23', name: 'Shrimp With Garlic Sauce', chinese: '魚香蝦', price: '$5.50', spicy: true },
            { id: 'L24', name: 'Broccoli With Garlic Sauce', chinese: '魚香芥蘭', price: '$5.50', spicy: true },
            { id: 'L25', name: 'Kung Po Chicken', chinese: '宮保雞', price: '$5.50', spicy: true },
            { id: 'L26', name: 'Szechuan Beef', chinese: '四川牛', price: '$5.50', spicy: true },
            { id: 'L27', name: 'Szechuan Chicken', chinese: '四川雞', price: '$5.50', spicy: true },
            { id: 'L28', name: 'Szechuan Shrimp', chinese: '四川蝦', price: '$5.50', spicy: true },
            { id: 'L29', name: 'Hunan Beef', chinese: '湖南牛', price: '$5.50', spicy: true },
            { id: 'L30', name: 'Hunan Chicken', chinese: '湖南雞', price: '$5.50', spicy: true },
            { id: 'L31', name: 'Hunan Shrimp', chinese: '湖南蝦', price: '$5.50', spicy: true },
            { id: 'L32', name: 'Mongolian Chicken', chinese: '蒙古雞', price: '$5.50', spicy: true },
            { id: 'L33', name: 'Mongolian Beef', chinese: '蒙古牛', price: '$5.50', spicy: true },
            { id: 'L34', name: 'Boneless Spare Ribs', chinese: '無骨排骨', price: '$5.50' }
        ]
        };
    },
    computed: {
        currentLunchItems() {
            return this.showAllLunchItems ? this.LunchItems : this.LunchItems.slice(0, 16);
            
        }
    },
    methods: {
        handleToggleLunchItems() {
            this.showAllLunchItems = !this.showAllLunchItems;
        }
    }
}
</script>

<style>

</style>