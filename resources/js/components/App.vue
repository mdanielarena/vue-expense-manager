<template>
   <div>
       <Nav/>
       <div class="page">
           <Header v-bind:logoutText="logoutText"/>
           <router-view/>
           <Footer/>
        </div>
   </div>
</template>

<script>

import Nav from './layouts/Nav'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

export default {
    data() {
        return {
            loggedIn: localStorage.getItem('loggedIn'),
            logoutText: 'Logout'
        }
    },
    components: {
        Nav,
        Header,
        Footer,
    },

    mounted() {
        
    }
}
</script>

<style scoped>
 
</style>