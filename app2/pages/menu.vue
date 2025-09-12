<template>
    <div>
        <!-- This page redirects to home -->
        <p>Route has been deprecated. Redirecting...</p>
    </div>
</template>

<script>
export default {
    mounted() {
        // Redirect to home page since routing has changed
        this.$router.replace('/')
    }
}
</script>

<style>

</style>