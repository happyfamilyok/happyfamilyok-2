<template>
  <div>
    <div class="w-full bg-[#d1f8ff] min-h-screen">
        <div class="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center">
                <header
                    class="fixed top-4 left-1/2 w-11/12 max-w-[1440px] bg-global-5 shadow-md border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] rounded-[50px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-[26px] z-50 transition-all duration-300 backdrop-blur-md navbar-center">
                    <div class="w-full max-w-[1440px] mx-auto relative">
                        <div class="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
                            <div class="flex-shrink-0">
                                <div @click="navigateToHome" 
                                     class="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity duration-200">
                                    <img src="/assets/mapkit/icon.png" 
                                         alt="Happy Family Logo" 
                                         class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain" />
                                    <h1 class="text-[12px] sm:text-[14px] lg:text-[16px] font-wonton font-normal text-global-text-4 text-center mt-1 hover:text-global-1 transition-colors duration-200">
                                        Happy Family
                                    </h1>
                                </div>
                            </div><button @click="toggleMobileMenu" class="block lg:hidden p-2" aria-label="Toggle menu"><svg
                                    class="w-6 h-6 text-global-1 transition-transform duration-200" :class="{ 'rotate-90': isMobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg></button>
                            <nav class="hidden lg:block w-full lg:w-auto">
                                <div class="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mr-0 lg:mr-[20px]">
                                    <div class="flex flex-col lg:flex-row items-center gap-4 lg:gap-[32px]"><a
                                            href="#kids-menu"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">KIDS
                                                MENU</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">儿童菜单</span></a><a
                                            href="#lunch-special"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">LUNCH
                                                SPECIAL</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">午餐特价</span></a><a
                                            href="#appetizers"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">APPETIZERS</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">开胃菜</span></a><a
                                            href="#soup"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">SOUP</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">汤</span></a><a
                                            href="#fried-rice"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">FRIED
                                                RICE</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">炒饭</span></a><a
                                            href="#chow-mein"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">CHOW
                                                MEIN</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">炒面</span></a><a
                                            href="#lo-mein"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">LO
                                                MEIN</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">捞面</span></a>
                                    </div>
                                    <button @click="showAllMenu"
                                        class="flex flex-col items-center lg:items-start text-center lg:text-left cursor-pointer"><span
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-4 transition-colors duration-200 uppercase">VIEW
                                            ALL MENU</span><span
                                            class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-4 transition-colors duration-200">查看所有菜单</span></button>
                                    <NuxtLink to="/order" class="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50">ORDER ONLINE <i class="fa-solid fa-arrow-right"></i></NuxtLink>                               
                                </div>
                            </nav>
                            <!-- Mobile Navigation Menu -->
                            <nav v-show="isMobileMenuOpen" class="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 mx-4 z-50 transition-all duration-300 animate-in slide-in-from-top-2">
                                <div class="p-6">
                                    <div class="flex flex-col gap-4">
                                        <a @click="closeMobileMenu" href="#kids-menu" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">KIDS MENU</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">儿童菜单</span>
                                        </a>
                                        <a @click="closeMobileMenu" href="#lunch-special" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">LUNCH SPECIAL</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">午餐特价</span>
                                        </a>
                                        <a @click="closeMobileMenu" href="#appetizers" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">APPETIZERS</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">开胃菜</span>
                                        </a>
                                        <a @click="closeMobileMenu" href="#soup" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">SOUP</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">汤</span>
                                        </a>
                                        <a @click="closeMobileMenu" href="#fried-rice" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">FRIED RICE</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">炒饭</span>
                                        </a>
                                        <a @click="closeMobileMenu" href="#chow-mein" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">CHOW MEIN</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">炒面</span>
                                        </a>
                                        <a @click="closeMobileMenu" href="#lo-mein" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">LO MEIN</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">捞面</span>
                                        </a>
                                        <button @click="showAllMenu" class="flex flex-col items-center text-center gap-1 py-4 px-4 bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 rounded-lg transition-colors duration-200 border border-red-200/50 cursor-pointer">
                                            <span class="text-[14px] font-roboto font-medium text-red-600 hover:text-red-700 uppercase">VIEW ALL MENU</span>
                                            <span class="text-[12px] font-roboto font-normal text-red-600/80 hover:text-red-700">查看所有菜单</span>
                                        </button>
                                        <NuxtLink to="/order" class="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50">ORDER ONLINE <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                
                <!-- All Menu Sections Card View -->
                <div v-if="showAllMenuSections" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" @click="showAllMenuSections = false">
                    <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto" @click.stop>
                        <div class="p-6 border-b border-gray-200 flex justify-between items-center">
                            <h2 class="text-2xl font-bold text-gray-800 font-viola">ALL MENU SECTIONS</h2>
                            <button @click="showAllMenuSections = false" class="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                        </div>
                        <div class="p-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div 
                                    v-for="section in menuSections" 
                                    :key="section.id"
                                    @click="navigateToSection(section.id)"
                                    class="bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg border border-red-100 hover:border-red-200"
                                >
                                    <div class="text-center">
                                        <h3 class="text-lg font-semibold text-gray-800 font-roboto uppercase">{{ section.title }}</h3>
                                        <p class="text-sm text-gray-600 mt-1">{{ section.subtitle }}</p>
                                        <div class="mt-4 text-red-600 text-sm font-medium">点击查看 Click to view →</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Mobile menu overlay -->
                <div v-if="isMobileMenuOpen" @click="closeMobileMenu" class="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"></div>

            <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] pt-32">
                <div id="kids-menu"
                    class="relative w-full bg-white min-h-[500px] flex flex-col items-center justify-center p-8">
                    <div class="w-full text-left mb-4">
                        <h2 class="text-4xl font-bold text-black font-viola">KIDS MENUS <span
                                class="ml-4 text-2xl font-normal c">儿童菜单</span></h2>
                        <p class="text-red-600 italic text-xl mt-2">(served w. french fries or fried rice)</p>
                        <p class="text-black mt-1">(配薯条或炒饭)</p>
                    </div>
                    <div class="absolute sm:top-20 top-35 sm:right-24 right-2">
                        <div class="relative">
                            <div
                                class="w-28 h-28 bg-yellow-400 text-pink-700 font-bold text-xl flex items-center justify-center rounded-full shadow-lg starburst rotate-[15deg]">
                                $5.50</div><span
                                class="absolute top-1/2 -left-10 -translate-y-1/2 text-black text-lg">价格</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-y-12 mt-12 max-w-5xl w-full" role="menu" aria-label="Kids Menu Items">
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem" aria-label="K1 Chicken Nuggets - $5.50">
                            <p class="font-bold text-lg text-black">K1. Chicken Nuggets (8)</p>
                            <p class="text-black text-lg">炸鸡粒</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K2. Fried Fish (2)</p>
                            <p class="text-black text-lg">炸鱼</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K3. Fried Scallops (8)</p>
                            <p class="text-black text-lg">炸干贝</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K4. Fried Chicken Wings (3)</p>
                            <p class="text-black text-lg">炸鸡翅</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K5. Fried Baby Shrimp (8)</p>
                            <p class="text-black text-lg">炸虾</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K6. Fried Squid (12)</p>
                            <p class="text-black text-lg">炸鱿鱼</p>
                        </div>
                    </div>
                </div>
                <div class="relative w-full bg-white min-h-[500px] flex items-center justify-center">
                    <div class="absolute inset-0 opacity-20 bg-[url(&#x27;/bg-food.jpg&#x27;)] bg-cover bg-center">
                    </div>
                    <div class="relative w-full mx-auto p-8">
                        <h2 class="text-5xl font-bold italic text-black font-viola">Popular</h2>
                        <div class="flex items-center gap-2 mt-2"><span class="text-xl">ℹ️</span>
                            <p class="text-black text-md">Images shown for display only</p>
                        </div>
                        <div class="relative w-full h-[400px] mt-8">
                            <p class="text-black text-lg font-normal absolute top-4 left-12">General Tso’s Chicken</p>
                            <p class="text-black text-lg font-normal absolute top-4 left-1/2 -translate-x-1/2">Mixed
                                Vegetables</p>
                            <p class="text-black text-lg font-normal absolute top-4 right-16">Shrimp Lo Mein</p>
                            <p class="text-black text-lg font-normal absolute bottom-8 left-8">Steamed or Fried
                                Dumplings</p>
                            <p class="text-black text-lg font-normal absolute bottom-8 left-1/2 -translate-x-1/2">Fried
                                Fish w. French Fries</p>
                            <p class="text-black text-lg font-normal absolute bottom-8 right-12">Mongolian Beef</p>
                        </div>
                    </div>
                </div>
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
                                 @click="handleMenuItemClick($event, item.name)" @keydown.enter="handleMenuItemClick($event, item.name)" 
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
                <div id="appetizers" class="relative w-full bg-gradient-to-r from-[#9f9870] to-[#f3d59f] py-6">
                    <div class="flex justify-between items-center relative">
                        <div class="flex flex-col items-center w-1/3"><img src="/assets/appeziert/download (1).png"
                                alt="Pu Pu Platter" height="120" class="rounded-full object-contain" /><span
                                class="text-lg font-semibold mt-2">Pu Pu Platter</span></div>
                        <h2 class="text-3xl font-bold text-center font-viola">APPETIZERS</h2>
                        <div class="flex flex-col items-center w-1/3"><img src="/assets/appeziert/download (2).png"
                                alt="Fried Dumplings" height="120" class="rounded-full object-contain" /><span
                                class="text-lg font-semibold mt-2">Fried Dumplings</span></div>
                    </div>
                    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 px-2 sm:px-6">
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">1. Roast Pork Egg Roll (1pc)</span><span
                                class="text-sm">肉卷</span><span class="font-bold">$1.35</span></div>
                         <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">2. Shrimp Roll (1pc)</span><span class="text-sm">虾卷</span><span
                                class="font-bold">1.35</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">3. Spring Roll (1pc)</span><span class="text-sm">上海卷</span><span
                                class="font-bold">$1.35</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">3a. Fried Bread (10pc)</span><span class="text-sm">炸面包</span><span
                                class="font-bold">$3.96</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">4. French Fries</span><span class="text-sm">薯条</span><span
                                class="font-bold">$1.85</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">5. Crab Rangoon (8pc) (Cheese Wonton)</span><span
                                class="text-sm">蟹角八个</span><span class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">6. Fried Jumbo Shrimp (5pc)</span><span
                                class="text-sm">炸大虾五个</span><span class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">7. Shrimp Toast</span><span
                                class="text-sm">蝦吐司</span><span class="font-bold">$3.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">8. Fried or Steamed Dumplings (8pc)</span><span
                                class="text-sm">煎饺或水饺八个</span><span class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">9a. Barbecued Spare Ribs (Small)</span><span
                                class="text-sm">排骨小</span><span class="font-bold">$5.55</span></div>
