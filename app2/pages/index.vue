<template>
  <div>
<!--- 
# Alert Banner
<div v-if="isPriceBannerVisible" class="z-999 relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
  <div aria-hidden="true" class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl">
    <div style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" class="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
  </div>
  <div aria-hidden="true" class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl">
    <div style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" class="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
  </div>
  <div class="flex flex-wrap items-center gap-x-4 gap-y-2 animate__rubberBand">
    <a href="https://www.doordash.com/store/happy-family-chinese-restaurant-norman-36737771/82709946/"><p class="text-sm/6 text-gray-900">
      <strong class="font-semibold"><i class="fa-duotone fa-solid fa-bullhorn"></i> Prices on this website reflect the in store menu &mdash; Doordash prices may vary. </strong>
    </p></a>
  </div>
  <div class="flex flex-1 justify-end">
    <button type="button" class="-m-3 p-3 focus-visible:-outline-offset-4" @click="isPriceBannerVisible = false">
      <span class="sr-only">Dismiss</span>
      <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 text-gray-900">
        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
      </svg>
    </button>
  </div>
</div>-->



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
                                            href="/altmenu#kids-menu"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">KIDS
                                                MENU</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">儿童菜单</span></a><a
                                            href="/altmenu#lunch-special"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">LUNCH
                                                SPECIAL</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">午餐特价</span></a><a
                                            href="/altmenu#appetizers"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">APPETIZERS</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">开胃菜</span></a><a
                                            href="/altmenu#soup"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">SOUP</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">汤</span></a><a
                                            href="/altmenu#fried-rice"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">FRIED
                                                RICE</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">炒饭</span></a><a
                                            href="/altmenu#chow-mein"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">CHOW
                                                MEIN</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">炒面</span></a><a
                                            href="/altmenu#lo-mein"
                                            class="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"><span
                                                class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-text-4 transition-colors duration-200 uppercase">LO
                                                MEIN</span><span
                                                class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-text-4 transition-colors duration-200">捞面</span></a>
                                    </div>
                                    <NuxtLink to="/altmenu"
                                        class="flex flex-col items-center lg:items-start text-center lg:text-left cursor-pointer"><span
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-4 transition-colors duration-200 uppercase">VIEW
                                            ALL MENU</span><span
                                            class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-4 transition-colors duration-200">查看所有菜单</span></NuxtLink>
                                    <NuxtLink to="/order" class="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50">ORDER ONLINE <i class="fa-solid fa-arrow-right"></i></NuxtLink>                               
                                </div>
                            </nav>
                            <!-- Mobile Navigation Menu -->
                            <nav v-show="isMobileMenuOpen" class="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 mx-4 z-50 transition-all duration-300 animate-in slide-in-from-top-2">
                                <div class="p-6">
                                    <div class="flex flex-col gap-4">
                                        <a @click="closeMobileMenu" href="/altmenu#kids-menu" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">KIDS MENU</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">儿童菜单</span>
                                        </a>
                                        <a @click="closeMobileMenu" href="/altmenu#lunch-special" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">LUNCH SPECIAL</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">午餐特价</span>
                                        </a>
                                        <a @click="closeMobileMenu" href="/altmenu#appetizers" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">APPETIZERS</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">开胃菜</span>
                                        </a>
                                        <a @click="closeMobileMenu" href="/altmenu#soup" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">SOUP</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">汤</span>
                                        </a>
                                        <a @click="closeMobileMenu" href="/altmenu#fried-rice" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">FRIED RICE</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">炒饭</span>
                                        </a>
                                        <a @click="closeMobileMenu" href="/altmenu#chow-mein" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">CHOW MEIN</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">炒面</span>
                                        </a>
                                        <a @click="closeMobileMenu" href="/altmenu#lo-mein" class="flex flex-col items-center text-center gap-1 py-3 px-4 border-b border-gray-200/30 hover:bg-gray-50/50 rounded-lg transition-colors duration-200">
                                            <span class="text-[14px] font-roboto font-medium text-global-1 hover:text-global-text-4 uppercase">LO MEIN</span>
                                            <span class="text-[12px] font-roboto font-normal text-global-1/80 hover:text-global-text-4">捞面</span>
                                        </a>
                                        <NuxtLink to="/altmenu" @click="closeMobileMenu" class="flex flex-col items-center text-center gap-1 py-4 px-4 bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 rounded-lg transition-colors duration-200 border border-red-200/50 cursor-pointer">
                                            <span class="text-[14px] font-roboto font-medium text-red-600 hover:text-red-700 uppercase">VIEW ALL MENU</span>
                                            <span class="text-[12px] font-roboto font-normal text-red-600/80 hover:text-red-700">查看所有菜单</span>
                                        </NuxtLink>
                                        <NuxtLink to="/order" class="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50">ORDER ONLINE <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                
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
                            <p class="mt-1">Monday - Saturday ( 11:00 AM - 9:00 PM )</p>
                            <p>Sunday ( 12:00 PM - 9:00 PM )</p>
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
                <div
                    class="review-badge review-badge--right fixed right-6 top-1/3 z-40"
                    :class="{ 'review-badge--off': isPastFold }"
                    :aria-hidden="isPastFold">
                    <a href="https://www.yelp.com/biz/happy-family-chinese-restaurant-norman" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="block transition-all duration-300 hover:scale-110"
                       aria-label="Visit our Yelp page"
                       :tabindex="isPastFold ? -1 : 0">
                        <div class="bg-red-500/80 rounded-xl p-4 shadow-lg flex flex-col items-center text-white cursor-pointer hover:bg-red-600/90 hover:shadow-xl transition-all duration-300">
                            <p class="text-sm">We're on yelp!</p>
                            <img v-show="!pauseReviewGifs" src="/assets/link/yelp (1).gif" alt="yelp qr"
                                class="w-20 sm:w-40 sm:h-50 h-30 mt-2" />
                        </div>
                    </a>
                </div>
                <div
                    class="review-badge review-badge--left fixed left-6 top-1/3 z-40"
                    :class="{ 'review-badge--off': isPastFold }"
                    :aria-hidden="isPastFold">
                    <a href="https://www.tripadvisor.com/Restaurant_Review-g51547-d4706231-Reviews-Happy_Family_Chinese_Restaurant-Norman_Oklahoma.html" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="block transition-all duration-300 hover:scale-110"
                       aria-label="Visit our TripAdvisor page"
                       :tabindex="isPastFold ? -1 : 0">
                        <div class="bg-red-500/80 rounded-xl p-4 shadow-lg flex flex-col items-center text-white cursor-pointer hover:bg-red-600/90 hover:shadow-xl transition-all duration-300">
                            <p class="text-sm">We're on Tripadvisor!</p>
                            <img v-show="!pauseReviewGifs" src="/assets/link/yelp (2).gif" alt="Tripadvisor qr"
                                class="w-20 sm:w-40 sm:h-50 h-30 mt-2" />
                        </div>
                    </a>
                </div>
