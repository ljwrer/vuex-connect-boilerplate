<template>
  <div>
    <button @click="handleClick">add</button>
    <div>{{count}}</div>
  </div>
</template>

<script>
import bus from '@/bus'
import event from '@/mixin/event'
export default {
  name: 'test-button',
  mixins: [event],
  methods: {
    handleClick () {
      bus.$emit('click')
    }
  },
  data () {
    return {
      count: 0
    }
  },
  created () {
    this.addEvent(bus, 'click', () => {
      this.count++
    })
  }
}
</script>

<style scoped>

</style>
