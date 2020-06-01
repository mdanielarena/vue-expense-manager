<template>
   
     <!-- Side Navbar -->
    <nav class="side-navbar">
        <div class="side-navbar-wrapper">
            <!-- Sidebar Header    -->
            <div class="sidenav-header d-flex align-items-center justify-content-center">
                <!-- User Info-->
                <div class="sidenav-header-inner text-center"><a href="pages-profile.html"><img src="img/avatar-7.jpg" alt="person" class="img-fluid rounded-circle"></a>
                <h2 class="h5">{{email}}</h2><span>ROLE</span> 
                </div>
                <!-- Small Brand information, appears on minimized sidebar-->
                <div class="sidenav-header-logo"><a href="index.html" class="brand-small text-center"> <strong>B</strong><strong class="text-primary">D</strong></a></div>
            </div>
            <!-- Sidebar Navigation Menus-->
            <div class="main-menu">
                
                <ul id="side-main-menu" class="side-menu list-unstyled">                  
                <li><a href="/"> <i class="icon-home"></i>Home</a></li>
                
                    <li><a href="#formsDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-form"></i>User Management</a>
                        <ul id="formsDropdown" class="collapse list-unstyled ">
                        <li><router-link to="/roles">Roles</router-link></li>
                        <li><router-link to="/users">Users</router-link></li>
                        </ul>
                    </li>
                
                <li><a href="#chartsDropdown" aria-expanded="false" data-toggle="collapse"> <i class="fa fa-bar-chart"></i>Expense Management </a>
                    <ul id="chartsDropdown" class="collapse list-unstyled ">
                    
                        <li><a href="/expense-categories">Expense categories</a></li>
                    
                    <li><a href="/expenses">Expenses</a></li>
                    </ul>
                </li>
                
                    <li><a href="#settingsDropdown" aria-expanded="false" data-toggle="collapse"> <i class="fa fa-gear"></i>Settings </a>
                        <ul id="settingsDropdown" class="collapse list-unstyled ">
                        <li><a href="/reset-password">Change Password</a></li>
                        </ul>
                    </li>
                
                </ul>
            </div>
        </div>
        
    </nav>
    
</template>

<script>

export default {
  name: 'Nav',
  data () {
    return {
        email:'',
        roleName:'',
    }
  },
  mounted () {

    axios.get(`/api/user`).then(response => {
        console.log(response.data)
        this.email = response.data.email
        this.roleName = response.data.roleName
    }).catch( error => console.log(error))
    
  },

}
</script>

<style>

</style>