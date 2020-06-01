<template>
   <div>
       <Nav/>
       <div class="page">
           <Header/>
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
            loggedIn: localStorage.getItem('loggedIn')
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