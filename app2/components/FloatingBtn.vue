<template>
    <div>
                <!-- external review links floating on sides -->
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
</template>

<script>
export default {
    name: "FloatingBtn"
}
</script>

<style>

</style>