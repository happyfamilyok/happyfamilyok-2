<template>
  <div>
    <div class="w-full bg-[#d1f8ff] min-h-screen">
        <div class="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center">
            <div
                class="w-full h-screen relative min-h-screen overflow-hidden flex flex-col items-center bg-[url(/assets/img_light_gradient_08.png)] bg-stretch bg-center bg-no-repeat">
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
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">FIRED
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
                                    </div><button @click="showAllMenu"
                                        class="flex flex-col items-center lg:items-start text-center lg:text-left cursor-pointer"><span
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-4 transition-colors duration-200 uppercase">VIEW
                                            ALL MENU</span><span
                                            class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-4 transition-colors duration-200">查看所有菜单</span></button>
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
                <div class="flex flex-col lg:flex-row justify-between items-start px-8 lg:px-16 mt-32 gap-12">
                    <div class="flex-1 p-6 rounded-xl w-full items-start relative min-h-[600px]">
                        <!-- Hero Logo Image -->
                        <img src="/assets/hero/Hero-Image.png" alt="Happy Family Logo" class="object-contain mx-auto lg:w-[1200px] w-full relative z-10 hero-image" />
                        <div class="relative z-10">
                            <p class="mt-2 text-center lg:text-left font-semibold">CHINESE FOOD TO TAKE OUT OR EAT IN</p>
                        <div class="mt-6 text-center lg:text-left">
                            <h3 class="text-text-accent font-bold text-lg font-viola">OPEN 7 DAYS A WEEK</h3>
                            <p class="mt-1">Monday - Saturday ( 11:00 AM - 9:30:00 PM )</p>
                            <p>Sunday ( 12:00 PM - 9:30:00 PM )</p>
                        </div>
                        <div class="mt-4 flex justify-center lg:hidden">
                            <div class="text-sm font-bold w-16 h-16 flex items-center justify-center bg-white/70 msg-badge-crossed">MSG <br />
                                没有味精</div>
                        </div>
                        <div class="mt-6">
                            <!-- Apple MapKit Integration -->
                            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                                <div class="p-4 bg-gray-50 border-b">
                                    <h4 class="text-lg font-semibold text-gray-800 font-viola">Find Us</h4>
                                    <p class="text-sm text-gray-600">1219 E. Alameda St, Norman, OK, 73071</p>
                                    <p class="text-xs text-gray-500 mt-1">Heisman Square Shopping Center</p>
                                </div>
                                <div class="w-full h-64 bg-gray-100 relative">
                                    <!-- Loading overlay managed by Vue -->
                                    <div v-if="!mapLoaded" class="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                                        <div class="text-center">
                                            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto mb-2"></div>
                                            <p class="text-gray-500 text-sm">Loading Apple Maps...</p>
                                            <p class="text-gray-400 text-xs mt-1">This may take a few moments</p>
                                        </div>
                                    </div>
                                    <!-- Map container managed by MapKit (isolated from Vue) -->
                                    <div ref="mapContainer" class="w-full h-full mapkit-map"></div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="flex-1 relative flex justify-center items-center">
                        <img src="/assets/hero/menu-card.png" alt="Menu Card"
                             @click="navigateToMenus"
                             class="absolute top-12 lg:right-[40%] right-[55%] w-[120px] h-[120px] z-10 cursor-pointer hover:scale-105 transition-transform duration-200" />
                        <p @click="navigateToMenus" 
                           class="absolute top-[180px] lg:right-[40%] right-[55%] w-[120px] text-center text-sm font-semibold text-gray-800 z-10 cursor-pointer hover:text-blue-600 transition-colors duration-200">
                            Download the Menu
                        </p>
                    </div>
                </div>
                <!-- Temple image positioned in bottom right of hero section, scaled to fit screen -->
                <img src="/assets/hero/temple.png" alt="Temple" 
                     class="absolute bottom-0 right-0 w-screen h-auto object-contain object-bottom-right z-0 max-h-[calc(100vh-120px)]" />
                <div class="absolute top-[35%] left-1/2 transform -translate-x-1/2 text-center hidden lg:block">
                    <div class="text-sm font-bold w-16 h-16 flex items-center justify-center bg-white/70 msg-badge-crossed">MSG <br />
                        没有味精</div>
                </div>
                <div class="fixed right-6 top-1/3 z-40">
                    <a href="https://www.yelp.com/biz/happy-family-chinese-restaurant-norman" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="block transition-all duration-300 hover:scale-110"
                       aria-label="Visit our Yelp page">
                        <div class="bg-red-500/80 rounded-xl p-4 shadow-lg flex flex-col items-center text-white cursor-pointer hover:bg-red-600/90 hover:shadow-xl transition-all duration-300">
                            <p class="text-sm">We're on yelp!</p>
                            <img src="/assets/link/yelp (1).gif" alt="yelp qr"
                                class="w-20 sm:w-40 sm:h-50 h-30 mt-2" />
                        </div>
                    </a>
                </div>
                <div class="fixed left-6 top-1/3 z-40">
                    <a href="https://www.tripadvisor.com/Restaurant_Review-g51547-d4706231-Reviews-Happy_Family_Chinese_Restaurant-Norman_Oklahoma.html" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="block transition-all duration-300 hover:scale-110"
                       aria-label="Visit our TripAdvisor page">
                        <div class="bg-red-500/80 rounded-xl p-4 shadow-lg flex flex-col items-center text-white cursor-pointer hover:bg-red-600/90 hover:shadow-xl transition-all duration-300">
                            <p class="text-sm">We're on Tripadvisor!</p>
                            <img src="/assets/link/yelp (2).gif" alt="Tripadvisor qr"
                                class="w-20 sm:w-40 sm:h-50 h-30 mt-2" />
                        </div>
                    </a>
                </div>
                <a href="tel:405-366-0786"
                    class="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-600 transition-colors duration-200 z-[9999]">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" class="text-white text-2xl" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                        </path>
                    </svg></a>
            </div>
            <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px]">
                <div
                    class="flex flex-col gap-6 sm:gap-8 lg:gap-[32px] justify-start items-center w-full mb-[47px] sm:mb-[70px] lg:mb-[94px]">
                    <div class="flex flex-col gap-6 sm:gap-8 lg:gap-[42px] justify-start items-center flex-1">
                        <h2
                            class="text-[32px] sm:text-[40px] lg:text-[48px] font-viola font-normal leading-[38px] sm:leading-[47px] lg:leading-[56px] text-global-1">
                            Contact us</h2>
                        <div class="flex flex-col lg:flex-row gap-4 lg:gap-[20px] justify-center items-center w-full">
                            <div class="flex flex-col lg:flex-row gap-4 lg:gap-[20px] justify-start items-stretch w-full px-4 sm:px-6 lg:px-[60px]">
                                <!-- Location Card - Clickable -->
                                <a href="https://maps.apple.com/place?place-id=I84F0D62EE9430787&address=1219+Alameda+St%2C+Norman%2C+OK++73071%2C+United+States&coordinate=35.2196833%2C-97.4218639&name=Happy+Family+Chinese+Restaurant&_provider=9902"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="flex flex-row justify-start items-start w-full lg:w-[650px] bg-global-5 rounded-[22px] shadow-[0px_4px_32px_#888888ff] border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] p-4 lg:p-[20px] cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                                    <div class="flex flex-col gap-3 lg:gap-[16px] justify-start items-start w-full">
                                        <div
                                            class="flex justify-start items-center w-auto bg-global-5 rounded-[40px] shadow-[0px_4px_32px_#888888ff] border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] p-6 lg:p-[28px]">
                                            <img src="/images/img_octicon_location_24.svg" alt="Location" width="24"
                                                height="24" class="w-[24px] h-[24px]" /></div>
                                        <p
                                            class="text-[14px] sm:text-[16px] lg:text-[18px] font-roboto font-normal leading-[24px] sm:leading-[28px] lg:leading-[31px] text-global-1">
                                            Heisman Square Shopping Center 1219 E. Alameda St. Norman, <br />OK, 73071.</p>
                                    </div>
                                </a>
                                <!-- Phone Card - Clickable -->
                                <a href="tel:405-366-0786"
                                   class="flex flex-row justify-start items-start w-full lg:w-[650px] bg-global-5 rounded-[22px] shadow-[0px_4px_32px_#888888ff] border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] p-4 lg:p-[20px] cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
                                    <div
                                        class="flex flex-col gap-3 lg:gap-[16px] justify-start items-start w-full">
                                        <div
                                            class="flex justify-start items-center w-auto bg-global-5 rounded-[40px] shadow-[0px_4px_32px_#888888ff] border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] p-6 lg:p-[28px]">
                                            <img src="/images/img_fluent_call_32_regular.svg" alt="Phone" width="24"
                                                height="24" class="w-[24px] h-[24px]" /></div>
                                        <p
                                            class="text-[14px] sm:text-[16px] lg:text-[18px] font-roboto font-normal leading-[18px] sm:leading-[20px] lg:leading-[22px] text-global-1">
                                            <span>405-366-0786</span><span> / </span><span>405-366-07864</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-row justify-center items-center w-full bg-global-5 rounded-[22px] shadow-[0px_4px_32px_#888888ff] border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] p-8 sm:p-10 lg:p-[44px]">
                        <div class="flex flex-col gap-6 sm:gap-8 lg:gap-[36px] justify-start items-center w-[74%]">
                            <div
                                class="flex flex-col gap-3 lg:gap-[18px] justify-start items-center flex-1 mx-4 lg:mx-[22px]">
                                <h3
                                    class="text-[24px] sm:text-[28px] lg:text-[32px] font-viola font-normal leading-[28px] sm:leading-[33px] lg:leading-[37px] text-global-4">
                                    Add our Contact card</h3>
                                <p
                                    class="text-[14px] sm:text-[16px] lg:text-[18px] font-roboto font-normal leading-[18px] sm:leading-[20px] lg:leading-[22px] text-global-1 text-center">
                                    **compatible with iPhone on iOS 6 or later (Safari 6) and Mac devices running 10.12
                                    Sierra or later.(Safari 10)**</p>
                            </div>
                            <div class="flex flex-col gap-3 lg:gap-[16px] justify-start items-center flex-1">
                                <a href="/happyfamily.pkpass"><div class="flex flex-col gap-4 lg:gap-[24px] justify-start items-center w-auto"><img
                                        src="/images/img_wallet_10_1.svg" alt="Apple Wallet" width="120" height="120"
                                        class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]" />
                                    <h4
                                        class="text-[24px] sm:text-[28px] lg:text-[32px] font-viola font-semibold leading-[28px] sm:leading-[33px] lg:leading-[38px] text-global-1 uppercase">
                                        Add apple wallet card</h4>
                                </div></a>
                                <p
                                    class="text-[14px] sm:text-[16px] lg:text-[18px] font-roboto font-normal leading-[28px] sm:leading-[32px] lg:leading-[36px] text-global-1 text-center flex-1">
                                    Apple is a trademark of Apple Inc., registered in the U.S. and other countries. The
                                    use of the Apple name and logo on <br />this website is for informational purposes
                                    only and does not imply any affiliation with or endorsement by Apple Inc. <br />All
                                    rights regarding the Apple trademarks are reserved by their respective owners</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem" aria-label="K1 Chicken Nuggets - $5.50">
                            <p class="font-bold text-lg text-black">K1
                                <!-- -->.
                                <!-- -->CHICKEN NUGGETS (8)</p>
                            <p class="text-black text-lg">炸鸡粒</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K2
                                <!-- -->.
                                <!-- -->FRIED FISH (2)</p>
                            <p class="text-black text-lg">炸鱼</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K3
                                <!-- -->.
                                <!-- -->FRIED SCALLOPS (8)</p>
                            <p class="text-black text-lg">炸干贝</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K4
                                <!-- -->.
                                <!-- -->FRIED CHICKEN WINGS (3)</p>
                            <p class="text-black text-lg">炸鸡翅</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K5
                                <!-- -->.
                                <!-- -->FRIED BABY SHRIMP (8)</p>
                            <p class="text-black text-lg">炸虾</p>
                        </div>
                        <div class="text-center space-y-1 cursor-pointer hover:scale-105 transition-transform duration-200 p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <p class="font-bold text-lg text-black">K6
                                <!-- -->.
                                <!-- -->FRIED SQUID (12)</p>
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
                                 @keydown.enter="$event.target.click()" 
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
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">ROAST PORK EGG ROLL (1)</span><span
                                class="text-sm">烤猪肉蛋卷</span><span class="font-bold">1.35</span></div>
                         <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">SHRIMP ROLL (1)</span><span class="text-sm">虾蛋卷</span><span
                                class="font-bold">1.35</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">SPRING ROLL (1)</span><span class="text-sm">春蛋卷</span><span
                                class="font-bold">1.35</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">FRENCH FRIES</span><span class="text-sm">炸薯条</span><span
                                class="font-bold">1.85</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">FRIED JUMBO SHRIMP (5)</span><span
                                class="text-sm">炸大虾</span><span class="font-bold">5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">FRIED OR STEAMED DUMPLINGS (8)</span><span
                                class="text-sm">煎饺或蒸饺</span><span class="font-bold">5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">BONELESS SPARE RIBS (S)</span><span
                                class="text-sm">无骨排骨</span><span class="font-bold">5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">BONELESS SPARE RIBS (L)</span><span
                                class="text-sm">无骨排骨</span><span class="font-bold">9.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">CHICKEN STICK (5)</span><span class="text-sm">鸡肉条</span><span
                                class="font-bold">5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">SESAME BALL (10)</span><span class="text-sm">芝麻球</span><span
                                class="font-bold">5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">SHRIMP ROLL (1)</span><span class="text-sm">虾肉蛋卷</span><span
                                class="font-bold">1.35</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">FRIED BREAD (10)</span><span class="text-sm">炸面包</span><span
                                class="font-bold">3.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">CRAB RANGOON (8) (CHEESE WONTON)</span><span
                                class="text-sm">芝士馄饨</span><span class="font-bold">3.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">SHRIMP TOAST</span><span class="text-sm">虾多士</span><span
                                class="font-bold">3.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">BARBECUED SPARE RIBS (S)</span><span
                                class="text-sm">烧烤排骨</span><span class="font-bold">5.55</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">BARBECUED SPARE RIBS (L)</span><span
                                class="text-sm">烧烤排骨</span><span class="font-bold">9.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">FRIED BABY SHRIMP (15)</span><span
                                class="text-sm">炸小虾</span><span class="font-bold">5.50</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">FRIED WONTON (10)</span><span class="text-sm">炸馄饨</span><span
                                class="font-bold">3.95</span></div>
                        <div
                            class="flex justify-between items-center    bg-white/30 backdrop-blur-md    rounded-full px-4 py-5 shadow-lg border border-white/40 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <span class="font-semibold">BEEF TERIYAKI (5)</span><span class="text-sm">照烧牛肉</span><span
                                class="font-bold">6.85</span></div>
                    </div>
                </div>
                <div id="soup" class="relative bg-gradient-to-r from-white to-amber-50 p-10">
                    <div class="text-center mb-6">
                        <h1 class="text-2xl font-serif">Pu Pu Platter..9.95</h1>
                        <p class="text-red-700">6 Sweet &amp; Sour Chicken, 2 Chicken Stick, 2 BBQ Spare Ribs, 2 Egg
                            Roll, 2 Fantail Shrimp, 2 Shrimp Toast</p>
                        <p class="text-black">6 只糖醋鸡、2 串鸡饭、2 块烤排骨、2 个蛋卷、2 只扇尾虾、2 片虾多士</p>
                    </div>
                    <div class="flex flex-col gap-2 sm:flex-row">
                        <div class="flex-1 px-1 sm:px-4">
                            <h2 class="text-4xl text-black uppercase font-viola">SOUP</h2>
                            <p class="text-xl">汤</p>
                            <p class="mt-3 text-red-700 italic font-medium">(W. CRISPY NOODLES)<span
                                    class="ml-2 text-black">配脆面</span></p>
                            <div class="grid grid-cols-4 mt-4 font-medium text-center">
                                <div class="text-red-700"></div>
                                <div class="text-red-700"></div>
                                <div class="text-red-700">小 PT</div>
                                <div class="text-red-700">大 QT</div>
                            </div>
                            <div class="mt-3 w-full space-y-1">
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">WONTON SOUP..</div>
                                    <div>馄饨汤</div>
                                    <div class="text-center">1.95</div>
                                    <div class="text-center">3.25</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">EGG DROP SOUP</div>
                                    <div>蛋花汤</div>
                                    <div class="text-center">1.95</div>
                                    <div class="text-center">3.25</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">CHICKEN RICE SOUP</div>
                                    <div>鸡肉饭汤</div>
                                    <div class="text-center">1.95</div>
                                    <div class="text-center">3.25</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">CHICKEN NOODLE SOUP</div>
                                    <div>鸡肉面汤</div>
                                    <div class="text-center">1.95</div>
                                    <div class="text-center">3.25</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">WONTON EGG DROP SOUP</div>
                                    <div>馄饨蛋花汤</div>
                                    <div class="text-center">2.35</div>
                                    <div class="text-center">3.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">VEGETABLE BEAN CURD SOUP
                                    </div>
                                    <div>蔬菜豆腐汤</div>
                                    <div class="text-center">2.35</div>
                                    <div class="text-center">3.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />HOT &amp; SOUR SOUP...
                                    </div>
                                    <div>酸辣汤</div>
                                    <div class="text-center">2.35</div>
                                    <div class="text-center">3.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">House Special Soup (for 2)
                                    </div>
                                    <div>本店特色汤</div>
                                    <div class="text-center">5.50</div>
                                    <div class="text-center">-</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">SEAFOOD SOUP (FOR 2)</div>
                                    <div>海鲜汤（2人份）</div>
                                    <div class="text-center">6.50</div>
                                    <div class="text-center">-</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 px-1 sm:px-4">
                            <h2 class="text-4xl text-black uppercase font-viola">FRIED RICE</h2>
                            <p class="text-xl">炒饭</p>
                            <div class="grid grid-cols-4 mt-4 font-medium text-center">
                                <div class="text-red-700"></div>
                                <div class="text-red-700"></div>
                                <div class="text-red-700">小 SM</div>
                                <div class="text-red-700">大 LG</div>
                            </div>
                            <div class="mt-3 w-full space-y-1">
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">VEGETABLE FRIED RICE.
                                    </div>
                                    <div>蔬菜炒饭</div>
                                    <div class="text-center">4.25</div>
                                    <div class="text-center">6.25</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">ROAST PORK FRIED RICE
                                    </div>
                                    <div>烤猪肉炒饭</div>
                                    <div class="text-center">4.55</div>
                                    <div class="text-center">6.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">CHICKEN FRIED RICE</div>
                                    <div>鸡肉炒饭</div>
                                    <div class="text-center">4.55</div>
                                    <div class="text-center">6.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">BEEF FRIED RICE</div>
                                    <div>牛肉炒饭</div>
                                    <div class="text-center">4.95</div>
                                    <div class="text-center">7.55</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">SHRIMP FRIED RICE</div>
                                    <div>虾仁炒饭</div>
                                    <div class="text-center">4.95</div>
                                    <div class="text-center">7.55</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">CRAB MEAT FRIED RICE</div>
                                    <div>蟹肉炒饭</div>
                                    <div class="text-center">5.50</div>
                                    <div class="text-center">7.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">HOUSE SPECIAL FRIED RICE
                                        (CHICKEN, SHRIMP &amp; PORK)</div>
                                    <div>特色炒饭（鸡肉、虾和猪肉）</div>
                                    <div class="text-center">5.50</div>
                                    <div class="text-center">7.95</div>
                                </div>
                                <div class="w-full grid grid-cols-4 text-sm items-center cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative font-medium flex items-center gap-1">HAM FRIED RICE</div>
                                    <div>火腿炒饭</div>
                                    <div class="text-center">5.50</div>
                                    <div class="text-center">7.95</div>
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
                        <p class="text-red-700 text-lg font-serif text-center mb-6">(W. WHITE RICE &amp; CRISPY NOODLES)
                        </p>
                        <p class="text-center text-base text-gray-800 mb-6">配白米和脆面条</p>
                        <div class="flex justify-between items-center text-red-700 font-serif text-sm mb-2"><span
                                class="w-1/3"></span><span class="w-1/3 text-center">价格</span>
                            <div class="w-1/3 flex justify-end gap-12"><span>小 SM</span><span>大 LG</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">VEGETABLE CHOW MEIN OR CHOP SUEY</div>
                            <div class="w-1/3 text-center text-black text-sm">蔬菜炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>4.25</span><span>6.25</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">ROAST PORK CHOW MEIN OR CHOP SUEY</div>
                            <div class="w-1/3 text-center text-black text-sm">烤猪肉炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>4.55</span><span>6.95</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">CHICKEN CHOW MEIN OR CHOP SUEY</div>
                            <div class="w-1/3 text-center text-black text-sm">鸡肉炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>4.55</span><span>6.95</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">BEEF CHOW MEIN OR CHOP SUEY</div>
                            <div class="w-1/3 text-center text-black text-sm">牛肉炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>4.95</span><span>7.55</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">SHRIMP CHOW MEIN OR CHOP SUEY</div>
                            <div class="w-1/3 text-center text-black text-sm">虾炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>4.95</span><span>7.55</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                            <div class="w-1/3 text-black font-serif text-sm">HOUSE SPECIAL CHOW MEIN OR CHOP SUEY</div>
                            <div class="w-1/3 text-center text-black text-sm">本店特色炒面或杂碎</div>
                            <div class="w-1/3 flex justify-end gap-12 text-black text-sm font-medium">
                                <span>5.50</span><span>7.95</span></div>
                        </div>
                        <div class="flex justify-between items-center  py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
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
                                    <h3 class="text-red-700 font-serif text-lg uppercase">(SOFT NOODLES)</h3>
                                    <p class="text-black text-base">软面条</p>
                                </div>
                                <div class="flex justify-between text-red-700 font-serif text-sm mb-2">
                                    <span>小SM</span><span>大LG</span></div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">
                                        VEGETABLE LO MEIN</div>
                                    <div class="text-black text-sm flex-1 text-center">蔬菜捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>4.25</span><span>6.25</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">ROAST
                                        PORK LO MEIN</div>
                                    <div class="text-black text-sm flex-1 text-center">烤猪肉捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>4.55</span><span>6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">CHICKEN
                                        LO MEIN</div>
                                    <div class="text-black text-sm flex-1 text-center">鸡肉捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>4.55</span><span>6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">BEEF LO
                                        MEIN</div>
                                    <div class="text-black text-sm flex-1 text-center">牛肉捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>4.95</span><span>7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">SHRIMP
                                        LO MEIN</div>
                                    <div class="text-black text-sm flex-1 text-center">虾捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>4.95</span><span>7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">HOUSE
                                        SPECIAL LO MEIN</div>
                                    <div class="text-black text-sm flex-1 text-center">本店特色捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>5.50</span><span>7.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">CRABMEAT
                                        LO MEIN</div>
                                    <div class="text-black text-sm flex-1 text-center">蟹肉捞面</div>
                                    <div class="text-black text-sm font-medium flex gap-6">
                                        <span>5.50</span><span>7.95</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 px-4" id="chow-mai-fun">
                            <h2 class="text-center text-2xl font-viola uppercase tracking-wide mb-3">CHOW MAI FUN
                                <!-- --> <span class="ml-1 font-sans">炒面粉</span></h2>
                            <div class="bg-white/90 rounded-2xl shadow-sm p-4 mb-6">
                                <div class="mb-2">
                                    <h3 class="text-red-700 font-serif text-lg uppercase">(RICE NOODLE)</h3>
                                    <p class="text-black text-base">炒面粉</p>
                                </div>
                                <div class="flex justify-between text-red-700 font-serif text-sm mb-2">
                                    <span>均码</span><span>ORDER</span></div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">
                                        VEGETABLE CHOW MAI FUN</div>
                                    <div class="text-black text-sm flex-1 text-center">蔬菜炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>6.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">ROAST
                                        PORK CHOW MAI FUN</div>
                                    <div class="text-black text-sm flex-1 text-center">烤猪肉炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">CHICKEN
                                        CHOW MAI FUN</div>
                                    <div class="text-black text-sm flex-1 text-center">鸡肉炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">BEEF
                                        CHOW MAI FUN</div>
                                    <div class="text-black text-sm flex-1 text-center">牛肉炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">SHRIMP
                                        CHOW MAI FUN</div>
                                    <div class="text-black text-sm flex-1 text-center">虾仁炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />SINGAPORE CHOW MAI FUN
                                    </div>
                                    <div class="text-black text-sm flex-1 text-center">新加坡炒米粉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>7.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">HOUSE
                                        SPECIAL CHOW MAI FUN</div>
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
                                    <h3 class="text-red-700 font-serif text-lg uppercase">(W. WHITE RICE)</h3>
                                    <p class="text-black text-base"></p>
                                </div>
                                <div class="flex justify-between text-red-700 font-serif text-sm mb-2">
                                    <span>均码</span><span>ORDER</span></div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">
                                        VEGETABLE EGG FOO YOUNG</div>
                                    <div class="text-black text-sm flex-1 text-center">蔬菜芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>6.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">ROAST
                                        PORK EGG FOO YOUNG</div>
                                    <div class="text-black text-sm flex-1 text-center">烤猪肉芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>7.25</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">CHICKEN
                                        EGG FOO YOUNG</div>
                                    <div class="text-black text-sm flex-1 text-center">鸡肉芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>7.25</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">BEEF EGG
                                        FOO YOUNG</div>
                                    <div class="text-black text-sm flex-1 text-center">牛肉芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">SHRIMP
                                        EGG FOO YOUNG</div>
                                    <div class="text-black text-sm flex-1 text-center">虾芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>7.55</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">HOUSE
                                        SPECIAL EGG FOO YOUNG</div>
                                    <div class="text-black text-sm flex-1 text-center">本店特色芙蓉蛋</div>
                                    <div class="text-black text-sm font-medium flex gap-6"><span>7.95</span></div>
                                </div>
                                <div class="flex justify-between items-center py-1 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <div class="relative flex items-center gap-1 text-black font-serif text-sm">
                                        (CHICKEN, SHRIMP &amp; PORK)</div>
                                    <div class="text-black text-sm flex-1 text-center">鸡肉、虾和猪肉</div>
                                    <div class="text-black text-sm font-medium flex gap-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <div class="text-center text-yellow-200 mt-10 mb-6" id="beef">
                            <h2 class="text-3xl font-bold font-viola">BEEF</h2>
                            <p class="text-xl">牛肉</p>
                        </div>
                        <div class="bg-gray-600 text-center text-white py-2 mb-4 rounded-md">
                            <p>(W. WHITE RICE)</p>
                            <p class="text-sm">配白米饭</p>
                        </div>
                        <div class="px-10 pb-6">
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
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>BEEF W.
                                                BROCCOLI</span></td>
                                        <td class="px-2 py-2">西兰花牛肉</td>
                                        <td class="px-2 py-2 text-center">5.50</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>PEPPER STEAK W
                                                ONIONS</span></td>
                                        <td class="px-2 py-2">洋葱胡椒牛排</td>
                                        <td class="px-2 py-2 text-center">5.50</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>BEEF W. PEPPER
                                                &amp; TOMATO</span></td>
                                        <td class="px-2 py-2">牛肉配辣椒和西红柿</td>
                                        <td class="px-2 py-2 text-center">5.50</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>BEEF W. CHINESE
                                                VEGS</span></td>
                                        <td class="px-2 py-2">牛肉配中式蔬菜</td>
                                        <td class="px-2 py-2 text-center">5.50</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>BEEF W. MIXED
                                                VEGETABLES</span></td>
                                        <td class="px-2 py-2">什锦牛肉</td>
                                        <td class="px-2 py-2 text-center">5.50</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>BEEF W.
                                                MUSHROOMS</span></td>
                                        <td class="px-2 py-2">蘑菇牛肉</td>
                                        <td class="px-2 py-2 text-center">5.50</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><span>BEEF W. BLACK BEAN
                                                SAUCE</span></td>
                                        <td class="px-2 py-2">豉汁牛肉</td>
                                        <td class="px-2 py-2 text-center">5.50</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>HUNAN
                                                BEEF</span></td>
                                        <td class="px-2 py-2">湖南牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>SZECHUAN</span>
                                        </td>
                                        <td class="px-2 py-2">四川牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>MONGOLIAN
                                                BEEF</span></td>
                                        <td class="px-2 py-2">蒙古牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>Hot &amp;
                                                Spicy Beef</span></td>
                                        <td class="px-2 py-2">香辣牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>KUNG PO
                                                BEEF</span></td>
                                        <td class="px-2 py-2">宫保牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>CURRY
                                                BEEF</span></td>
                                        <td class="px-2 py-2">咖喱牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
                                    </tr>
                                    <tr class="text-white hover:scale-105 hover:bg-blue-800/30 transition-all duration-200 cursor-pointer focus-within:bg-blue-800/30 focus-within:ring-2 focus-within:ring-blue-500" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                                        <td class="relative px-2 py-2 flex items-center gap-2"><img
                                                src="../assets/spicy.png" alt="spicy"
                                                class="absolute left-[-45px] h-15 object-contain" /><span>BEEF W. GARLIC
                                                SAUCE</span></td>
                                        <td class="px-2 py-2">蒜蓉牛肉</td>
                                        <td class="px-2 py-2 text-center">-</td>
                                        <td class="px-2 py-2 text-center">8.95</td>
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
                <div class="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
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
                            <p class="text-red-600 italic font-medium">(W. WHITE RICE)</p>
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
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">CHICKEN W. BROCCOLI</td>
                                    <td class="text-left">西兰花鸡肉</td>
                                    <td>5.25</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">MOO GOO GAI PAN</td>
                                    <td class="text-left">蘑菇鸡片</td>
                                    <td>5.25</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">CHICKEN W. MIXED VEGS
                                    </td>
                                    <td class="text-left">鸡肉什锦蔬菜</td>
                                    <td>5.25</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">CHICKEN W. ALMOND DING
                                    </td>
                                    <td class="text-left">杏仁鸡丁</td>
                                    <td>5.25</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">CHICKEN W. CASHEW NUTS
                                    </td>
                                    <td class="text-left">腰果鸡丁</td>
                                    <td>5.25</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">CHICKEN W. BEAN CURD
                                    </td>
                                    <td class="text-left">豆腐鸡</td>
                                    <td>5.25</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">CHICKEN W. BLACK BEAN
                                        SAUCE</td>
                                    <td class="text-left">豉汁鸡</td>
                                    <td>5.25</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />HUNAN CHICKEN</td>
                                    <td class="text-left">湖南鸡</td>
                                    <td>-</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />CURRY CHICKEN</td>
                                    <td class="text-left">咖喱鸡</td>
                                    <td>-</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />CHICKEN W. GARLIC SAUCE
                                    </td>
                                    <td class="text-left">蒜蓉鸡</td>
                                    <td>-</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />SZECHUAN CHICKEN</td>
                                    <td class="text-left">四川鸡</td>
                                    <td>-</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />KUNG PO CHICKEN</td>
                                    <td class="text-left">宫保鸡丁</td>
                                    <td>-</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />HOT &amp; SPICY CHICKEN
                                    </td>
                                    <td class="text-left">香辣鸡</td>
                                    <td>-</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">LEMON CHICKEN</td>
                                    <td class="text-left">柠檬鸡</td>
                                    <td>-</td>
                                    <td>8.55</td>
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
                            <p class="text-red-600 italic font-medium">(W. WHITE RICE)</p>
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
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">ROAST PORK W. BROCCOLI
                                    </td>
                                    <td class="text-left">西兰花烤猪肉</td>
                                    <td>5.25</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">ROAST PORK W. CHINESE
                                        VEGS.</td>
                                    <td class="text-left">烤猪肉配中式蔬菜</td>
                                    <td>5.25</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">ROAST PORK W. MIXED
                                        VEGS.</td>
                                    <td class="text-left">烤猪肉配什锦蔬菜</td>
                                    <td>5.25</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2">ROAST PORK W. BLACK BEAN
                                        SC</td>
                                    <td class="text-left">豉汁烤猪肉</td>
                                    <td>5.25</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />PORK W GARLIC SAUCE</td>
                                    <td class="text-left">蒜蓉猪肉</td>
                                    <td>5.25</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />SZECHUAN PORK</td>
                                    <td class="text-left">四川猪肉</td>
                                    <td>-</td>
                                    <td>8.55</td>
                                </tr>
                                <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                    <td class="relative flex items-center gap-2 text-left py-2"><img
                                            src="../assets/spicy.png" alt="spicy"
                                            class="absolute left-[-45px] h-15 object-contain" />HOT &amp; SPICY PORK
                                    </td>
                                    <td class="text-left">香辣猪肉</td>
                                    <td>-</td>
                                    <td>8.55</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="relative w-full mx-auto py-10">
                    <div class="flex justify-between items-center mb-6">
                        <div class="flex flex-col items-center"><img src="/assets/sea-foos/sea-01.png"
                                alt="Shrimp with Lobster Sauce" class="h-40 object-contain" />
                            <p class="font-semibold mt-2">Shrimp w. Lobster Sc.</p>
                        </div>
                        <div class="text-center" id="seafood">
                            <h2 class="text-2xl font-bold font-viola">SEAFOOD</h2>
                            <p class="text-lg">海鲜</p>
                            <p class="text-red-600 italic font-medium mt-2">(W. WHITE RICE)</p>
                            <p class="text-black">配白米饭</p>
                        </div>
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
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2">SHRIMP W. LOBSTER SAUCE</td>
                                <td class="text-left">龙虾酱虾</td>
                                <td>5.75</td>
                                <td>9.50</td>
                            </tr>
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2">SHRIMP W. BROCCOLI</td>
                                <td class="text-left">虾仁西兰花</td>
                                <td>5.75</td>
                                <td>9.50</td>
                            </tr>
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2">SHRIMP W. CHINESE VEG</td>
                                <td class="text-left">虾仁炒蔬菜</td>
                                <td>5.75</td>
                                <td>9.50</td>
                            </tr>
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2">SHRIMP W. PEPPER &amp;
                                    TOMATO</td>
                                <td class="text-left">辣椒番茄虾</td>
                                <td>5.75</td>
                                <td>9.50</td>
                            </tr>
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2">SHRIMP W. BLACK BEAN SAUCE
                                </td>
                                <td class="text-left">豉汁虾</td>
                                <td>5.75</td>
                                <td>9.50</td>
                            </tr>
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2"><img src="../assets/spicy.png"
                                        alt="spicy" class="absolute left-[-45px] h-15 object-contain" />HOT &amp; SPICY
                                    SHRIMP</td>
                                <td class="text-left">香辣虾</td>
                                <td>-</td>
                                <td>9.50</td>
                            </tr>
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2"><img src="../assets/spicy.png"
                                        alt="spicy" class="absolute left-[-45px] h-15 object-contain" />HUNAN SHRIMP
                                </td>
                                <td class="text-left">湖南虾</td>
                                <td>-</td>
                                <td>9.50</td>
                            </tr>
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2"><img src="../assets/spicy.png"
                                        alt="spicy" class="absolute left-[-45px] h-15 object-contain" />SZECHUAN SHRIMP
                                </td>
                                <td class="text-left">四川虾</td>
                                <td>-</td>
                                <td>9.50</td>
                            </tr>
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2">CURRY SHRIMP</td>
                                <td class="text-left">咖喱虾</td>
                                <td>-</td>
                                <td>9.50</td>
                            </tr>
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2"><img src="../assets/spicy.png"
                                        alt="spicy" class="absolute left-[-45px] h-15 object-contain" />SHRIMP &amp;
                                    SCALLOP W. GARLIC SAUCE</td>
                                <td class="text-left">蒜蓉扇贝虾</td>
                                <td>-</td>
                                <td>9.50</td>
                            </tr>
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2"><img src="../assets/spicy.png"
                                        alt="spicy" class="absolute left-[-45px] h-15 object-contain" />SCALLOP W. HUNAN
                                    STYLE</td>
                                <td class="text-left">湖南风味扇贝</td>
                                <td>-</td>
                                <td>9.50</td>
                            </tr>
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2">FRESH SCALLOPS W. BROCCOLI
                                </td>
                                <td class="text-left">鲜扇贝配西兰花</td>
                                <td>-</td>
                                <td>9.50</td>
                            </tr>
                            <tr class="text-center text-sm md:text-base cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-yellow-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" tabindex="0" @keydown.enter="$event.target.click()" @keydown.space.prevent="$event.target.click()" role="menuitem">
                                <td class="relative flex items-center gap-2 text-left py-2"><img src="../assets/spicy.png"
                                        alt="spicy" class="absolute left-[-45px] h-15 object-contain" />KUNG PO SHRIMP
                                </td>
                                <td class="text-left">宫保虾</td>
                                <td>-</td>
                                <td>9.50</td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        class="bg-red-700 text-white text-center text-xl font-semibold font-viola mt-8 py-3 rounded-xl">
                        HOT AND SPICY <br /><span class="text-base">辛辣</span></div>
                </div>
                <div class="relative w-full mx-auto py-8" id="special-combination-platter">
                    <div class="text-center mb-8">
                        <h2 class="text-2xl font-bold tracking-wide uppercase font-viola">SPECIAL COMBINATION PLATTER
                        </h2>
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
                <div class="w-full bg-white p-6 rounded-md my-8" id="chef-specialties">
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
                                <h2 class="text-xl font-semibold flex items-center text-black">
                                    <!-- -->H
                                    <!-- -->1
                                    <!-- -->.
                                    <!-- -->HAPPY FAMILY..</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">CRAB MEAT, JUMBO SHRIMP, BEEF, CHICKEN,
                                    PORK, STRAW MUSHROOM, BABY CORN, SNOW PEAS, CARROT, GREEN PEPPER &amp; BROCCOLI IN
                                    HOUSE SPECIAL SAUCE</p>
                                <p class="mt-2 text-base">蟹肉、大虾、牛肉、鸡肉、猪肉、草菇、小玉米、荷兰豆、胡萝卜、青椒和西兰花，配以店内特制酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-sm text-gray-600">均码 ORDER</p>
                                <p class="text-lg font-bold">11.50</p>
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
                                        class="absolute left-[-45px] h-15 object-contain" /> <!-- -->H
                                    <!-- -->2
                                    <!-- -->.
                                    <!-- -->KUNG PO DELIGHT</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">SHRIMP &amp; CHICKEN STIR-FRIED WITHIN A
                                    RICH BROWN SAUCE AND GREEN PEPPER, AND PEANUTS</p>
                                <p class="mt-2 text-base">虾和鸡肉在浓郁的棕色酱汁中翻炒，配上青椒和花生</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">9.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                             role="menuitem" 
                             tabindex="0" 
                             @keydown.enter="() => {}" 
                             @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">
                                    <!-- -->H
                                    <!-- -->3
                                    <!-- -->.
                                    <!-- -->FOUR SEASONS</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">JUMBO SHRIMP, BEEF, CHICKEN, PORK W. MIX
                                    VEGETABLES IN HOUSE SPECIAL SAUCE</p>
                                <p class="mt-2 text-base">大虾、牛肉、鸡肉、猪肉和什锦蔬菜，佐以店内特制酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">10.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">
                                    <!-- -->H
                                    <!-- -->4
                                    <!-- -->.
                                    <!-- -->TRIPLE DELIGHT....</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">JUMBO SHRIMP, BEEF, CHICKEN W. MIX
                                    CHINESE VEGETABLES IN HOUSE SPECIAL SAUCE</p>
                                <p class="mt-2 text-base">大虾、牛肉、鸡肉和什锦蔬菜，佐以店内特制酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">10.25</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">
                                    <!-- -->H
                                    <!-- -->5
                                    <!-- -->.
                                    <!-- -->FRESH SCALLOPS WITH BEEF</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">FRESH SCALLOPS SLICES BEEF W. MIX
                                    VEGETABLES IN HOUSE SPECIAL SAUCE</p>
                                <p class="mt-2 text-base">新鲜扇贝、牛肉片、什锦蔬菜，佐以店内特制酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">10.25</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">
                                    <!-- -->H
                                    <!-- -->6
                                    <!-- -->.
                                    <!-- -->SEAFOOD DELIGHT</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">JUMBO SHRIMP, FRESH SCALLOPS, CRAB MEAT
                                    W. STRAW MUSHROOMS, SNOW PEAS, BABY CORN, CARROTS, GREEN PEPPER &amp; BROCCOLI IN
                                    CANTONESE SAUCE</p>
                                <p class="mt-2 text-base">大虾、新鲜扇贝、蟹肉、草菇、荷兰豆、小玉米、胡萝卜、青椒和西兰花，配粤式酱汁</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">11.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-red-600"><img
                                        src="../assets/spicy.png" alt="spicy"
                                        class="absolute left-[-45px] h-15 object-contain" /> <!-- -->H
                                    <!-- -->7
                                    <!-- -->.
                                    <!-- -->DRAGON MEETS PHOENIX</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">GENERAL ISO&#x27;S CHICKEN W. HOT &amp;
                                    SPICY SHRIMP</p>
                                <p class="mt-2 text-base">左宗棠鸡配香辣虾</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">9.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-red-600"><img
                                        src="../assets/spicy.png" alt="spicy"
                                        class="absolute left-[-45px] h-15 object-contain" /> <!-- -->H
                                    <!-- -->8
                                    <!-- -->.
                                    <!-- -->DOUBLE DELIGHT W. GARLIC SAUCE</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">SHRIMP SCALLOPS W. MIXED VEGETABLE &amp;
                                    GREEN PEPPER</p>
                                <p class="mt-2 text-base">虾仁扇贝配什锦蔬菜和青椒</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">10.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-red-600"><img
                                        src="../assets/spicy.png" alt="spicy"
                                        class="absolute left-[-45px] h-15 object-contain" /> <!-- -->H
                                    <!-- -->9
                                    <!-- -->.
                                    <!-- -->TRIPLE DELIGHT HUNAN STYLE</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">CHICKEN, BEEF, SHRIMP W. MIXED VEGETABLE
                                    &amp; GREEN PEPPER IN BLACK BEAN KUNG PO SAUCE</p>
                                <p class="mt-2 text-base">鸡肉、牛肉、虾仁、什锦蔬菜和青椒，佐以黑豆宫保酱</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">10.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">
                                    <!-- -->H
                                    <!-- -->10
                                    <!-- -->.
                                    <!-- -->TUNG TING SHRIMP..</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide">PRAWN &amp; MIXED VEGETABLE IN EGG WHITE
                                    SAUCE</p>
                                <p class="mt-2 text-base">虾仁什锦蔬菜蛋清酱</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">10.50</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">
                                    <!-- -->H
                                    <!-- -->11
                                    <!-- -->.
                                    <!-- -->Sesame Chicken</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide"></p>
                                <p class="mt-2 text-base">芝麻鸡</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">8.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-red-600"><img
                                        src="../assets/spicy.png" alt="spicy"
                                        class="absolute left-[-45px] h-15 object-contain" /> <!-- -->H
                                    <!-- -->12
                                    <!-- -->.
                                    <!-- -->ORANGE FLAVOR CHICKEN</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide"></p>
                                <p class="mt-2 text-base">橙味鸡</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">8.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-red-600"><img
                                        src="../assets/spicy.png" alt="spicy"
                                        class="absolute left-[-45px] h-15 object-contain" /> <!-- -->H
                                    <!-- -->13
                                    <!-- -->.
                                    <!-- -->GENERAL TSO&#x27;S CHICKEN..</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide"></p>
                                <p class="mt-2 text-base">左宗棠鸡</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">8.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">
                                    <!-- -->H
                                    <!-- -->14
                                    <!-- -->.
                                    <!-- -->SESAME BEAN CURD</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide"></p>
                                <p class="mt-2 text-base">芝麻豆腐</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">8.95</p>
                            </div>
                        </div>
                        <div class="w-full flex justify-between items-start mt-6 border-b pb-4 last:border-b-0 hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" role="menuitem" tabindex="0" @keydown.enter="() => {}" @keydown.space.prevent="() => {}">
                            <div class="relative">
                                <h2 class="text-xl font-semibold flex items-center text-black">
                                    <!-- -->H
                                    <!-- -->15
                                    <!-- -->.
                                    <!-- -->HAWAII CHICKEN</h2>
                                <p class="mt-1 text-sm uppercase tracking-wide"></p>
                                <p class="mt-2 text-base">夏威夷鸡</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-bold">8.95</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-col lg:flex-row gap-4 lg:gap-[20px] w-full max-w-[1320px] mx-auto mb-[48px] sm:mb-[72px] lg:mb-[96px] px-4">
                    <div
                        class="flex flex-col gap-5 sm:gap-6 lg:gap-[28px] justify-start items-center w-full lg:flex-1 min-w-0" id="sweet-sour">
                        <div class="flex flex-col items-center">
                            <h3
                                class="text-[20px] sm:text-[24px] lg:text-[28px] font-viola font-normal leading-[24px] sm:leading-[28px] lg:leading-[33px] text-global-1 ">
                                SWEET &amp; SOUR</h3>
                            <h3
                                class="text-[18px] sm:text-[20px] lg:text-[22px] font-viola font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-global-1">
                                糖醋类</h3><img src="/assets/menu-platter/platter-01.png" alt="[object Object]"
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
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Sweet &amp; Sour Chicken 8.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        糖醋鸡</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Sweet &amp; Sour Pork....8.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        糖醋猪肉</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Sweet &amp; Sour Shrimp...8.95</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        糖醋虾</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Sum Po (Chicken, Shrimp and Pork) 8.95</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        三宝（鸡肉、虾和猪肉）</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Moo Shu Chicken. 7.85</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        木须鸡</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Moo Shu Beef 8.25</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        木须牛肉</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Moo Shu Pork....7.85</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        木须猪肉</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Moo Shu Shrimp..8.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        木须虾</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            House Special Moo Shu...8.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        本楼木须</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col gap-5 sm:gap-6 lg:gap-[28px] justify-start items-center w-full lg:flex-1 min-w-0" id="vegetables">
                        <div class="flex flex-col items-center">
                            <h3
                                class="text-[20px] sm:text-[24px] lg:text-[28px] font-viola font-normal leading-[24px] sm:leading-[28px] lg:leading-[33px] text-global-1 ">
                                VEGETABLE</h3>
                            <h3
                                class="text-[18px] sm:text-[20px] lg:text-[22px] font-viola font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-global-1">
                                蔬菜类</h3><img src="/assets/menu-platter/platter-02.png" alt="[object Object]"
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
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Vegetable Delight.....7.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        素什锦</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2"><img src="../assets/spicy.png"
                                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            #Broccoli w. Garlic Sauce ....7.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        蒜蓉西兰花</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2"><img src="../assets/spicy.png"
                                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Bean Curd Szechuan Style...7.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        四川豆腐</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2"><img src="../assets/spicy.png"
                                            alt="spicy" class="absolute left-[-45px] h-15 object-contain" />
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Ma Po Tofu..7.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        麻婆豆腐</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Sauteed Snow Peas..7.55</p>
                                    </div>
                                    <p
                                        class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 text-center">
                                        清炒荷兰豆</p>
                                </div>
                                <div class="flex flex-col hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                                     role="menuitem" 
                                     tabindex="0" 
                                     @keydown.enter="() => {}" 
                                     @keydown.space.prevent="() => {}">
                                    <div class="relative flex flex-row items-center gap-2">
                                        <p
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[14px] sm:leading-[15px] lg:leading-[17px] text-global-text-3 uppercase">
                                            Sauteed String Bean...7.55</p>
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
            <div class="w-full bg-[#8B1C1B] flex flex-col items-center py-8 relative" id="coupons">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center px-4" role="menu" aria-label="Coupons">
                    <div class="relative bg-white border-3 border-dashed border-red-600 w-52 p-4 text-center hover:scale-105 hover:bg-blue-50 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50" 
                         role="menuitem" 
                         tabindex="0" 
                         @keydown.enter="() => {}" 
                         @keydown.space.prevent="() => {}"
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
                         @keydown.enter="() => {}" 
                         @keydown.space.prevent="() => {}"><span
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
                         @keydown.enter="() => {}" 
                         @keydown.space.prevent="() => {}"><span
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
                         @keydown.enter="() => {}" 
                         @keydown.space.prevent="() => {}"><span
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
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