<div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">9b. Barbecued Spare Ribs (Large)</span><span
                                class="text-sm">排骨大</span><span class="font-bold">$9.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">10a. Boneless Spare Ribs (Small)</span><span
                                class="text-sm">無骨排小</span><span class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">10b. Boneless Spare Ribs (Large)</span><span
                                class="text-sm">無骨排大</span><span class="font-bold">$9.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">11. Fried Baby Shrimp (15)</span><span class="text-sm">炸小球</span><span
                                class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">12. Chicken Sticks (5)</span><span class="text-sm">鸡肉条</span><span
                                class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">13. Fried Wonton (10)</span><span class="text-sm">炸雲吞</span><span
                                class="font-bold">$3.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">14. Sesame Ball (10)</span><span class="text-sm">炸芝麻球</span><span
                                class="font-bold">$5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">15. Beef Teriyaki (5)</span><span
                                class="text-sm">芝士馄饨</span><span class="font-bold">$6.85</span></div>
                        <!--<div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">16. Pu Pu Platter</span><span class="text-sm">資路盤</span><span
                                class="font-bold">$9.95</span></div>-->
                    </div>
                </div>
                <div id="soup" class="relative bg-gradient-to-r from-white to-amber-50 p-10">
                    <div class="text-center mb-6">
                        <h1 class="text-2xl font-serif">16. Pu Pu Platter $9.95 資路盤</h1>
                        <p class="text-red-700">6 Sweet &amp; Sour Chicken, 2 Chicken Stick, 2 BBQ Spare Ribs, 2 Egg
                            Roll, 2 Fantail Shrimp, 2 Shrimp Toast</p>
                        <p class="text-black">6 只糖醋鸡、2 串鸡饭、2 块烤排骨、2 个蛋卷、2 只扇尾虾、2 片虾多士</p>
                    </div>
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
                        <div id="fried-rice" class="flex-1 px-1 sm:px-4">
                            <h2 class="text-4xl text-black uppercase font-viola">FRIED RICE</h2>
                            <p class="text-xl">炒饭</p>
                            <div class="grid grid-cols-4 mt-4 font-medium text-center">
                                <div class="text-red-700"></div>
                                <div class="text-red-700"></div>
                                <div class="text-red-700">小 SM</div>
                                <div class="text-red-700">大 LG</div>
                            </div>
                            <div class="mt-3 w-full space-y-1">
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">26. Vegetable Fried Rice
                                    </div>
                                    <div>蔬菜炒饭</div>
                                    <div class="text-center">$4.25</div>
                                    <div class="text-center">$6.25</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">27. Roast Pork Fried Rice
                                    </div>
                                    <div>烤猪肉炒饭</div>
                                    <div class="text-center">$4.55</div>
                                    <div class="text-center">$6.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">28. Chicken Fried Rice</div>
                                    <div>鸡肉炒饭</div>
                                    <div class="text-center">$4.55</div>
                                    <div class="text-center">$6.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">29. Beef Fried Rice</div>
                                    <div>牛肉炒饭</div>
                                    <div class="text-center">$4.95</div>
                                    <div class="text-center">$7.55</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">30. Shrimp Fried Rice</div>
                                    <div>虾仁炒饭</div>
                                    <div class="text-center">$4.95</div>
                                    <div class="text-center">$7.55</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">31. Crab Meat Fried Rice</div>
                                    <div>蟹肉炒饭</div>
                                    <div class="text-center">$5.50</div>
                                    <div class="text-center">$7.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">32. House Special Fried Rice
                                        (CHICKEN, SHRIMP &amp; PORK)</div>
                                    <div>特色炒饭（鸡肉、虾和猪肉）</div>
                                    <div class="text-center">$5.50</div>
                                    <div class="text-center">$7.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">33. Ham Fried Rice</div>
                                    <div>火腿炒饭</div>
                                    <div class="text-center">$5.50</div>
                                    <div class="text-center">$7.95</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute right-20 top-16  text-center"><img
                            src="../assets/pupu-plater/pupu.png" alt="House Special Fried Rice"
                            class="h-full rounded-full object-contain" />
                        <p class="text-sm font-serif">House Special Fried Rice</p>
                    </div>
                </div>
                <div id="chow-mein"
                    class="w-full bg-[#fdf9f2] min-h-screen flex flex-col justify-center items-center gap-3">
                    <div class="w-11/12 px-6 py-10 bg-white/95 rounded-xl shadow-sm">
                        <h2 class="text-center text-3xl uppercase tracking-wide mb-1 font-viola">CHOW MEIN OR CHOP SUEY
                            (VEGETABLE)</h2>
                        <p class="text-center text-lg text-gray-800 mb-4">炒面或杂碎，什锦蔬菜，不是面条</p>
                        <p class="text-red-700 text-lg font-serif text-center mb-6">(w. White Rice &amp; Crispy Noodles)
                        </p>
                        <p class="text-center text-base text-gray-800 mb-6">配白米和脆面条</p>
                        <div class="flex justify-between items-center text-red-700 font-serif text-sm mb-2"><span
                                class="w-1/3"></span><span class="w-1/3 text-center">价格</span>
                            <div class="w-1/3 flex justify-end gap-12"><span>小 SM</span><span>大 LG</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">34. Vegetable Chow Mein or Chop Suey</div>
                            <div class="w-1/3 text-center text-black text-sm">蔬菜炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>$4.25</span><span>$6.25</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">35. Roast Pork Chow Mein or Chop Suey</div>
                            <div class="w-1/3 text-center text-black text-sm">烤猪肉炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>$4.55</span><span>$6.95</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">36. Chicken Chow Mein or Chop Suey</div>
                            <div class="w-1/3 text-center text-black text-sm">鸡肉炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>$4.55</span><span>$6.95</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">37. Beef Chow Mein or Chop Suey</div>
                            <div class="w-1/3 text-center text-black text-sm">牛肉炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>$4.95</span><span>$7.55</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">38. Shrimp Chow Mein or Chop Suey</div>
                            <div class="w-1/3 text-center text-black text-sm">虾炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>$4.95</span><span>$7.55</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">39. House Special Chow Mein or Chop Suey</div>
                            <div class="w-1/3 text-center text-black text-sm">本店特色炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>$5.50</span><span>$7.95</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">(CHICKEN, SHRIMP &amp; PORK)</div>
                            <div class="w-1/3 text-center text-black text-sm">鸡肉、虾和猪肉</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium"><span>-</span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-red-700 rounded-md py-3 px-6 flex items-center justify-center text-white font-viola text-lg w-11/12">
                        <img src="../assets/spicy.png" alt="spicy" class="h-15 object-cover rounded-lg " />HOT
                        AND SPICY</div>
                </div>
                <div id="lo-mein" class="bg-[#fdf9f2] h-auto py-10">
                    <div class="flex flex-wrap   justify-center gap-6 max-w-7xl mx-auto">
                        <div class="flex-1 px-4">
                            <h2 class="text-center text-2xl font-viola uppercase tracking-wide mb-3">LO MEIN
                                <!-- --> <span class="ml-1 font-sans">捞面</span></h2>
                            <div class="bg-white/90 rounded-2xl shadow-sm p-4 mb-6">
                                <div class="mb-2">
                                    <h3 class="text-red-700 font-serif text-lg uppercase">(Soft Noodles)</h3>
                                    <p class="text-black text-base">软面条</p>
                                </div>
                                <div class="flex justify-between text-red-700 font-serif text-sm mb-2">
                                    <span>小SM</span><span>大LG</span></div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">
                                        40. Vegetable Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">蔬菜捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$4.25</span><span>$6.25</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">41. Roast
                                        Pork Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">烤猪肉捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$4.55</span><span>$6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">42. Chicken
                                        Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">鸡肉捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$4.55</span><span>$6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">43. Beef
                                        Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">牛肉捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$4.95</span><span>$7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">44. Shrimp
                                        Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">虾捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$4.95</span><span>$7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">45. House Special Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">本店特色捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$5.50</span><span>$7.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">46. Crabmeat
                                        Lo Mein</div>
                                    <div class="text-black text-sm flex-1 text-center">蟹肉捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>$5.50</span><span>$7.95</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 px-4" id="chow-mai-fun">
                            <h2 class="text-center text-2xl font-viola uppercase tracking-wide mb-3">CHOW MAI FUN
                                <!-- --> <span class="ml-1 font-sans">炒面粉</span></h2>
                            <div class="bg-white/90 rounded-2xl shadow-sm p-4 mb-6">
                                <div class="mb-2">
                                    <h3 class="text-red-700 font-serif text-lg uppercase">(Rice Noodle)</h3>
                                    <p class="text-black text-base">炒面粉</p>
                                </div>
                                <div class="flex justify-between text-red-700 font-serif text-sm mb-2">
                                    <span>均码</span><span>ORDER</span></div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">
                                        47. Vegetable Chow Mai Fun</div>
                                    <div class="text-black text-sm flex-1 text-center">蔬菜炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$6.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">48. Roast Pork Chow Mai Fun</div>
                                    <div class="text-black text-sm flex-1 text-center">烤猪肉炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">49. Chicken Chow Mai Fun</div>
                                    <div class="text-black text-sm flex-1 text-center">鸡肉炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">50. Beef Chow Mai Fun</div>
                                    <div class="text-black text-sm flex-1 text-center">牛肉炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">51. Shrimp Chow Mai Fun</div>
                                    <div class="text-black text-sm flex-1 text-center">虾仁炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />52. Singapore Chow Mai Fun
                                    </div>
                                    <div class="text-black text-sm flex-1 text-center">新加坡炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">52a. House Special Chow Mai Fun</div>
                                    <div class="text-black text-sm flex-1 text-center">本店特色炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>7.95</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 px-4" id="egg-foo-young">
                            <h2 class="text-center text-2xl font-viola uppercase tracking-wide mb-3">EGG FOO YOUNG
                                <!-- --> <span class="ml-1 font-sans">芙蓉蛋</span></h2>
                            <div class="bg-white/90 rounded-2xl shadow-sm p-4 mb-6">
                                <div class="mb-2">
                                    <h3 class="text-red-700 font-serif text-lg uppercase">(W. White Rice)</h3>
                                    <p class="text-black text-base"></p>
                                </div>
                                <div class="flex justify-between text-red-700 font-serif text-sm mb-2">
                                    <span>均码</span><span>ORDER</span></div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">
                                        53. Vegetable Egg Foo Young</div>
                                    <div class="text-black text-sm flex-1 text-center">蔬菜芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">54. Roast Pork Egg Foo Young</div>
                                    <div class="text-black text-sm flex-1 text-center">烤猪肉芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.25</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">55. Chicken Egg Foo Young</div>
                                    <div class="text-black text-sm flex-1 text-center">鸡肉芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.25</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">56. Beef Egg Foo Young</div>
                                    <div class="text-black text-sm flex-1 text-center">牛肉芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">57. Shrimp Egg Foo Young</div>
                                    <div class="text-black text-sm flex-1 text-center">虾芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">58. House Special Egg Foo Young</div>
                                    <div class="text-black text-sm flex-1 text-center">本店特色芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>$7.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">
                                        (Chicken, Shrimp &amp; Pork)</div>
                                    <div class="text-black text-sm flex-1 text-center">鸡肉、虾和猪肉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- TODO: This section has collision when screen is small, need to fix it later -->
                <!--
                <div class="mx-auto w-full">
                    <div class="relative bg-black overflow-hidden shadow-lg mb-12">
                        <div class="relative w-full flex justify-center items-center">
                            <div
                                class="bg-gradient-to-t from-[#A7B0B7] via-[#D7D7D7] to-[#8D7C96] w-[90%] sm:w-[95%] h-[30px] sm:h-[40px] relative flex justify-center items-center rounded-none my-4">
                                <div
                                    class="absolute left-[-12px] top-[-8px] bottom-0 bg-gradient-to-t from-[#A7B0B7] via-[#D7D7D7] to-[#8D7C96] w-[18px] sm:w-[22px] h-[50px] border-l-1 border-gray-800">
                                </div>
                                <div
                                    class="absolute right-[-12px] top-[-8px] bottom-[0] bg-gradient-to-t from-[#A7B0B7] via-[#D7D7D7] to-[#8D7C96] w-[18px] sm:w-[22px] h-[50px] border-r-1 border-gray-800">
                                </div>
                                <div class="absolute -bottom-28 left-0"><img src="/assets/beef/download (1).png"
                                        alt="dish-left" class=" h-36 object-contain" />
                                    <h2 class="w-full absolute text-3xl font-bold top-[50%] left-[5%] text-[#FFFFFF]">
                                        Pepper Steak w. Onion</h2>
                                </div>
                                <div class="absolute -bottom-30 right-0"><img src="/assets/beef/download (2).png"
                                        alt="dish-right" class=" h-36 object-contain" />
                                    <h2 class="w-full text-3xl absolute top-[50%] right-[5%] font-bold text-[#FFFFFF]">
                                        Pepper Steak w. Onion</h2>
                                </div>
                            </div>
                        </div>
                        -->
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
                                        @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                        @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>59. Beef w. Broccoli</span></td>
                                        <td class="px-2 py-2">西兰花牛肉</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>60. Pepper Steak w. Onions</span></td>
                                        <td class="px-2 py-2">洋葱胡椒牛排</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>61. Beef w. Pepper &amp; Tomato</span></td>
                                        <td class="px-2 py-2">牛肉配辣椒和西红柿</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>62. Beef w. Chinese Vegs</span></td>
                                        <td class="px-2 py-2">牛肉配中式蔬菜</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>63. Beef w. Mixed Vegetables</span></td>
                                        <td class="px-2 py-2">什锦牛肉</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>64. Beef w. Mushrooms</span></td>
                                        <td class="px-2 py-2">蘑菇牛肉</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>65. Beef w. Black Bean Sauce</span></td>
                                        <td class="px-2 py-2">豉汁牛肉</td>
                                        <td class="px-2 py-2 text-center">$5.50</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>66. Hunan Beef</span></td>
                                        <td class="px-2 py-2">湖南牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>67. Szechuan Beef</span>
                                        </td>
                                        <td class="px-2 py-2">四川牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>68. Mongolian Beef</span></td>
                                        <td class="px-2 py-2">蒙古牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>69. Hot &amp; Spicy Beef</span></td>
                                        <td class="px-2 py-2">香辣牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>70. Kung Pao Beef</span></td>
                                        <td class="px-2 py-2">宫保牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>71. Curry Beef</span></td>
                                        <td class="px-2 py-2">咖喱牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">$8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
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
                        <div class="flex flex-col items-center">
                            <div
                                class="bg-[#f5f5d7] text-center py-4 text-red-700 font-semibold text-xl rounded-md mb-4 w-11/12">
                                <p>HOT AND SPICY</p>
                                <p class="text-black text-base mt-1">辛辣</p>
                            </div>
                        </div>
                        <div class="relative w-full flex justify-center items-center">
                            <div
                                class="bg-gradient-to-t from-[#A7B0B7] via-[#D7D7D7] to-[#8D7C96] w-[90%] sm:w-[95%] h-[30px] sm:h-[40px] relative flex justify-center items-center rounded-none my-4">
                                <div
                                    class="absolute left-[-12px] top-[-6px] bottom-0 bg-gradient-to-t from-[#A7B0B7] via-[#D7D7D7] to-[#8D7C96] w-[18px] sm:w-[22px] h-[50px] border-l-1 border-gray-800">
                                </div>
                                <div
                                    class="absolute right-[-12px] top-[-6px] bottom-0 bg-gradient-to-t from-[#A7B0B7] via-[#D7D7D7] to-[#8D7C96] w-[18px] sm:w-[22px] h-[50px] border-r-1 border-gray-800">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <div
                        class="bg-red-700 text-white text-center text-xl font-semibold font-viola mt-8 py-3 rounded-xl">
                        HOT AND SPICY <br /><span class="text-base">辛辣</span></div>
                </div>
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
                             @click="handleMenuItemClick($event, item.name)" @keydown.enter="handleMenuItemClick($event, item.name)" 
                             @keydown.space.prevent="$event.target.click()">
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
                <div class="w-full bg-white p-6 rounded-md my-8 max-w-[1330px] mx-auto" id="chef-specialties">
                    <div class="text-center">
                        <h1 class="text-3xl tracking-wider font-viola">CHEF&#x27;S SPECIALTIES</h1>
                        <p class="text-lg mt-1">厨师特色菜</p>
                    </div>
                    <div class="w-11/12 flex flex-col items-start justify-center" role="menu" aria-label="Chef's Specialties Menu">
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                             role="menuitem" 
                             tabindex="0" 
                             @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                             @keydown.space.prevent="$event.target.click()"
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
                             @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                             @keydown.space.prevent="$event.target.click()">
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
                             @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                             @keydown.space.prevent="$event.target.click()">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H3. Four Seasons</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Jumbo Shrimp, Beef, Chicken Pork w. Mix Vegetables In House Special Sauce</p>
                                <p class="mt-2 text-base">大虾、牛肉、鸡肉、猪肉和什锦蔬菜，佐以店内特制酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$10.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H4. Triple Delight</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Jumbo Shrimp, Beef, Chicken w. Mix Chinese Vegetables In House Special Sauce</p>
                                <p class="mt-2 text-base">大虾、牛肉、鸡肉和什锦蔬菜，佐以店内特制酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$10.25</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H5. Fresh Scallops With Beef</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Fresh Scallops Slices Beef W. Mix Vegetables In House Special Sauce</p>
                                <p class="mt-2 text-base">新鲜扇贝、牛肉片、什锦蔬菜，佐以店内特制酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$10.25</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
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
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
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
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
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
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
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
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H10. Tung Ting Shrimp</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">Prawn &amp; Mixed Vegetable In Egg White Sauce</p>
                                <p class="mt-2 text-base">虾仁什锦蔬菜蛋清酱</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">10.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H11. Sesame Chicken</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide"></p>
                                <p class="mt-2 text-base">芝麻鸡</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$8.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
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
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
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
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">H14. Sesame Bean Curd</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide"></p>
                                <p class="mt-2 text-base">芝麻豆腐</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">$8.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" @keydown.space.prevent="$event.target.click()">
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
                <div
                    class="flex flex-col lg:flex-row gap-4 lg:gap-[20px] w-full max-w-[1330px] mx-auto mb-[48px] sm:mb-[72px] lg:mb-[96px] px-4">
                    <div
                        class="flex flex-col gap-5 sm:gap-6 lg:gap-[28px] justify-start items-center w-full lg:flex-1 min-w-0" id="sweet-sour">
                        <div class="flex flex-col items-center">
                            <h3
                                class="text-[20px] sm:text-[24px] lg:text-[28px] font-viola font-normal leading-[24px] sm:leading-[28px] lg:leading-[33px] text-global-1 ">
                                SWEET &amp; SOUR</h3>
                                <!-- TODO: Image alt should be descriptive for accessibility -->
                            <h3
                                class="text-[18px] sm:text-[20px] lg:text-[22px] font-viola font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-global-1">
                                糖醋类</h3><img src="/assets/menu-platter/platter-01.png" alt="A platter of sweet and sour dishes"
                                class="h-50 object-cover rounded-lg " />
                        </div>
                        <div
                            class="w-full h-[435px] flex flex-row justify-start items-start bg-global-5 rounded-[32px] shadow-[0px_4px_32px_#888888ff] border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] p-4 sm:p-5 lg:p-[20px]">
                            <div
                                class="flex flex-col gap-4 sm:gap-5 lg:gap-[22px] justify-start items-start w-full mb-[38px] sm:mb-[57px] lg:mb-[76px]" role="menu" aria-label="Sweet & Sour Menu">
                                <div class="flex flex-row gap-1">
                                    <p
                                        class="text-[14px] sm:text-[16px] lg:text-[18px] font-viola font-normal leading-[17px] sm:leading-[19px] lg:leading-[21px] text-global-text-4">
                                        (w. White Rice)</p>
                                    <p
                                        class="text-[13px] sm:text-[15px] lg:text-[17px] font-viola font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-text-4">
                                        配白米饭</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            106. Sweet &amp; Sour Chicken $8.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        糖醋鸡</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            107. Sweet &amp; Sour Pork $8.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        糖醋猪肉</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            108. Sweet &amp; Sour Shrimp $8.95</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        糖醋虾</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            109. Sum Po <i>(Chicken, Shrimp and Pork)</i> $8.95</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        三宝（鸡肉、虾和猪肉）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Moo Shu Section -->
                    <div
                        class="flex flex-col gap-5 sm:gap-6 lg:gap-[28px] justify-start items-center w-full lg:flex-1 min-w-0" id="moo-shu">
                        <div class="flex flex-col items-center">
                            <h3
                                class="text-[20px] sm:text-[24px] lg:text-[28px] font-viola font-normal leading-[24px] sm:leading-[28px] lg:leading-[33px] text-global-1 ml-16 sm:ml-20 lg:ml-[94px]">
                                MOO SHU</h3>
                            <h3
                                class="text-[18px] sm:text-[20px] lg:text-[22px] font-viola font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-global-1">
                                木须类</h3>
                            <div class="h-50 sm:block hidden"></div>
                        </div>
                        <div
                            class="w-full h-[435px] flex flex-row justify-start items-start bg-global-5 rounded-[32px] shadow-[0px_4px_32px_#888888ff] border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] p-4 sm:p-5 lg:p-[20px]">
                            <div
                                class="flex flex-col gap-4 sm:gap-5 lg:gap-[22px] justify-start items-start w-full justify-center mb-[18px] sm:mb-[27px] lg:mb-[36px]" role="menu" aria-label="Moo Shu Menu">
                                <div class="flex flex-row gap-1">
                                    <p
                                        class="text-[14px] sm:text-[16px] lg:text-[18px] font-viola font-normal leading-[17px] sm:leading-[19px] lg:leading-[21px] text-global-text-4">
                                        (w. Rice &amp; Pancakes)</p>
                                    <p
                                        class="text-[13px] sm:text-[15px] lg:text-[17px] font-viola font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-text-4">
                                        配米饭和薄饼</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            110. Moo Shu Chicken $7.85</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        木须鸡</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            111. Moo Shu Beef $8.25</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        木须牛肉</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            112. Moo Shu Pork $7.85</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        木须猪肉</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            113. Moo Shu Shrimp $8.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        木须虾</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            114. House Special Moo Shu $8.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        本楼木须</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Vegetable Section -->
                    <div
                        class="flex flex-col gap-5 sm:gap-6 lg:gap-[28px] justify-start items-center w-full lg:flex-1 min-w-0" id="vegetables">
                        <div class="flex flex-col items-center">
                            <h3
                                class="text-[20px] sm:text-[24px] lg:text-[28px] font-viola font-normal leading-[24px] sm:leading-[28px] lg:leading-[33px] text-global-1 ">
                                VEGETABLE</h3>
                                <!-- FIXME: alt text needs to be discriptive-->
                            <h3
                                class="text-[18px] sm:text-[20px] lg:text-[22px] font-viola font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-global-1">
                                蔬菜类</h3><img src="/assets/menu-platter/platter-02.png" alt="A platter of assorted vegetables"
                                class="h-50 object-cover rounded-lg " />
                        </div>
                        <div
                            class="w-full h-[435px] flex flex-row justify-start items-start bg-global-5 rounded-[32px] shadow-[0px_4px_32px_#888888ff] border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] p-4 sm:p-5 lg:p-[20px]">
                            <div
                                class="flex flex-col gap-4 sm:gap-5 lg:gap-[22px] justify-start items-start w-full justify-center w-[62%] mt-1 lg:mt-[4px]" role="menu" aria-label="Vegetables Menu">
                                <div class="flex flex-row gap-1">
                                    <p
                                        class="text-[14px] sm:text-[16px] lg:text-[18px] font-viola font-normal leading-[17px] sm:leading-[19px] lg:leading-[21px] text-global-text-4">
                                        (w. White Rice)</p>
                                    <p
                                        class="text-[13px] sm:text-[15px] lg:text-[17px] font-viola font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-text-4">
                                        配白米饭</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            115. Vegetable Delight $7.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        素什锦</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2"><img src="../assets/spicy.png"
                                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            116. Broccoli w. Garlic Sauce $7.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        蒜蓉西兰花</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2"><img src="../assets/spicy.png"
                                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            117. Bean Curd Szechuan Style $7.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        四川豆腐</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2"><img src="../assets/spicy.png"
                                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            118. Ma Po Tofu $7.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        麻婆豆腐</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            119. Sauteed Snow Peas $7.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        清炒荷兰豆</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                                     @keydown.space.prevent="$event.target.click()">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            120. Sauteed String Bean $7.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        干煸四季豆</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- Coupons Section -->
            <div class="w-full bg-[#8B1C1B] flex flex-col items-center py-8 relative" id="coupons">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center px-4" role="menu" aria-label="Coupons">
                    <div class="relative bg-white border-3 border-dashed border-red-600 w-52 p-4 text-center hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                         role="menuitem" 
                         tabindex="0" 
                         @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                         @keydown.space.prevent="$event.target.click()"
                         aria-label="Free Egg Drop Soup, Hot & Sour Soup or Egg Rolls with purchase of $20 or more"><span
                            class="absolute -top-5 left-1/2 -translate-x-1/2 text-black text-sm">自由的</span>
                        <h2 class="text-red-600 text-4xl font-bold">FREE</h2>
                        <p class="text-red-600 mt-2 text-lg font-medium">Pt. Egg Drop Soup or Pt. Hot &amp; Sour Soup or
                            Egg Rolls</p>
                        <p class="mt-4 font-semibold">with Purchase of $20.00 or More</p>
                        <p class="mt-2 text-sm whitespace-pre-line">coupon cannot be combined w. other offer
                            lunch special not included</p>
                    </div>
                    <div class="relative bg-white border-3 border-dashed border-red-600 w-52 p-4 text-center hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                         role="menuitem" 
                         tabindex="0" 
                         @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                         @keydown.space.prevent="$event.target.click()"><span
                            class="absolute -top-5 left-1/2 -translate-x-1/2 text-black text-sm">自由的</span>
                        <h2 class="text-red-600 text-4xl font-bold">FREE</h2>
                        <p class="text-red-600 mt-2 text-lg font-medium">Qt. Egg Drop Soup or 2 Liter Soda or 2 Egg
                            Rolls</p>
                        <p class="mt-4 font-semibold">with Purchase of $30.00 or More</p>
                        <p class="mt-2 text-sm whitespace-pre-line">coupon cannot be combined w. other offer
                            lunch special not included</p>
                    </div>
                    <div class="relative bg-white border-3 border-dashed border-red-600 w-52 p-4 text-center hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                         role="menuitem" 
                         tabindex="0" 
                         @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                         @keydown.space.prevent="$event.target.click()"><span
                            class="absolute -top-5 left-1/2 -translate-x-1/2 text-black text-sm">自由的</span>
                        <h2 class="text-red-600 text-4xl font-bold">FREE</h2>
                        <p class="text-red-600 mt-2 text-lg font-medium">Qt. Sweet &amp; Sour Chicken</p>
                        <p class="mt-4 font-semibold">with Purchase of $40.00 or More</p>
                        <p class="mt-2 text-sm whitespace-pre-line">coupon cannot be combined w. other offer
                            lunch special not included</p>
                    </div>
                    <div class="relative bg-white border-3 border-dashed border-red-600 w-52 p-4 text-center hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                         role="menuitem" 
                         tabindex="0" 
                         @click="handleMenuItemClick" @keydown.enter="handleMenuItemClick" 
                         @keydown.space.prevent="$event.target.click()"><span
                            class="absolute -top-5 left-1/2 -translate-x-1/2 text-black text-sm">自由的</span>
                        <h2 class="text-red-600 text-4xl font-bold">FREE</h2>
                        <p class="text-red-600 mt-2 text-lg font-medium">Qt. Sesame Chicken or General Tso’s Chicken</p>
                        <p class="mt-4 font-semibold">with Purchase of $50.00 or More</p>
                        <p class="mt-2 text-sm whitespace-pre-line">coupon cannot be combined w. other offer
                            lunch special not included</p>
                    </div>
                </div>
                <div class="mt-6 text-white font-medium">优惠券不可与其他优惠同时使用，且不包含午餐特价</div>
            </div>
            <!--<div class="w-full px-0 bg-global-3 py-3 sm:py-4 lg:py-[18px] flex flex-row justify-center items-center bg-[#ffff00]">
                <p
                    class="text-[20px] sm:text-[24px] lg:text-[28px] font-viola font-normal leading-[24px] sm:leading-[28px] lg:leading-[33px] text-[#A02929] self-end">
                    Last updated: Aug 30, 2025.</p>
            </div>-->

