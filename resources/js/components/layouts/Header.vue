<template>
  <!-- navbar-->
    <header class="header">
    <nav class="navbar">
        <div class="container-fluid">
        <div class="navbar-holder d-flex align-items-center justify-content-between">
            <div class="navbar-header"><a id="toggle-btn" href="#" class="menu-btn"><i class="icon-bars"> </i></a><a href="/" class="navbar-brand">
                <div class="brand-text d-none d-md-inline-block"><strong class="text-primary">Dashboard</strong></div></a></div>
            <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                        
                <li class="nav-item"><a href="#" class="nav-link logout"> <span class="d-none d-sm-inline-block">Welcome to Expense Manager</span></a></li>

                <li class="nav-item"><a href="#" @click="logout" class="nav-link logout"> <span class="d-none d-sm-inline-block">{{logoutText}}</span><i class="fa fa-sign-out"></i></a></li>
                
            </ul>
        </div>
        </div>
    </nav>
    </header>

</template>

<script>
export default {
  name: 'Header',
  props:['logoutText'],
  methods: {

    logout() {

        axios.post('/api/logout').then(res => {
            localStorage.removeItem('loggedIn')
            localStorage.removeItem('role')
            this.$router.push({ name: 'Login' })
        })
    }
  }
}
</script>

<style>

</style>