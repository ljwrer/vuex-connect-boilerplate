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
    <button @click="showBtn=!showBtn">toggle</button>
    <test-button v-for="i in 100" v-if="showBtn"/>
  </div>
</template>

<script>
import {view as HomeView} from '@/dump/Home'
import event from '@/mixin/event'
import TestButton from './TestButton'
export default {
  name: 'PageHome',
  mixins: [event],
  components: {
    HomeChart: HomeView.SmartChart,
    HomeTable: HomeView.SmartTable,
    HomeList: HomeView.SmartList,
    TestButton
  },
  async mounted () {
    await this.$store.dispatch('entities/home/init')
    this.$store.commit('entities/home/draw')
  },
  data () {
    return {
      showBtn: true
    }
  }
}
</script>
<style>
.chart{
  height: 400px;
}
</style>
