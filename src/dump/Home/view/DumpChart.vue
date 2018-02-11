<template>
  <div class="chart"></div>
</template>

<script>
import _ from 'lodash'
const getChartOption = function (data) {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: data.legend
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: data.yAxis
    },
    series: data.series.map(item => ({
      name: item.name,
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      data: item.data
    }))
  }
}
export default {
  name: 'DumpChart',
  props: {
    index: {
      type: Number,
      required: true
    },
    data: {
      type: Object,
      default: null
    }
  },
  watch: {
    index (newVal, prevVal) {
      if (newVal > prevVal) {
        this.draw()
      }
    }
  },
  mounted () {
    this.draw()
  },
  beforeDestroy () {
    this.destroyChart()
  },
  methods: {
    async draw () {
      if (!_.isNull(this.data)) {
        if (!this.chart) {
          const echarts = await import(/* webpackChunkName: "echarts" */'echarts/lib/echarts')
          require('echarts/lib/chart/bar')
          require('echarts/lib/component/tooltip')
          require('echarts/lib/component/legend')
          require('echarts/lib/component/grid')
          this.chart = echarts.init(this.$el)
        }
        this.chart.setOption(getChartOption(this.data), true)
      }
    },
    destroyChart () {
      if (this.chart) {
        this.chart.dispose()
        this.chart = null
      }
    }
  }
}
</script>