<a id="floating-phone"
   href="tel:405-366-0786"
   class="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-600 transition-transform duration-200 z-[9999] animate-[pulseZoom_1.2s_ease-in-out_infinite]">
    <!--<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
         stroke-linecap="round" stroke-linejoin="round"
         class="text-white text-2xl" height="1em" width="1em"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
                 19.79 19.79 0 0 1-8.63-3.07 
                 19.5 19.5 0 0 1-6-6 
                 19.79 19.79 0 0 1-3.07-8.67
                 A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
                 12.84 12.84 0 0 0 .7 2.81 
                 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6
                 l1.27-1.27a2 2 0 0 1 2.11-.45
                 12.84 12.84 0 0 0 2.81.7
                 A2 2 0 0 1 22 16.92z"></path>
    </svg>-->
    <i class="fa-sharp fa-solid fa-phone text-2xl text-white"></i>
</a>

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
                                            <span>405-366-0786</span><span> / </span><span>405-366-0784</span></p>
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

                <div class="relative isolate overflow-hidden bg-white">
    <div class="px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Looking to save? Phone in your order directly with us and skip the commission fees!</h2>
        <p class="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-red-600"><i class="fa-solid fa-triangle-exclamation"></i>Prices between call in menu and online menu differ!</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink to="/altmenu" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Click here to view the Call-In menu.</NuxtLink>
        </div>
      </div>
    </div>
    <svg viewBox="0 0 1024 1024" class="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
      <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fill-opacity="0.7" />
      <defs>
        <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
          <stop stop-color="#7775D6" />
          <stop offset="1" stop-color="#E935C1" />
        </radialGradient>
      </defs>
    </svg>
  </div>



  <div class="flex h-dvh flex-col bg-white">
    <header class="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3">
      <NuxtLink
        to="/"
        class="text-sm font-semibold text-gray-900 hover:text-gray-600"
      >
        ← Happy Family
      </NuxtLink>
      <a
        href="https://www.doordash.com/store/happy-family-chinese-restaurant-norman-36737771/82709946/"
        target="_blank"
        rel="nofollow noopener"
        class="text-sm text-gray-500 hover:text-gray-900"
      >
        Open in DoorDash
      </a>
    </header>
    <div class="min-h-0 flex-1">
      <ClientOnly>
        <OnlineOrderEmbed />
        <template #fallback>
          <div class="grid h-full place-items-center text-center text-gray-500">
            Loading online ordering…
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>

  <FeaturableReviews />

            </div>
        </div>
    </div>
  </div>
</template>
<style>
@keyframes pulseZoom {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

.review-badge {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.45s ease, visibility 0s linear 0s;
}

.review-badge--off {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.45s ease, visibility 0s linear 0.6s;
}

.review-badge--right.review-badge--off {
  transform: translateX(calc(100% + 2rem));
}

.review-badge--left.review-badge--off {
  transform: translateX(calc(-100% - 2rem));
}
</style>
<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Price banner dismiss state
const isPriceBannerVisible = ref(true)

// Hide Yelp / TripAdvisor badges after scrolling past the fold
const isPastFold = ref(false)
const pauseReviewGifs = ref(false)
const REVIEW_BADGE_HIDE_MS = 600
let reviewGifPauseTimer = null

const updatePastFold = () => {
  const pastFold = window.scrollY >= window.innerHeight
  isPastFold.value = pastFold

  if (reviewGifPauseTimer) {
    clearTimeout(reviewGifPauseTimer)
    reviewGifPauseTimer = null
  }

  if (pastFold) {
    reviewGifPauseTimer = setTimeout(() => {
      pauseReviewGifs.value = true
      reviewGifPauseTimer = null
    }, REVIEW_BADGE_HIDE_MS)
  } else {
    pauseReviewGifs.value = false
  }
}

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

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
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
  window.addEventListener('scroll', updatePastFold, { passive: true })
  window.addEventListener('resize', updatePastFold)
  updatePastFold()
  
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
  window.removeEventListener('scroll', updatePastFold)
  window.removeEventListener('resize', updatePastFold)
  if (reviewGifPauseTimer) {
    clearTimeout(reviewGifPauseTimer)
    reviewGifPauseTimer = null
  }
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

</style>
