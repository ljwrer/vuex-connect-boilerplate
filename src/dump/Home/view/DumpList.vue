<template>
  <aside class="menu" v-if="data.length">
    <p class="menu-label">
      选中项
    </p>
    <transition-group name="list-complete" tag="ul" class="menu-list">
      <li v-for="item in data" :key="item" class="list-complete-item"><a>{{item}}</a></li>
      <li class="list-complete-item" key="draw"><button class="button is-primary" @click="handleClick">画图</button></li>
    </transition-group>
  </aside>
</template>

<script>
export default {
  name: 'DumpList',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick () {
      this.$emit('draw')
    }
  }
}
</script>
<style>
  .list-complete-item {
    transition: all 1s;
    margin-right: 10px;
  }
  .list-complete-enter{
    opacity: 0;
    transform: translateX(-30px);
  }
  .list-complete-leave-to{
    opacity: 0;
    transform: translateX(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
</style>
