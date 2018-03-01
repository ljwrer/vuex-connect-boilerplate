<template>
  <div class="container">
    <h1 class="title">Home</h1>
    <div class="notification">
      <div class="columns">
        <div class="column is-two-thirds">
          <home-table/>
        </div>
        <div class="column auto">
          <home-list/>
        </div>
      </div>
    </div>
    <div class="box">
      <home-chart class="chart"/>
    </div>
  </div>
</template>

<script>
import {view as HomeView} from '@/dump/Home'
export default {
  name: 'PageHome',
  components: {
    HomeChart: HomeView.SmartChart,
    HomeTable: HomeView.SmartTable,
    HomeList: HomeView.SmartList
  },
  async mounted () {
    await this.$store.dispatch('entities/home/init')
    this.$store.commit('entities/home/draw')
  }
}
</script>
<style>
.chart{
  height: 400px;
}
</style>
