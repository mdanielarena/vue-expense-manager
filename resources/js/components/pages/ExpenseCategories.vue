<template>
  <div>
      <div class="card">
        <div class="card-header"><h4>Expense Categories</h4></div>
        <div class="card-body">
            <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="(categories,x) in allCategories" :key="x" @click="showUpdate(categories.id,categories.name,categories.description)">
                    <td>{{categories.name}}</td>
                    <td>{{categories.description}}</td>
                  </tr>
                </tbody>
            </table>
            </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <b-button id="show-btn" class="btn btn-primary" @click="showAdd">Add Categories</b-button>
      </div>

      <!-- <div class="col-lg-4 col-md-6">
        <b-button id="show-btn" class="btn btn-primary" @click="getUser">Get User</b-button>
      </div> -->

      <modal>
        
        <h4 slot="modal-title">{{modalTitle}}</h4>
        
        <template v-slot:modal-body><div v-html="modalBody"></div></template>

        <template v-slot:modal-footer>
          <div v-if="actionType === 'add' ">
              <b-button variant="success" block @click="saveCategory()">Save</b-button>
              <b-button variant="outline-primary" block @click="$bvModal.hide('global-modal')">Cancel</b-button>
          </div>
          <div v-else>
              <b-button variant="danger" block @click="deleteCategoryAction()">Delete</b-button>
              <b-button variant="success" block @click="updateCategoryAction()">Update</b-button>
              <b-button variant="outline-primary" block @click="$bvModal.hide('global-modal')">Cancel</b-button>
          </div>
        </template>

      </modal>

  </div>
</template>

<script>

import modal from '../layouts/Modals'
import { mapActions,mapGetters } from 'vuex'

export default {

  data () {
    return {
      actionType: '',
      modalTitle: '',
      modalBody: '',
      id: '',
      name: '',
      description: '',
    }
  },
  name: 'ExpenseCategories',
  computed: mapGetters(['allCategories']),
  methods: {
    ...mapActions([
      'fetchCategories',
      'addCategory',
      'deleteCategory',
      'updateCategory'
    ]),

    // laravelSanctum () {
      
    //   axios.get(`/sanctum/csrf-cookie`).then(response => {
          
    //       axios.post(`/login`,{username: 'qwe', password: 'qwee'}).then(response => {
    //         console.log(response.data)
    //       }).catch( error => console.log(error))

    //   });

    // },

    // getUser () {
    //   axios.get(`/api/user`).then(response => {
    //         console.log(response.data)
    //   }).catch( error => console.log(error))
    // },

    showAdd() {

      this.actionType = 'add'

      let html  = ''
          html += `
          <form>
              <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" class="form-control" id="name" required  name="name">
              </div>
              <div class="form-group">  
                  <label for="name">Description:</label>
                  <input type="text" class="form-control" id="description" required name="description">
              </div>
          </form>`
      
      this.modalTitle  = 'Add Category'
      this.modalBody   = html
      this.$bvModal.show('global-modal')
    },

    saveCategory() {

      let postData = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
      }

      this.addCategory(postData)
      document.getElementById('name').value = ""
      document.getElementById('description').value = ""
      
    },

    showUpdate(id,name,description) {

      this.actionType = 'update'
      this.id = id
      this.name = name
      this.description = description
      
      let html  = ''
          html += `
          <form>
              <input type="hidden" id="id" value="${id}">
              <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" class="form-control" id="name" required  name="name" value="${name}">
              </div>
              <div class="form-group">  
                  <label for="name">Description:</label>
                  <input type="text" class="form-control" id="description" required name="description" value="${description}">
              </div>
          </form>`
      
      this.modalTitle  = 'Update Category'
      this.modalBody   = html
      this.$bvModal.show('global-modal')

    },

    updateCategoryAction() {

      let postData = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        description: document.getElementById('description').value
      }

      this.updateCategory(postData)
      this.$bvModal.hide('global-modal')
    },

    deleteCategoryAction() {

      let postData = { id: this.id }
      this.deleteCategory(postData)
      this.$bvModal.hide('global-modal')

    },

  },
  components: {modal},
  created () {
    this.fetchCategories()
  }
}
</script>

<style>

</style>