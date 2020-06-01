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

export default {
  name: 'DashBoard'
}
</script>

<style>

</style>