<a id="floating-phone"
   href="tel:405-366-0786"
   class="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-600 transition-transform duration-200 z-[9999] animate-[pulseZoom_1.2s_ease-in-out_infinite]">
    <i class="fa-sharp fa-solid fa-phone text-2xl text-white"></i>
</a>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

useHead({
  title: 'Call-In Menu | Happy Family《家家樂》',
})

const isMobileMenuOpen = ref(false)

// Show all menu sections state
const showAllMenuSections = ref(false)

// Lunch Special items management
const showAllLunchItems = ref(false)
const initialLunchItemsCount = 16

// Special Combination Platter items management
const showAllComboItems = ref(false)
const initialComboItemsCount = 16

// Complete lunch special menu items
const lunchSpecialItems = [
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

// Complete special combination platter items (all items)
const specialComboItems = [
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

// Limited special combo items (C1-C16) - static array
const limitedComboItems = [
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
  { id: 'C16', name: 'CHICKEN W. MIX VEGETABLES', chinese: '鸡肉什锦蔬菜', price: '$7.55' }
]

// Limited lunch items array (L1-L16) - static array to avoid Vue DOM issues
const limitedLunchItems = [
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
]

// Computed property for current lunch items with error handling
const currentLunchItems = computed(() => {
  try {
    const result = showAllLunchItems.value ? lunchSpecialItems : limitedLunchItems
    console.log('currentLunchItems computed - showAllLunchItems:', showAllLunchItems.value, 'returning items count:', result.length)
    return result
  } catch (error) {
    console.error('Error in currentLunchItems computed:', error)
    return limitedLunchItems // fallback to limited items
  }
})

// Simple toggle function with defensive programming
const toggleLunchItems = () => {
  console.log('toggleLunchItems called - current state:', showAllLunchItems.value)
  try {
    const currentState = showAllLunchItems.value
    showAllLunchItems.value = !currentState
    console.log('toggleLunchItems - state changed from', currentState, 'to', showAllLunchItems.value)
  } catch (error) {
    console.error('Error toggling lunch items:', error)
    // Force reset to false if there's an error
    showAllLunchItems.value = false
  }
}

// Ultra-simplified handler 
const handleToggleLunchItems = (event) => {
  console.log('handleToggleLunchItems called - current state:', showAllLunchItems.value)
  try {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    toggleLunchItems()
    console.log('handleToggleLunchItems completed - new state:', showAllLunchItems.value)
  } catch (error) {
    console.error('Error in handleToggleLunchItems:', error)
  }
}

// Computed property for current combo items with error handling
const currentComboItems = computed(() => {
  try {
    const result = showAllComboItems.value ? specialComboItems : limitedComboItems
    console.log('currentComboItems computed - showAllComboItems:', showAllComboItems.value, 'returning items count:', result.length)
    return result
  } catch (error) {
    console.error('Error in currentComboItems computed:', error)
    return limitedComboItems // fallback to limited items
  }
})

// Simple toggle function for combo items
const toggleComboItems = () => {
  console.log('toggleComboItems called - current state:', showAllComboItems.value)
  try {
    const currentState = showAllComboItems.value
    showAllComboItems.value = !currentState
    console.log('toggleComboItems - state changed from', currentState, 'to', showAllComboItems.value)
  } catch (error) {
    console.error('Error toggling combo items:', error)
    // Force reset to false if there's an error
    showAllComboItems.value = false
  }
}

// Handler for combo items toggle
const handleToggleComboItems = (event) => {
  console.log('handleToggleComboItems called - current state:', showAllComboItems.value)
  try {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    toggleComboItems()
    console.log('handleToggleComboItems completed - new state:', showAllComboItems.value)
  } catch (error) {
    console.error('Error in handleToggleComboItems:', error)
  }
}

// Menu sections data - hardcoded for reliability and completeness
const menuSections = ref([
  { id: 'kids-menu', title: 'KIDS MENU', subtitle: '儿童菜单' },
  { id: 'lunch-special', title: 'LUNCH SPECIAL', subtitle: '午餐特价' },
  { id: 'appetizers', title: 'APPETIZERS', subtitle: '开胃菜' },
  { id: 'soup', title: 'SOUP', subtitle: '汤' },
  { id: 'fried-rice', title: 'FRIED RICE', subtitle: '炒饭' },
  { id: 'chow-mein', title: 'CHOW MEIN', subtitle: '炒面' },
  { id: 'lo-mein', title: 'LO MEIN', subtitle: '捞面' },
  { id: 'chow-mai-fun', title: 'CHOW MAI FUN', subtitle: '炒面粉' },
  { id: 'egg-foo-young', title: 'EGG FOO YOUNG', subtitle: '芙蓉蛋' },
  { id: 'beef', title: 'BEEF', subtitle: '牛肉' },
  { id: 'chicken', title: 'CHICKEN', subtitle: '鸡肉' },
  { id: 'pork', title: 'PORK', subtitle: '猪肉' },
  { id: 'seafood', title: 'SEAFOOD', subtitle: '海鲜' },
  { id: 'special-combination-platter', title: 'SPECIAL COMBINATION PLATTER', subtitle: '特色拼盘' },
  { id: 'sweet-sour', title: 'SWEET & SOUR', subtitle: '糖醋类' },
  { id: 'moo-shu', title: 'MOO SHU', subtitle: '木须类' },
  { id: 'vegetables', title: 'VEGETABLE', subtitle: '蔬菜类' },
  { id: 'coupons', title: 'COUPONS', subtitle: '优惠券' }
])

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Show all menu sections
const showAllMenu = () => {
  showAllMenuSections.value = !showAllMenuSections.value
  // Close mobile menu if open
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Navigate to menu section
const navigateToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  // Hide all menu sections view
  showAllMenuSections.value = false
  // Close mobile menu if open
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

const navigateToHome = () => {
  navigateTo('/')
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const isPriceLikeText = (text) => {
  const compact = text.replace(/[$\s,]/g, '')
  return compact === '' || compact === '-' || /^[\d.\-]+$/.test(compact)
}

const cleanDishName = (raw) => {
  return raw
    .replace(/\s+/g, ' ')
    .replace(/\$[\d.]+/g, ' ')
    .replace(/\b\d+\.\d+\b/g, ' ')
    .replace(/小\s*(SM|PT)|大\s*(LG|QT)|均码|价格|ORDER/gi, ' ')
    .replace(/[\u4e00-\u9fff]+/g, ' ')
    .replace(/🌶️/g, ' ')
    .replace(/^[A-Za-z]?\d+[a-z]?\.\s*/i, '')
    .replace(/^[A-Za-z]\d+[a-z]?\s+/i, '')
    .replace(/\s+/g, ' ')
    .trim()
}

const isSkippableDishName = (text) => {
  if (!text || text.length < 2) return true
  if (isPriceLikeText(text)) return true
  if (/^[A-Za-z]?\d+[a-z]?$/i.test(text)) return true
  if (/^(free|order|hot and spicy|price|sm|lg|pt|qt)$/i.test(text)) return true
  if (text.length > 80) return true
  return false
}

const extractDishName = (element) => {
  try {
    const candidates = []
    const nodes = element.querySelectorAll('h1, h2, h3, p, span, td, div')
    nodes.forEach((node) => {
      const text = (node.textContent || '').trim()
      if (text) candidates.push(text)
    })
    candidates.push((element.textContent || '').trim())

    for (const raw of candidates) {
      if (isPriceLikeText(raw)) continue
      const dishName = cleanDishName(raw)
      if (!isSkippableDishName(dishName)) return dishName
    }

    return 'Unknown Dish'
  } catch (error) {
    console.error('Error extracting dish name:', error)
    return 'Unknown Dish'
  }
}

const askAIAboutDish = async (dishName) => {
  try {
    const response = await fetch('/api/ask-ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dishName }),
    })

    if (!response.ok) {
      throw new Error(`Failed to reach /api/ask-ai: ${response.status}`)
    }

    const result = await response.json()
    alert(`Dish: ${dishName}\n\nAI says: ${JSON.stringify(result.aiResponse)}`)
  } catch (error) {
    console.error('Error asking AI about dish:', error)
  }
}

const handleMenuItemClick = async (event, explicitName) => {
  try {
    const element = event.currentTarget || event.target
    const dishName = (explicitName && String(explicitName).trim()) || extractDishName(element)
    if (dishName && dishName !== 'Unknown Dish') {
      await askAIAboutDish(dishName)
    }
  } catch (error) {
    console.error('Error handling menu item click:', error)
  }
}

watch(isMobileMenuOpen, (isOpen) => {
  if (process.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})

const handleEscapeKey = (event) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)

  window.debugToggleLunch = () => {
    handleToggleLunchItems()
  }
  window.debugToggleCombo = () => {
    handleToggleComboItems()
  }

  document.querySelectorAll('.menu-item').forEach((item) => {
    item.addEventListener('click', handleMenuItemClick)
  })

  let lastScrollY = window.scrollY
  const handleScroll = () => {
    const header = document.querySelector('header')
    const currentScrollY = window.scrollY
    if (header) {
      if (currentScrollY > 50) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.style.transform = 'translateX(-50%) translateY(-100%)'
      } else {
        header.style.transform = 'translateX(-50%) translateY(0)'
      }
    }
    lastScrollY = currentScrollY
  }

  nextTick(() => {
    const header = document.querySelector('header')
    if (header) {
      header.style.transform = 'translateX(-50%) translateY(0)'
      header.addEventListener('mouseenter', () => {
        header.style.transform = 'translateX(-50%) translateY(0)'
      })
    }
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscapeKey)
  document.body.style.overflow = ''
})
</script>

<style>
@keyframes pulseZoom {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
}

[id] {
  scroll-margin-top: 120px;
}

@keyframes slide-in-from-top {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: slide-in-from-top 0.3s ease-out;
}

.navbar-center {
  transform: translateX(-50%) translateY(0);
}

header {
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
}

header.scrolled {
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

header:not(.scrolled) {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%) !important;
  backdrop-filter: blur(10px) !important;
}

.lunch-items-enter-active,
.lunch-items-leave-active {
  transition: all 0.3s ease;
}

.lunch-items-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.lunch-items-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.lunch-items-move {
  transition: transform 0.3s ease;
}
</style>