// Mobile menu state
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
  { id: 'L1', name: 'Chicken or Roast Pork Chow Mein', chinese: '雞或叉燒炒麵', price: '5.50' },
  { id: 'L2', name: 'Shrimp or Beef Chow Mein', chinese: '蝦或牛炒麵', price: '5.50' },
  { id: 'L3', name: 'Chicken or Roast Pork Lo Mein', chinese: '雞或叉燒撈麵', price: '5.50' },
  { id: 'L4', name: 'Shrimp or Beef Lo Mein', chinese: '蝦或牛撈麵', price: '5.50' },
  { id: 'L5', name: 'Beef With Broccoli', chinese: '芥蘭牛', price: '5.50' },
  { id: 'L6', name: 'Chicken With Broccoli', chinese: '芥蘭雞', price: '5.50' },
  { id: 'L7', name: 'Shrimp With Broccoli', chinese: '芥蘭蝦', price: '5.50' },
  { id: 'L8', name: 'Roast Pork With Broccoli', chinese: '芥蘭叉燒', price: '5.50' },
  { id: 'L9', name: 'Pepper Steak With Onion', chinese: '青椒牛', price: '5.50' },
  { id: 'L10', name: 'Roast Pork With Chinese Vegs', chinese: '叉燒炒菜', price: '5.50' },
  { id: 'L11', name: 'Moo Goo Gai Pan', chinese: '蘑菇雞', price: '5.50' },
  { id: 'L12', name: 'Shrimp With Chinese Vegs', chinese: '蝦炒菜', price: '5.50' },
  { id: 'L13', name: 'Beef With Chinese Vegs', chinese: '牛炒菜', price: '5.50' },
  { id: 'L14', name: 'Sweet & Sour Chicken or Pork', chinese: '甜酸雞或豬', price: '5.50' },
  { id: 'L15', name: 'Shrimp With Lobster Sauce', chinese: '龍蝦汁蝦', price: '5.50' },
  { id: 'L16', name: 'Mixed Vegs With Brown Sauce', chinese: '什錦菜', price: '5.50' },
  { id: 'L17', name: 'Shrimp With Cashew Nuts', chinese: '腰果蝦', price: '5.50' },
  { id: 'L18', name: 'Chicken With Cashew Nuts', chinese: '腰果雞', price: '5.50' },
  { id: 'L19', name: 'Sesame Chicken', chinese: '芝麻雞', price: '5.50' },
  { id: 'L20', name: 'General Tso\'s Chicken', chinese: '左宗棠雞', price: '5.50', spicy: true },
  { id: 'L21', name: 'Beef With Garlic Sauce', chinese: '魚香牛', price: '5.50', spicy: true },
  { id: 'L22', name: 'Chicken With Garlic Sauce', chinese: '魚香雞', price: '5.50', spicy: true },
  { id: 'L23', name: 'Shrimp With Garlic Sauce', chinese: '魚香蝦', price: '5.50', spicy: true },
  { id: 'L24', name: 'Broccoli With Garlic Sauce', chinese: '魚香芥蘭', price: '5.50', spicy: true },
  { id: 'L25', name: 'Kung Po Chicken', chinese: '宮保雞', price: '5.50', spicy: true },
  { id: 'L26', name: 'Szechuan Beef', chinese: '四川牛', price: '5.50', spicy: true },
  { id: 'L27', name: 'Szechuan Chicken', chinese: '四川雞', price: '5.50', spicy: true },
  { id: 'L28', name: 'Szechuan Shrimp', chinese: '四川蝦', price: '5.50', spicy: true },
  { id: 'L29', name: 'Hunan Beef', chinese: '湖南牛', price: '5.50', spicy: true },
  { id: 'L30', name: 'Hunan Chicken', chinese: '湖南雞', price: '5.50', spicy: true },
  { id: 'L31', name: 'Hunan Shrimp', chinese: '湖南蝦', price: '5.50', spicy: true },
  { id: 'L32', name: 'Mongolian Chicken', chinese: '蒙古雞', price: '5.50', spicy: true },
  { id: 'L33', name: 'Mongolian Beef', chinese: '蒙古牛', price: '5.50', spicy: true },
  { id: 'L34', name: 'Boneless Spare Ribs', chinese: '無骨排骨', price: '5.50' }
]

