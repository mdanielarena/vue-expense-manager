<template>
  <div>
    <div class="card">
      <div class="card-header"><h4>Expenses</h4></div>
      <div class="card-body">
          <div class="table-responsive">
          <table class="table table-striped table-hover">
              <thead>
                  <tr>
                      <th>Expenses</th>
                      <th>Amount</th>
                      <th>Date</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(expense,x) in allExpenses" :key="x" @click="showUpdate(expense.id,expense.ec_id,expense.name,expense.amount,expense.entry_date)">
                    <td>{{expense.name}}</td>
                    <td>{{expense.amount}} USD</td>
                    <td>{{expense.entry_date}}</td>
                  </tr>
              </tbody>
          </table>
          </div>
      </div>
    </div>
  
    <div class="col-lg-4 col-md-6">
      <b-button id="show-btn" class="btn btn-primary" @click="showExpense">Add Expense</b-button>
    </div>

    <modal>
          
      <h4 slot="modal-title">{{modalTitle}}</h4>
      
      <template v-slot:modal-body>
        <div v-html="modalBody"></div>
        <div class="form-group">
          <label for="example-datepicker">Choose a date</label>
          <b-form-datepicker id="datepicker" v-model="date" class="mb-2"></b-form-datepicker>
        </div>
      </template>

      <template v-slot:modal-footer>
        <div v-if="actionType === 'add' ">
            <b-button variant="success" block @click="saveExpense()">Save</b-button>
            <b-button variant="outline-primary" block @click="$bvModal.hide('global-modal')">Cancel</b-button>
        </div>
        <div v-else>
            <b-button variant="danger" block @click="deleteExpenseAction()">Delete</b-button>
            <b-button variant="success" block @click="updateExpenseAction()">Update</b-button>
            <b-button variant="outline-primary" block @click="$bvModal.hide('global-modal')">Cancel</b-button>
        </div>
      </template>

    </modal>
    
  </div>
</template>

<script>

import modal from  '../layouts/Modals'
import { mapActions,mapGetters } from 'vuex'

export default {
  data () {
    return {
      actionType: '',
      modalTitle: '',
      modalBody: '',
      actionType: '',
      date: '',
      id: '',
      name: '',
      amount: '',
      entry_date: '',
      ec_id: '',
    }
  },
  name: 'Expenses',
  components: {modal},
  computed: mapGetters(['categories','allExpenses']),
  methods: {

    ...mapActions([
      'fetchAllCategories',
      'fetchAllExpenses',
      'addExpense',
      'deleteExpense',
      'updateExpense'
    ]),

    showExpense () {

      this.modalTitle = 'Add Expenses'
      this.actionType = 'add'

      let html  = ''
          html += `
              <form>
                  <div class="form-group">
                      <label for="sel1">Select Activity:</label>
                          <select class="form-control" id="ec_id">`
                          for(let x = 0;x < this.categories.length;x++) {    
          html +=             `<option value="${this.categories[x].id}">${this.categories[x].name}</option>`
                          }
          html += `
                          </select>
                  </div>
                  <div class="form-group">
                      <label for="name">Amount:</label>
                      <input type="number" class="form-control" id="amount" required  name="amount">
                  </div>                  
              </form>`
        
      this.modalBody   = html
      this.$bvModal.show('global-modal')

    },

    saveExpense() {

      let postData = {
        amount: document.getElementById('amount').value,
        ec_id: document.getElementById('ec_id').value,
        date: this.date
      }

      this.addExpense(postData)
    },

    showUpdate (id,ec_id,name,amount,entry_date) {

      this.id = id
      this.ec_id = ec_id
      this.name = name
      this.amount = amount
      this.entry_date = entry_date
      this.actionType = "update"

      let html  = ''
          html += `
              <form>
                  <div class="form-group">
                      <label for="sel1">Select Activity:</label>
                          <select class="form-control" id="ec_id">`
                          for(let x = 0;x < this.categories.length;x++) {    
          html +=             `<option value="${this.categories[x].id}" target="${this.categories[x].name}">${this.categories[x].name}</option>`
                          }
          html += `
                          </select>
                  </div>
                  <div class="form-group">
                      <label for="name">Amount:</label>
                      <input type="number" class="form-control" id="amount" required  name="amount" value="${amount}">
                  </div>                  
              </form>`
      
      this.modalBody   = html
      this.$bvModal.show('global-modal')
    },

    updateExpenseAction() {

      let data = {
        id: this.id,
        name: document.getElementById('ec_id').getAttribute('target'),
        ec_id: document.getElementById('ec_id').value,
        amount: document.getElementById('amount').value,
        entry_date: this.date
      }
      
      this.updateExpense(data)
      this.$bvModal.hide('global-modal')

    },

    deleteExpenseAction () {

      let data = {id: this.id}
      this.deleteExpense(data)
      this.$bvModal.hide('global-modal')

    }

  },
  created() {
    this.fetchAllCategories()
    this.fetchAllExpenses()
  },
}
</script>

<style>

</style>