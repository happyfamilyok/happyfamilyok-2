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
}

</script>

<style>

</style>