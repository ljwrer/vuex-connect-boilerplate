<template>
  <i class="dump-drop-button fas fa-eraser" @click="handleClick"></i>
</template>

<script>
export default {
  name: 'DumpDropButton',
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
<style>
.dump-drop-button{
  margin-left: 10px;
  cursor: pointer;
}
</style>
