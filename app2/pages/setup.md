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

    <!-- Banner Widget-->
   <!-- <div class="z-999 relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
  <div aria-hidden="true" class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl">
    <div style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" class="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
  </div>
  <div aria-hidden="true" class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl">
    <div style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" class="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
  </div>
  <div class="flex flex-wrap items-center gap-x-4 gap-y-2 animate__rubberBand">
    <p class="text-sm/6 text-gray-900">
      <strong class="font-semibold"><i class="fa-duotone fa-solid fa-bullhorn"></i>COMING SOON: We've officially partnered with Doordash to Deliver Your Favorite Meals.</strong><br/>Pay with any major credit card or Apple Pay delivered right to your door!
    </p>
  </div>
  <div class="flex flex-1 justify-end">
    <button type="button" class="-m-3 p-3 focus-visible:-outline-offset-4">
      <span class="sr-only">Dismiss</span>
      <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 text-gray-900">
        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
      </svg>
    </button>
  </div>
</div>-->

<style>
@keyframes pulseZoom {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}
</style>


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

// --- Extract Dish Name ---
const extractDishName = (element) => {
  try {
    let dishName = ''

    // Method 1: Look for bold/medium text
    const dishNameElement = element.querySelector('.font-bold, .font-semibold, .font-medium')
    if (dishNameElement) {
      dishName = dishNameElement.textContent.trim()
    }

    // Method 2: Fallback to text elements
    if (!dishName) {
      const textElements = element.querySelectorAll('p, span, div')
      for (const textEl of textElements) {
        const text = textEl.textContent.trim()
        if (text && !text.includes('$') && !text.includes('价格') && text.length > 3) {
          dishName = text
          break
        }
      }
    }

    // Method 3: Fallback to entire element
    if (!dishName) {
      dishName = element.textContent.trim()
    }

    // Cleanup
    dishName = dishName
      .replace(/\s+/g, ' ')
      .replace(/^\w+\./g, '')
      .replace(/\$[\d.]+/g, '')
      .replace(/\d+\.\d+/g, '')
      .replace(/小\s*SM|大\s*LG|ORDER|均码/g, '')
      .replace(/配.*$/g, '')
      .trim()

    return dishName
  } catch (error) {
    console.error('Error extracting dish name:', error)
    return 'Unknown Dish'
  }
}

// --- Ask AI via Nuxt API Proxy ---
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

    console.log('=== Dish Info from AI ===')
    console.log('Dish:', dishName)
    console.log('AI Response:', result)
    console.log('=========================')

    // Optional: show in UI (simple alert for now)
    alert(`Dish: ${dishName}\n\nAI says: ${JSON.stringify(result.aiResponse)}`)
  } catch (error) {
    console.error('Error asking AI about dish:', error)
  }
}

// --- Handle Menu Item Click ---
const handleMenuItemClick = async (event) => {
  try {
    const element = event.currentTarget || event.target
    const dishName = extractDishName(element)

    if (dishName && dishName !== 'Unknown Dish') {
      await askAIAboutDish(dishName)
    }
  } catch (error) {
    console.error('Error handling menu item click:', error)
  }
}

// --- Attach to menu items (optional if not using Vue events) ---
onMounted(() => {
  document.querySelectorAll('.menu-item').forEach((item) => {
    item.addEventListener('click', handleMenuItemClick)
  })
})
</script>

<!-- makes it so that it extracts the dish name -->

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
}  */

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