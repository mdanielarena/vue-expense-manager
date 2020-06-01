<template>
  <div>
        <div class="card">
            <div class="card-header"><h4>Users</h4></div>
            <div class="card-body">
                <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(users,x) in allUsers" :key="x" @click=showUpdate(users.id,users.username,users.email,users.role_id,users.name)>
                            <td>{{users.username}}</td>
                            <td>{{users.email}}</td>
                            <td>{{users.name}}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="userAdd()">Add User</button>
        </div>

        <modal>
          
          <h4 slot="modal-title">{{modalTitle}}</h4>
          
          <template v-slot:modal-body><div v-html="modalBody"></div></template>

          <template v-slot:modal-footer>
                <div v-if="actionType === 'add' ">
                    <b-button variant="success" block @click="saveUser()">Save</b-button>
                    <b-button variant="outline-primary" block @click="$bvModal.hide('global-modal')">Cancel</b-button>
                </div>
                <div v-else>
                    <b-button variant="danger" block @click="deleteUserction()">Delete</b-button>
                    <b-button variant="success" block @click="updateUserAction()">Update</b-button>
                    <b-button variant="outline-primary" block @click="$bvModal.hide('global-modal')">Cancel</b-button>
                </div>
         </template>

        </modal>

   </div>
</template>

<script>

import { mapActions,mapGetters } from 'vuex'
import modal from '../layouts/Modals'

export default {
 name: 'Users',
 data (){
    return {
       modalTitle: '',
       modalBody: '',
       roles: [],
       actionType: '',
       id: '',
       username: '',
       email: '',
       role_id: '',
       name: '',
    }
 },
 components: {modal},
 computed: mapGetters(['allUsers','userRoles']),
 methods: {

    ...mapActions([
        'fetchUsers',
        'fetchRoles',
        'addUser',
        'deleteUser',
        'updateUser'
    ]),

    showUpdate(id,username,email,role_id,name) {

        this.id = id
        this.username = username
        this.email = email
        this.role_id = role_id
        this.name = name

        this.modalTitle = "Update User"

        if(role_id !== 1) {

            let html  = ''
                html += `
                    <form>
                        <input type="hidden" id="id" value="${id}">
                        <input type="hidden" id="name" value="${name}">
                        <div class="form-group">
                            <label for="name">User Name:</label>
                            <input type="text" class="form-control" id="username" required  name="username" value="${username}">
                        </div>
                        <div class="form-group">
                            <label for="name">Email:</label>
                            <input type="email" class="form-control" id="email" required  name="email" value="${email}">
                        </div>
                        <div class="form-group">
                            <label for="sel1">Select Role:</label>
                                <select class="form-control" id="role">`
                                for(let x = 0;x < this.userRoles.length;x++) {    
                html +=             `<option value="${this.userRoles[x].id}">${this.userRoles[x].name}</option>`
                                }
                html += `
                                </select>
                        </div>
                    </form>`
        
            this.modalBody   = html
            this.$bvModal.show('global-modal')
            //document.getElementById("role").value = 2
        }
        
    },

    updateUserAction() {

        let postData = {
            id: document.getElementById("id").value,
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            role_id: document.getElementById("role").value,
            name: document.getElementById("name").value,   
        }

        this.updateUser(postData)
        this.$bvModal.hide('global-modal')
    },

    deleteUserction() {
        const postData = { id: this.id}
        this.deleteUser(postData)
        this.$bvModal.hide('global-modal')
    },

    userAdd() {

        this.actionType = 'add',
        this.modalTitle = "Add User"
        let html  = ''
            html += `
                <form>
                    <div class="form-group">
                        <label for="name">User Name:</label>
                        <input type="text" class="form-control" id="username" required  name="username">
                    </div>
                    <div class="form-group">
                        <label for="name">Email:</label>
                        <input type="email" class="form-control" id="email" required  name="email">
                    </div>
                    <div class="form-group">  
                        <label for="name">Password:</label>
                        <input type="password" class="form-control" id="password" required name="password">
                    </div>
                    <div class="form-group">
                        <label for="sel1">Select Role:</label>
                            <select class="form-control" id="role">`
                            for(let x = 0;x < this.userRoles.length;x++) {    
            html +=             `<option value="${this.userRoles[x].id}">${this.userRoles[x].name}</option>`
                            }
            html += `
                            </select>
                    </div>
                </form>`
        
        this.modalBody   = html
        this.$bvModal.show('global-modal')
    },
    saveUser () {

        let postData = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,   
            password: document.getElementById("password").value,   
            role: document.getElementById("role").value,   
        }

        this.addUser(postData)
        document.getElementById("username").value = "" 
        document.getElementById("email").value = "" 
        document.getElementById("password").value = "" 
        this.$bvModal.hide('global-modal')
    }
 },
 mounted () {
    this.fetchRoles()
 },
 created() {
    this.fetchUsers()
 }

}
</script>

<style>

</style>