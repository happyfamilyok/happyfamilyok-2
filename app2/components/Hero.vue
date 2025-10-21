<template>
    <div>
 <div class="w-full h-screen relative min-h-screen overflow-hidden flex flex-col items-center bg-[url(/assets/img_light_gradient_08.png)] bg-stretch bg-center bg-no-repeat">
              <!--  <header class="fixed top-4 left-1/2 w-11/12 max-w-[1440px] bg-global-5 shadow-md border border-solid border-transparent bg-[linear-gradient(180deg,#ffffff_0%,_#ffffff00_100%)] rounded-[50px] px-4 sm:px-6 lg:px-8 py-0 sm:py-5 lg:py-[0px] z-50 transition-all duration-300 backdrop-blur-md navbar-center">
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
                            </div>
                           Mobile Menu Button
                            <button @click="toggleMobileMenu" class="block lg:hidden p-2" aria-label="Toggle menu"><svg
                                    class="w-6 h-6 text-global-1 transition-transform duration-200" :class="{ 'rotate-90': isMobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg></button>
                                 -->
                           <!-- <nav class="hidden lg:block w-full lg:w-auto">
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
                                    </div>
                                    <button @click="showAllMenu"
                                        class="flex flex-col items-center lg:items-start text-center lg:text-left cursor-pointer"><span
                                            class="text-[12px] sm:text-[13px] lg:text-[14px] font-roboto font-medium leading-[15px] sm:leading-[16px] lg:leading-[17px] text-global-1 hover:text-global-4 transition-colors duration-200 uppercase">VIEW
                                            ALL MENU</span><span
                                            class="text-[11px] sm:text-[12px] lg:text-[13px] font-roboto font-normal leading-[14px] sm:leading-[15px] lg:leading-[16px] text-global-1 hover:text-global-4 transition-colors duration-200">查看所有菜单</span></button>
                                    <a href="https://www.doordash.com/store/happy-family-chinese-restaurant-norman-36737771/82709946/?preview=1" ref="nofollow" type="button" class="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50">ORDER ONLINE <i class="fa-solid fa-arrow-right"></i></a>                               
                                </div>
                            </nav>-->
                            <!-- Mobile Navigation Menu -->
                            <!--
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
                                        <a href="https://www.doordash.com/store/happy-family-chinese-restaurant-norman-36737771/82709946/?preview=1" ref="nofollow" type="button" class="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50">ORDER ONLINE <i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </nav>-->

                
                <!-- All Menu Sections Card View -->
                <!--
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
                </div>-->
                
                <!-- Mobile menu overlay -->
                <!--
                <div v-if="isMobileMenuOpen" @click="closeMobileMenu" class="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"></div>-->
                <div class="flex flex-col lg:flex-row justify-between items-start px-8 lg:px-16 mt-32 gap-12">
                    <div class="flex-1 p-6 rounded-xl w-full items-start relative min-h-[600px]">
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
            </div>
    </div>
</template>

<script>
export default {
    name: "Hero"
}
</script>

<style scoped>
h1 {
    color: blue;
}
</style>