// Complete special combination platter items (all items)
const specialComboItems = [
  { id: 'C1', name: 'CHICKEN OR PORK CHOW MEIN', chinese: '鸡肉或猪肉炒面', price: '7.55' },
  { id: 'C2', name: 'CHICKEN OR PORK EGG FOO YOUNG', chinese: '鸡肉或猪肉芙蓉蛋', price: '7.55' },
  { id: 'C3', name: 'CHICKEN OR PORK LO MEIN', chinese: '鸡肉或猪肉捞面', price: '7.55' },
  { id: 'C4', name: 'SWEET & SOUR CHICKEN OR PORK', chinese: '糖醋鸡或糖醋猪肉', price: '7.55' },
  { id: 'C5', name: 'SWEET & SOUR SHRIMP', chinese: '糖醋虾', price: '7.95' },
  { id: 'C6', name: 'BARBECUED SPARE RIBS', chinese: '烤排骨', price: '7.95' },
  { id: 'C7', name: 'BONELESS RIBS', chinese: '无骨排骨', price: '7.95' },
  { id: 'C8', name: 'PEPPER STEAK W. ONION', chinese: '洋葱胡椒牛排', price: '7.75' },
  { id: 'C9', name: 'BEEF W. BROCCOLI', chinese: '西兰花牛肉', price: '7.75' },
  { id: 'C10', name: 'CHICKEN W. BROCCOLI', chinese: '西兰花鸡肉', price: '7.75' },
  { id: 'C11', name: 'SHRIMP W. BROCCOLI', chinese: '虾仁西兰花', price: '7.95' },
  { id: 'C12', name: 'ROAST PORK W. BROCCOLI', chinese: '西兰花烤猪肉', price: '7.55' },
  { id: 'C13', name: 'SHRIMP W. LOBSTER SAUCE', chinese: '龙虾酱虾', price: '7.95' },
  { id: 'C14', name: 'MOO GOO GAI PAN', chinese: '蘑菇鸡片', price: '7.55' },
  { id: 'C15', name: 'SHRIMP W. CHINESE VEGETABLES', chinese: '虾仁炒蔬菜', price: '7.95' },
  { id: 'C16', name: 'CHICKEN W. MIX VEGETABLES', chinese: '鸡肉什锦蔬菜', price: '7.55' },
  { id: 'C17', name: 'SESAME CHICKEN', chinese: '芝麻鸡', price: '7.95' },
  { id: 'C18', name: 'GENERAL TSO\'S CHICKEN', chinese: '左宗棠鸡', price: '7.95', spicy: true },
  { id: 'C19', name: 'ORANGE CHICKEN', chinese: '橙汁鸡', price: '7.95' },
  { id: 'C20', name: 'HONEY CHICKEN', chinese: '蜜汁鸡', price: '7.95' },
  { id: 'C21', name: 'KUNG PAO CHICKEN', chinese: '宫保鸡丁', price: '7.95', spicy: true },
  { id: 'C22', name: 'CASHEW CHICKEN', chinese: '腰果鸡丁', price: '7.95' },
  { id: 'C23', name: 'BEEF WITH GARLIC SAUCE', chinese: '鱼香牛肉', price: '7.95', spicy: true },
  { id: 'C24', name: 'MONGOLIAN BEEF', chinese: '蒙古牛肉', price: '7.95', spicy: true }
]

