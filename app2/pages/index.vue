<template>
  <div>
    <Navbar />
    <FloatingBtn />
    <Hero />
    <ContactUs />
    <KidsMenu />
    <Popular />
    <LunchSpecial />
  </div>
</template>



<script>
import Navbar from '~/components/Navbar.vue'
import FloatingBtn from '~/components/FloatingBtn.vue'
import Hero from '~/components/Hero.vue'
import ContactUs from '~/components/ContactUs.vue'
import KidsMenu from '~/components/KidsMenu.vue' 
import Popular from '~/components/Popular.vue'
import LunchSpecial from '~/components/LunchSpecial.vue'
import Appetizers from '~/components/Appetizers.vue'
import Soup from '~/components/Soup.vue'
import FriedRice from '~/components/FriedRice.vue'
import ChowMein from '~/components/ChowMein.vue'
import HotAndSpicy from '~/components/HotAndSpicy.vue'
import LoMein from '~/components/LoMein.vue'
import ChowMaiFun from '~/components/ChowMaiFun.vue'
import EggFooYoung from '~/components/EggFooYoung.vue'
import Beef from '~/components/Beef.vue'
import HotAndSpicy2 from '~/components/HotAndSpicy2.vue'
import Chicken from '~/components/Chicken.vue'
import Pork from '~/components/Pork.vue'
import Seafood from '~/components/Seafood.vue'
import HotAndSpicy3 from '~/components/HotAndSpicy3.vue'
import SpecialCombination from '~/components/SpecialCombination.vue'
import ChefsSpecialties from '~/components/ChefsSpecialties.vue'
import SweetAndSour from '~/components/SweetAndSour.vue'
import MooShu from '~/components/MooShu.vue'
import Vegetables from '~/components/Vegetables.vue'
import Coupons from '~/components/Coupons.vue'

export default {
    name: "IndexPage",
    components: {
        Navbar,
        FloatingBtn,
        Hero,
        ContactUs,
        KidsMenu,
        Popular,
        LunchSpecial,
        Appetizers,
        Soup,
        FriedRice,
        ChowMein,
        HotAndSpicy,
        LoMein,
        ChowMaiFun,
        EggFooYoung,
        Beef,
        HotAndSpicy2,
        Chicken,
        Pork,
        Seafood,
        HotAndSpicy3,
        SpecialCombination,
        ChefsSpecialties,
        SweetAndSour,
        MooShu,
        Vegetables,
        Coupons
    } 
}
</script>