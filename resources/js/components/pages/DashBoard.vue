<template>
  <div>
    <!-- Header Section-->
    <section class="dashboard-header section-padding">
        <div class="container-fluid">
            <div id="dash_err"></div>
            <div class="row d-flex align-items-md-stretch">
                <!-- Pie Chart-->
                <div class="col-lg-3 col-md-6">
                    <div class="card project-progress">
                    <h2 class="display h4">My Expenses</h2>
                    <h2 class="display h4">Categories</h2>
                    <div class="pie-chart">
                        <canvas id="pieChart" width="300" height="300"> </canvas>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  </div>
</template>

<script>

import { mapActions,mapGetters } from 'vuex'

export default {
  
  data (){
    return {
      value: '',
    }
  },
  name: 'DashBoard',
  computed: { 
    ...mapGetters(['AllExpenses']),
  },
  methods: {

    ...mapActions(['fetchExpenses']),

    renderChart () {

      if(this.value.length){

        let labels = []
        let data = []    
        for(let x = 0;x < this.value.length;x++) {
          labels = [...labels,`${this.value[x]['category']} $${this.value[x]['amount']}`]
          data = [...data,this.value[x]['amount']]
        }

        var brandPrimary = '#33b35a'
        var PIECHART = $('#pieChart')
        var myPieChart = new Chart(PIECHART, {
            type: 'doughnut',
            data: {
                labels,
                datasets: [
                    {
                        data,
                        borderWidth: [1, 1, 1],
                        backgroundColor: [
                            brandPrimary,
                            "rgba(75,192,192,1)",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            brandPrimary,
                            "rgba(75,192,192,1)",
                            "#FFCE56"
                        ]
                    }
                ]
            }
        })

    }


    }

  },
  created() {

    //cant access mapGetters value here so i will getch it manually
    //this.fetchExpenses()

    axios.get(`/api/dashboard`).then(res => {
      this.value = JSON.parse(Base64.decode(res.data))
      this.renderChart()
    })

  }
}
</script>

<style>

</style>