// Limited special combo items (C1-C16) - static array
const limitedComboItems = [
  { id: 'C1', name: 'CHICKEN OR PORK CHOW MEIN', chinese: '鸡肉或猪肉炒面', price: '7.55' },
  { id: 'C2', name: 'CHICKEN OR PORK EGG FOO YOUNG', chinese: '鸡肉或猪肉芙蓉蛋', price: '7.55' },
  { id: 'C3', name: 'CHICKEN OR PORK LO MEIN', chinese: '鸡肉或猪肉捞面', price: '7.55' },
  { id: 'C4', name: 'SWEET & SOUR CHICKEN OR PORK', chinese: '糖醋鸡或糖醋猪肉', price: '7.55' },
  { id: 'C5', name: 'SWEET & SOUR SHRIMP', chinese: '糖醋虾', price: '7.95' },
  { id: 'C6', name: 'BARBECUED SPARE RIBS', chinese: '烤排骨', price: '7.95' },
  { id: 'C7', name: 'BONELESS RIBS', chinese: '无骨排骨', price: '7.95' },
  { id: 'C8', name: 'PEPPER STEAK W. ONION', chinese: '洋葱胡椒牛排', price: '7.75' },
  { id: 'C9', name: 'BEEF W. BROCCOLI', chinese: '西兰花牛肉', price: '7.75' },
  { id: 'C10', name: 'CHICKEN W. BROCCOLI', chinese: '西兰花鸡肉', price: '7.75' },
  { id: 'C11', name: 'SHRIMP W. BROCCOLI', chinese: '虾仁西兰花', price: '7.95' },
  { id: 'C12', name: 'ROAST PORK W. BROCCOLI', chinese: '西兰花烤猪肉', price: '7.55' },
  { id: 'C13', name: 'SHRIMP W. LOBSTER SAUCE', chinese: '龙虾酱虾', price: '7.95' },
  { id: 'C14', name: 'MOO GOO GAI PAN', chinese: '蘑菇鸡片', price: '7.55' },
  { id: 'C15', name: 'SHRIMP W. CHINESE VEGETABLES', chinese: '虾仁炒蔬菜', price: '7.95' },
  { id: 'C16', name: 'CHICKEN W. MIX VEGETABLES', chinese: '鸡肉什锦蔬菜', price: '7.55' }
]

