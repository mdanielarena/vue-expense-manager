<template>
  <div>
      <div class="page login-page">
        <div class="container">
            <div class="form-outer text-center d-flex align-items-center">
                <div class="form-inner">
                    <div class="logo text-uppercase"><strong class="text-primary">Expense Manager</strong></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <form class="text-left form-validate">
                    <div class="form-group-material">
                        <input type="text" id="username" name="username" required data-msg="Please enter your username" class="input-material">
                        <label for="login-username" class="label-material">Username</label>
                    </div>
                    <div class="form-group-material">
                        <input id="password" type="password" name="password" required data-msg="Please enter your password" class="input-material">
                        <label for="login-password" class="label-material">Password</label>
                    </div>
                    <div class="form-group text-center">
                        <input id="register" type="button"  @click="authenticate" value="Login" class="btn btn-primary">
                    </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>

import { mapActions,mapGetters } from 'vuex'

export default {
   name: 'Login',
   computed: mapGetters(['authUser']),
   methods: {

       ...mapActions(['postLogin','authUserAction']),

       authenticate () {

           axios.get(`/sanctum/csrf-cookie`).then(response1 => {

                let postData = {
                    username: document.getElementById('username').value,
                    password: document.getElementById('password').value,
                }

                axios.post('/api/login',postData).then(response2 => {
                    if(response2.data) { 
                       localStorage.setItem('role',response2.data.role_id)
                       localStorage.setItem('loggedIn','true')
                       this.$router.push({name: 'Dashboard'})
                    }
                })
                .catch(err => console.log(err))

           });

       },
   },
   created () {
       this.authUserAction()
   },
}
</script>

<style>

</style>
