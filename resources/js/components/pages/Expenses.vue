<template>
  <div>

    {{categories}}
    
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
    }
  },
  name: 'Expenses',
  components: {modal},
  computed: mapGetters(['categories','allExpenses']),
  methods: {
    ...mapActions([
      'fetchAllCategories',
      'fetchAllExpenses',
    ])
  },
  created() {
    this.fetchAllCategories()
    //this.fetchAllExpenses()
  },
}
</script>

<style>

</style>