// Limited lunch items array (L1-L16) - static array to avoid Vue DOM issues
const limitedLunchItems = [
  { id: 'L1', name: 'Chicken or Roast Pork Chow Mein', chinese: '雞或叉燒炒麵', price: '5.50' },
  { id: 'L2', name: 'Shrimp or Beef Chow Mein', chinese: '蝦或牛炒麵', price: '5.50' },
  { id: 'L3', name: 'Chicken or Roast Pork Lo Mein', chinese: '雞或叉燒撈麵', price: '5.50' },
  { id: 'L4', name: 'Shrimp or Beef Lo Mein', chinese: '蝦或牛撈麵', price: '5.50' },
  { id: 'L5', name: 'Beef With Broccoli', chinese: '芥蘭牛', price: '5.50' },
  { id: 'L6', name: 'Chicken With Broccoli', chinese: '芥蘭雞', price: '5.50' },
  { id: 'L7', name: 'Shrimp With Broccoli', chinese: '芥蘭蝦', price: '5.50' },
  { id: 'L8', name: 'Roast Pork With Broccoli', chinese: '芥蘭叉燒', price: '5.50' },
  { id: 'L9', name: 'Pepper Steak With Onion', chinese: '青椒牛', price: '5.50' },
  { id: 'L10', name: 'Roast Pork With Chinese Vegs', chinese: '叉燒炒菜', price: '5.50' },
  { id: 'L11', name: 'Moo Goo Gai Pan', chinese: '蘑菇雞', price: '5.50' },
  { id: 'L12', name: 'Shrimp With Chinese Vegs', chinese: '蝦炒菜', price: '5.50' },
  { id: 'L13', name: 'Beef With Chinese Vegs', chinese: '牛炒菜', price: '5.50' },
  { id: 'L14', name: 'Sweet & Sour Chicken or Pork', chinese: '甜酸雞或豬', price: '5.50' },
  { id: 'L15', name: 'Chicken With Cashew Nuts', chinese: '腰果雞', price: '5.50' },
  { id: 'L16', name: 'Beef With Snow Peas', chinese: '雪豆牛', price: '5.50' }
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

// Basic initialization after DOM mount
onMounted(async () => {
  // Privacy-focused browser detection for analytics purposes
  // These browsers commonly block Google Analytics tracking
  try {
    let isPrivacyBrowser = false;
    let browserName = 'Unknown';
    
    // Check for Brave browser
    const isBrave = (navigator.brave && await navigator.brave.isBrave()) || false;
    if (isBrave) {
      isPrivacyBrowser = true;
      browserName = 'Brave';
    }
    
    // Check for other privacy-focused browsers via User Agent
    const userAgent = navigator.userAgent;
    
    // Safari with Enhanced Tracking Protection (most Safari users have this enabled)
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome') && !userAgent.includes('Chromium')) {
      isPrivacyBrowser = true;
      browserName = 'Safari';
    }
    
    // Firefox (Enhanced Tracking Protection is default since v69)
    if (userAgent.includes('Firefox')) {
      isPrivacyBrowser = true;
      browserName = 'Firefox';
    }
    
    // DuckDuckGo Browser
    if (userAgent.includes('DuckDuckGo')) {
      isPrivacyBrowser = true;
      browserName = 'DuckDuckGo';
    }
    
    // Tor Browser (based on Firefox)
    if (userAgent.includes('Tor') || userAgent.includes('torbrowser')) {
      isPrivacyBrowser = true;
      browserName = 'Tor';
    }
    
    // Edge with tracking prevention (when in strict mode, but we'll log all Edge users)
    if (userAgent.includes('Edg/')) {
      isPrivacyBrowser = true;
      browserName = 'Edge';
    }
    
    // Opera (when ad blocker is enabled, but we'll log all Opera users)
    if (userAgent.includes('OPR/') || userAgent.includes('Opera')) {
      isPrivacyBrowser = true;
      browserName = 'Opera';
    }
    
    console.log(`Privacy browser detected: ${isPrivacyBrowser} (${browserName})`);
    
    // Store the result for potential analytics use
    window.isPrivacyBrowserDetected = isPrivacyBrowser;
    window.detectedBrowserName = browserName;
    
    // Log privacy-focused browser users to database
    if (isPrivacyBrowser) {
      await logPrivacyBrowserUser(browserName);
    }
  } catch (error) {
    console.log('Privacy browser detection failed');
    console.warn('Error detecting privacy browser:', error);
    window.isPrivacyBrowserDetected = false;
    window.detectedBrowserName = 'Unknown';
  }

  // Make function globally available for debugging
  window.debugToggleLunch = () => {
    handleToggleLunchItems()
  }
  window.debugToggleCombo = () => {
    handleToggleComboItems()
  }
})

