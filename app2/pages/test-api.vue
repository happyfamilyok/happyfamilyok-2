<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Test Brave Logging API</h1>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <div class="flex gap-4 mb-6">
          <button 
            @click="testGet" 
            :disabled="loading"
            class="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-4 py-2 rounded-md transition-colors"
          >
            {{ loading && currentTest === 'get' ? 'Testing...' : 'Test GET Request' }}
          </button>
          
          <button 
            @click="testPost" 
            :disabled="loading"
            class="bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white px-4 py-2 rounded-md transition-colors"
          >
            {{ loading && currentTest === 'post' ? 'Testing...' : 'Test POST Request' }}
          </button>
          
          <button 
            @click="clearResults"
            class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Clear Results
          </button>
        </div>
        
        <div class="bg-gray-50 rounded-md p-4">
          <h3 class="text-lg font-semibold text-gray-700 mb-3">Test Results:</h3>
          <div v-if="results.length === 0" class="text-gray-500 italic">
            No tests run yet. Click a button above to test the API.
          </div>
          <div v-else class="space-y-3">
            <div 
              v-for="(result, index) in results" 
              :key="index"
              class="p-3 rounded border-l-4"
              :class="{
                'bg-green-50 border-green-400': result.success,
                'bg-red-50 border-red-400': !result.success
              }"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="font-medium" :class="result.success ? 'text-green-700' : 'text-red-700'">
                  {{ result.type }} {{ result.success ? 'Success' : 'Error' }}
                </span>
                <span class="text-sm text-gray-500">{{ result.timestamp }}</span>
              </div>
              <pre class="text-sm bg-white p-2 rounded overflow-x-auto" :class="result.success ? 'text-green-800' : 'text-red-800'">{{ result.data }}</pre>
            </div>
          </div>
        </div>
      </div>        <div class="bg-blue-50 rounded-lg p-4">
        <h3 class="text-lg font-semibold text-blue-800 mb-2">API Endpoint Information</h3>
        <p class="text-blue-700 mb-2">
          <strong>Endpoint:</strong> <code class="bg-blue-100 px-2 py-1 rounded">http://107.175.194.17/log-brave-user.php</code>
        </p>
        <p class="text-blue-700 mb-2">
          <strong>Method:</strong> POST (GET will return method not allowed)
        </p>
        <p class="text-blue-700">
          <strong>Purpose:</strong> Logs Brave browser users directly to the database via HTTP endpoint
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Test API - Happy Family',
  meta: [
    { name: 'description', content: 'Test page for Brave user logging API endpoint' }
  ]
})

// Reactive data
const loading = ref(false)
const currentTest = ref('')
const results = ref([])

// Test GET request (should fail with 405 Method Not Allowed)
const testGet = async () => {
  loading.value = true
  currentTest.value = 'get'
  
  try {
    const response = await fetch('http://107.175.194.17/log-brave-user.php', {
      method: 'GET'
    })
    
    const result = await response.json()
    
    addResult('GET', !response.ok, {
      status: response.status,
      statusText: response.statusText,
      data: result
    })
  } catch (error) {
    addResult('GET', false, {
      error: error.message,
      name: error.name
    })
  } finally {
    loading.value = false
    currentTest.value = ''
  }
}

// Test POST request (should succeed)
const testPost = async () => {
  loading.value = true
  currentTest.value = 'post'
  
  try {
    const response = await fetch('http://107.175.194.17/log-brave-user.php', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        action: 'log_brave_user',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      })
    })
    
    const result = await response.json()
    
    addResult('POST', response.ok, {
      status: response.status,
      statusText: response.statusText,
      data: result
    })
  } catch (error) {
    addResult('POST', false, {
      error: error.message,
      name: error.name
    })
  } finally {
    loading.value = false
    currentTest.value = ''
  }
}

// Add result to the list
const addResult = (type, success, data) => {
  results.value.unshift({
    type,
    success,
    data: JSON.stringify(data, null, 2),
    timestamp: new Date().toLocaleTimeString()
  })
}

// Clear all results
const clearResults = () => {
  results.value = []
}
</script>
