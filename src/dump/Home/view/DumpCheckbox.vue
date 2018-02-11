<template>
  <i @click="handleClick" class="dump-checkbox far" :class="className"></i>
</template>

<script>
export default {
  name: 'DumpCheckbox',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    id: {
      type: [Number, String]
    }
  },
  computed: {
    className () {
      return this.checked ? 'fa-check-square' : 'fa-square'
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', this.id)
    }
  }
}
</script>
<style>
  .dump-checkbox{
    cursor: pointer;
  }
</style>