// Function to log privacy-focused browser users to database
const logPrivacyBrowserUser = async (browserName) => {
  try {
    console.log(`Attempting to log ${browserName} user via proxy`);
    
    // Use the Nuxt proxy API route to avoid mixed content issues
    const response = await fetch('/api/log-brave-proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        action: 'log_privacy_browser_user',
        browserName: browserName
      })
    });
    
    console.log('Proxy response status:', response.status, response.statusText);
    
    if (response.ok) {
      const result = await response.json();
      console.log(`${browserName} user logged successfully via proxy:`, result);
    } else {
      const errorText = await response.text();
      console.warn(`Failed to log ${browserName} user via proxy:`, response.status, response.statusText, errorText);
    }
  } catch (error) {
    console.warn(`Error logging ${browserName} user via proxy:`, error);
    console.warn('Error details:', error.message, error.name);
  }
}

// Apple MapKit configuration - completely isolated from Vue reactivity
const mapLoaded = ref(false)
const mapContainer = ref(null) // Template ref for map container
let mapInstance = null // Plain variable, not reactive
const APPLE_MAPS_API_KEY = 'eyJraWQiOiJHS0NQSzQ0RldDIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiI2R002RDUzMjNFIiwiaWF0IjoxNzU3Nzg4NDM5LCJvcmlnaW4iOiJoYXBweWZhbWlseW9rLmNvbSJ9.uOKILgzEfCHQ8JVBCcmoSorKyj7eFNIoWtE03M_oQNipmgeiRQ5QYvwH2w37lPPUcEN3Fyh-OR6ncUaW58ljcA'

