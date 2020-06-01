<template>
   <div>
        <div class="card">
            <div class="card-header"><h4>Roles</h4></div>
            <div class="card-body">
                <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Display Name</th>
                            <th>Description</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(role, x) in allRoles" :key="x" @click="showUpdate(role.id,role.name,role.description)">
                            <td>{{role.name}}</td>
                            <td>{{role.description}}</td>
                            <td>{{role.created_at}}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        
        <div class="col-lg-4 col-md-6">
            <b-button id="show-btn" class="btn btn-primary" @click="showAdd">Add Role</b-button>
        </div>

        <modal>
          
          <h4 slot="modal-title">{{modalTitle}}</h4>
          
          <template v-slot:modal-body><div v-html="modalBody"></div></template>

          <template v-slot:modal-footer>
            <div v-if="actionType === 'add' ">
                <b-button variant="success" block @click="saveRole()">Save</b-button>
                <b-button variant="outline-primary" block @click="$bvModal.hide('global-modal')">Cancel</b-button>
            </div>
            <div v-else>
                <b-button variant="danger" block @click="deleteRoleAction()">Delete</b-button>
                <b-button variant="success" block @click="updateRoleAction()">Update</b-button>
                <b-button variant="outline-primary" block @click="$bvModal.hide('global-modal')">Cancel</b-button>
            </div>
         </template>

        </modal>
   </div>
</template>

<script>

import modal from '../layouts/Modals'
import { mapGetters,mapActions } from 'vuex'

export default {

    name: 'Roles',
    data () {
        return {
            id: '',
            name: '',
            description: '',
            modalTitle: '',
            modalBody: '',
            modalFooter: '',
            actionType: '',
        }
    },
    components: { modal },
    computed: mapGetters(['allRoles']),
    methods: {

        ...mapActions(['fetchAllRoles','addRole','deleteRole','updateRole']),

        showUpdate(id,name,description) {

            this.actionType = 'update'

            if(id !== 1) {

                let html  = ''
                    html += `
                    <form>
                        <div class="form-group">
                            <label for="name">Display Name:</label>
                            <input type="text" class="form-control" id="name" required  name="name" value=${name}>
                        </div>
                        <div class="form-group">  
                            <label for="name">Description:</label>
                            <input type="text" class="form-control" id="description" required name="description" value=${description}>
                        </div>
                    </form>`

                this.id = id
                this.name = name
                this.description = description
                this.modalTitle  = 'Update Role'
                this.modalBody   = html

                this.$bvModal.show('global-modal')

            }

        },

        updateRoleAction() {

            let name = document.getElementById("name").value
            let description = document.getElementById("description").value
            
            this.updateRole(`${this.id},${name},${description}`)
            this.$bvModal.hide('global-modal')

        },

        showAdd() {

            this.actionType = 'add'

            let html  = ''
                html += `
                <form>
                    <div class="form-group">
                        <label for="name">Display Name:</label>
                        <input type="text" class="form-control" id="name" required  name="name">
                    </div>
                    <div class="form-group">  
                        <label for="name">Description:</label>
                        <input type="text" class="form-control" id="description" required name="description">
                    </div>
                </form>`
            
            this.modalTitle  = 'Add Role'
            this.modalBody   = html
            this.$bvModal.show('global-modal')
        },

        saveRole () {

            let postData = {
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,   
            }
            
            this.addRole(postData)
            document.getElementById("name").value = "" 
            document.getElementById("description").value = ""
            this.$bvModal.hide('global-modal')
            
        },

        deleteRoleAction() { // it shouldnt be the same name method of mapActions
            this.deleteRole(this.id)
            this.$bvModal.hide('global-modal')
        },
    
    },
    created() {

        this.fetchAllRoles()
      
    }

}
</script>

<style>

</style>