// Debug function to decode JWT header - FIXED
const debugJWT = (token) => {
  try {
    const parts = token.split('.')
    if (parts.length !== 3) {
      console.error('Invalid JWT format - expected 3 parts, got:', parts.length)
      return null
    }
    
    const header = JSON.parse(atob(parts[0]))
    const payload = JSON.parse(atob(parts[1]))
    
    console.log('JWT Header:', header)
    console.log('JWT Payload:', payload)
    
    const now = Math.floor(Date.now() / 1000)
    console.log('Current timestamp:', now)
    console.log('Token issued at:', payload.iat)
    
    // Check if token has expiration
    if (payload.exp) {
      console.log('Token expires at:', payload.exp)
      console.log('Token is valid:', now >= payload.iat && now <= payload.exp)
      return { header, payload, isValid: now >= payload.iat && now <= payload.exp }
    } else {
      // No expiration field - check if issued time is valid and not in future
      const isValid = payload.iat && now >= payload.iat
      console.log('Token has no expiration field')
      console.log('Token is valid (no expiration):', isValid)
      return { header, payload, isValid }
    }
    
  } catch (error) {
    console.error('Error decoding JWT:', error)
    return null
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

// Navigate to home and scroll to top
const navigateToHome = () => {
  // Navigate to root path to clear URL
  navigateTo('/')
  // Also scroll to top for better UX
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Navigate to menus page
const navigateToMenus = () => {
  navigateTo('/menus')
}

// Initialize Apple MapKit
const initializeMap = async () => {
  console.log('Initializing Apple Maps...')
  
  if (!process.client) {
    console.log('Not on client side, skipping map initialization')
    return
  }

  const mapElement = mapContainer.value
  if (!mapElement) {
    console.error('Map container ref not available')
    return
  }

  if (!APPLE_MAPS_API_KEY || APPLE_MAPS_API_KEY === 'YOUR_API_KEY_HERE') {
    console.warn('Apple Maps API key not configured')
    showMapError('Map requires API key configuration')
    return
  }

  try {
    // Check if MapKit script is already loaded or being loaded
    const existingScript = document.querySelector('script[src*="mapkit.js"]')
    
    // Load the complete MapKit JS library directly
    if (!window.mapkit || !window.mapkit.Map) {
      if (!existingScript) {
        console.log('Loading MapKit JS library...')
        await new Promise((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js'
          script.crossOrigin = 'anonymous'
          script.onload = () => {
            console.log('MapKit JS library loaded successfully')
            resolve()
          }
          script.onerror = (error) => {
            console.error('Failed to load MapKit JS library:', error)
            reject(error)
          }
          document.head.appendChild(script)
        })
      } else {
        console.log('MapKit script already exists, waiting for it to load...')
        // Wait for existing script to load
        await new Promise((resolve) => {
          const checkLoaded = () => {
            if (window.mapkit && window.mapkit.Map) {
              resolve()
            } else {
              setTimeout(checkLoaded, 100)
            }
          }
          checkLoaded()
        })
      }
    }
    
    // Give it a moment to initialize all libraries
    setTimeout(() => {
      initMapKit()
    }, 500)
    
  } catch (error) {
    console.error('Error loading Apple Maps:', error)
    showMapError('Error loading Apple Maps')
  }
}

const showMapError = (message) => {
  console.log('Showing map error:', message)
  
  // Set map as "loaded" first to hide loading indicator and prevent Vue reactivity issues
  mapLoaded.value = true
  
  // Use a safer approach for DOM updates
  setTimeout(() => {
    const mapElement = mapContainer.value
    if (mapElement && mapElement.isConnected && mapElement.parentNode) {
      try {
        // Create a simple fallback display
        const errorDiv = document.createElement('div')
        errorDiv.className = 'flex items-center justify-center h-full text-center p-4'
        errorDiv.innerHTML = `
          <div>
            <p class="text-red-600 mb-2">${message}</p>
            <p class="text-sm text-gray-500">Unable to load Apple Maps</p>
            <div class="mt-4 space-y-2">
              <button onclick="window.location.reload()" class="block mx-auto px-4 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                Retry
              </button>
              <div class="text-sm text-gray-600 mt-2">
                <p>1219 E. Alameda St</p>
                <p>Norman, OK, 73071</p>
              </div>
            </div>
          </div>
        `
        
        // Clear existing content safely
        while (mapElement.firstChild) {
          mapElement.removeChild(mapElement.firstChild)
        }
        
        mapElement.appendChild(errorDiv)
        
      } catch (domError) {
        console.error('Error updating map element:', domError)
        // Fallback: just show a simple text
        if (mapElement) {
          mapElement.textContent = 'Map loading failed. Location: 1219 E. Alameda St, Norman, OK, 73071'
        }
      }
    }
  }, 100) // Small delay to ensure DOM is stable
}

const initMapKit = () => {
  console.log('Initializing MapKit...')
  
  try {
    if (!window.mapkit) {
      console.error('MapKit not available on window object')
      showMapError('MapKit library not loaded')
      return
    }

    console.log('MapKit available, checking if already initialized...')
    console.log('MapKit version:', window.mapkit.version)
    console.log('MapKit.Map available:', typeof window.mapkit.Map)
    
    // Check if Map constructor is available
    if (!window.mapkit.Map) {
      console.error('MapKit.Map constructor not available')
      showMapError('MapKit Map library not fully loaded')
      return
    }
    
    // Check if MapKit is already initialized
    if (window.mapkit.isConfigured === true) {
      console.log('MapKit already configured, creating map directly')
      createMap()
      return
    }

    console.log('Initializing MapKit with API key...')
    console.log('API key length:', APPLE_MAPS_API_KEY.length)
    
    // Debug the JWT token
    const jwtDebug = debugJWT(APPLE_MAPS_API_KEY)
    if (!jwtDebug || !jwtDebug.isValid) {
      console.error('JWT token appears to be invalid or expired')
      showMapError('Invalid or expired API key. Please check your Apple MapKit JWT token.')
      return
    }
    
    // Track if map creation has been attempted to prevent multiple calls
    let mapCreationAttempted = false
    
    // Initialize MapKit with better error handling
    try {
      window.mapkit.init({
        authorizationCallback: (done) => {
          console.log('Authorization callback triggered')
          
          try {
            // Call done with the JWT token
            done(APPLE_MAPS_API_KEY)
            console.log('Authorization callback completed successfully')
            
            // Wait for MapKit to process the auth and create map
            setTimeout(() => {
              console.log('Post-auth delayed check - MapKit.isConfigured:', window.mapkit.isConfigured)
              if (!mapCreationAttempted) {
                mapCreationAttempted = true
                console.log('Attempting map creation after auth...')
                createMap()
              }
            }, 2000) // Longer delay to ensure full initialization
            
          } catch (authError) {
            console.error('Error in authorization callback:', authError)
            showMapError('Authentication failed: ' + authError.message)
          }
        },
        language: 'en'
      })
      
      console.log('MapKit.init() called successfully')
      
    } catch (initError) {
      console.error('Error during mapkit.init():', initError)
      showMapError('Failed to initialize MapKit: ' + initError.message)
      return
    }

    // Final fallback timeout
    setTimeout(() => {
      console.log('Final timeout check - MapKit.isConfigured:', window.mapkit.isConfigured)
      console.log('MapKit.Map available:', typeof window.mapkit.Map)
      
      if (!mapCreationAttempted && window.mapkit.Map) {
        console.log('Timeout reached, attempting to create map anyway...')
        mapCreationAttempted = true
        createMap()
      } else if (!mapCreationAttempted) {
        console.error('MapKit failed to initialize after timeout')
        showMapError('MapKit failed to initialize properly')
      }
    }, 15000) // Longer timeout for full initialization

  } catch (error) {
    console.error('Error initializing MapKit:', error)
    showMapError('Error initializing MapKit: ' + error.message)
  }
}

const createMap = () => {
  console.log('Creating map...')
  
  try {
    const mapElement = mapContainer.value
    if (!mapElement) {
      console.error('Map container ref not available when creating map')
      showMapError('Map container element not found')
      return
    }

    if (!window.mapkit) {
      console.error('MapKit not available when creating map')
      showMapError('MapKit library not available')
      return
    }

    console.log('MapKit state:', {
      isConfigured: window.mapkit.isConfigured,
      version: window.mapkit.version,
      Map: typeof window.mapkit.Map,
      Coordinate: typeof window.mapkit.Coordinate
    })

    // Clear any existing content and remove loading indicator
    mapElement.innerHTML = ''

    // Create coordinate for restaurant location
    // 1219 E. Alameda St, Norman, OK, 73071 - Happy Family Restaurant
    const latitude = 35.219572    // Correct Google coordinates for Happy Family Restaurant
    const longitude = -97.4219136
    console.log(`Creating map with coordinates: ${latitude}, ${longitude}`)

    if (!window.mapkit.Coordinate) {
      console.error('MapKit coordinate classes not available')
      showMapError('MapKit coordinate system not available')
      return
    }

    if (!window.mapkit.Map) {
      console.error('MapKit Map constructor not available')
      showMapError('MapKit Map constructor not available')
      return
    }

    const coordinate = new window.mapkit.Coordinate(latitude, longitude)

    // Create the map with proper configuration
    console.log('Creating map instance...')
    
    mapInstance = new window.mapkit.Map(mapElement, {
      center: coordinate,
      region: new window.mapkit.CoordinateRegion(
        coordinate,
        new window.mapkit.CoordinateSpan(0.01, 0.01)
      ),
      mapType: window.mapkit.Map.MapTypes.Standard,
      showsMapTypeControl: false,
      showsZoomControl: true,
      showsUserLocationControl: false,
      isRotationEnabled: false,
      isScrollEnabled: true,
      isZoomEnabled: true,
      showsCompass: window.mapkit.FeatureVisibility.Hidden
    })

    console.log('Map instance created successfully')

    // Wait for map to be ready before adding annotations
    setTimeout(() => {
      try {
        // Add a marker for the restaurant location
        const restaurantCoordinate = new window.mapkit.Coordinate(latitude, longitude)
        const annotation = new window.mapkit.MarkerAnnotation(restaurantCoordinate, {
          title: 'Happy Family Restaurant',
          subtitle: '1219 E. Alameda St, Norman, OK 73071\nHeisman Square Shopping Center',
          color: '#dc2626'
        })

        mapInstance.addAnnotation(annotation)
        console.log('Marker added to map')

        // Set the map as loaded using setTimeout and nextTick to fully isolate from Vue's update cycle
        setTimeout(() => {
          nextTick(() => {
            try {
              mapLoaded.value = true
              console.log('Map loading completed successfully')
            } catch (error) {
              console.error('Error setting map loaded state:', error)
            }
          })
        }, 100)
      } catch (annotationError) {
        console.error('Error adding annotation:', annotationError)
        // Map created successfully even if annotation fails
        setTimeout(() => {
          nextTick(() => {
            try {
              mapLoaded.value = true
            } catch (error) {
              console.error('Error setting map loaded state after annotation error:', error)
            }
          })
        }, 100)
      }
    }, 1000)

  } catch (error) {
    console.error('Error creating map:', error)
    showMapError('Error creating map: ' + error.message)
  }
}

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Watch for mobile menu state changes to control body scroll
watch(isMobileMenuOpen, (isOpen) => {
  if (process.client) {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

// Close menu on escape key
const handleEscapeKey = (event) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Setup event listeners on mount
onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)
  
  // Initialize Apple Maps with proper DOM ready check
  nextTick(() => {
    setTimeout(() => {
      console.log('DOM ready, initializing map...')
      initializeMap()
    }, 500)
  })
})

// Cleanup on unmount
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscapeKey)
  document.body.style.overflow = ''
  
  // Cleanup map instance
  if (mapInstance) {
    try {
      mapInstance.destroy()
    } catch (error) {
      console.warn('Error destroying map:', error)
    }
    mapInstance = null
  }
})
</script>

<script>
export default {
  mounted() {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const header = document.querySelector('header');
      const currentScrollY = window.scrollY;
      
      if (header) {
        // Add background opacity and shadow on scroll
        if (currentScrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          // Scrolling down - hide navbar
          header.style.transform = 'translateX(-50%) translateY(-100%)';
        } else {
          // Scrolling up - show navbar
          header.style.transform = 'translateX(-50%) translateY(0)';
        }
      }
      
      lastScrollY = currentScrollY;
    };
    
    // Wait for the next tick to ensure DOM is fully rendered
    this.$nextTick(() => {
      const header = document.querySelector('header');
      if (header) {
        // Ensure the header starts in the correct position
        header.style.transform = 'translateX(-50%) translateY(0)';
        
        // Add mouse enter/leave handlers for the repositioning behavior
        header.addEventListener('mouseenter', () => {
          header.style.transform = 'translateX(-50%) translateY(0)';
        });
      }
      
      window.addEventListener('scroll', handleScroll);
    });
    
    // Store the cleanup function
    this._scrollCleanup = () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },
  
  beforeUnmount() {
    // Clean up the scroll listener
    if (this._scrollCleanup) {
      this._scrollCleanup();
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Mobile menu animation */
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

/* Ensure mobile menu appears above other elements */
nav[v-show] {
  z-index: 60;
}

/* Center navbar horizontally */
.navbar-center {
  transform: translateX(-50%);
}
.navbar-center {
  transform: translateX(-50%) translateY(0);
}

header {
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
}

/* Scrolled state - glass effect with transparency */
header.scrolled {
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

/* Default transparent state */
header:not(.scrolled) {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%) !important;
  backdrop-filter: blur(10px) !important;
}

/* Smooth scroll behavior for anchor links */
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
}

/* Ensure fixed header doesn't cover content when clicking anchor links */
[id] {
  scroll-margin-top: 120px;
}

/* MSG Badge with crossed-out effect */
.msg-badge-crossed {
  position: relative;
  border-radius: 9999px; /* rounded-full equivalent */
  background: transparent !important; /* Make background transparent */
  border: 2px solid rgba(22, 163, 74, 0.7); /* Green border with slight transparency for blur effect */
  filter: blur(0.5px); /* Slight blur on the border */
}

.msg-badge-crossed::before,
.msg-badge-crossed::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 46%, rgba(22, 163, 74, 0.8) 48%, rgba(22, 163, 74, 0.8) 52%, transparent 54%);
  pointer-events: none;
  z-index: 1;
  border-radius: 9999px; /* Match parent's rounded shape */
  filter: blur(0.5px); /* Slight blur on the X lines */
}

.msg-badge-crossed::after {
  background: linear-gradient(-45deg, transparent 46%, rgba(22, 163, 74, 0.8) 48%, rgba(22, 163, 74, 0.8) 52%, transparent 54%);
  filter: blur(0.5px); /* Slight blur on the X lines */
}

.msg-badge-crossed > * {
  position: relative;
  z-index: 10; /* Higher z-index to ensure text is in front */
  filter: none; /* Remove any blur from text */
}

/* Apple MapKit Styles */
.mapkit-map {
  border-radius: 0 0 0.5rem 0.5rem;
}

/* Hero image - prevent dragging but keep other interactions */
.hero-image {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: auto;
}

/* Loading animation */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Lunch items transition animations */
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