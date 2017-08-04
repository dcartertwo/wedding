<template lang="pug">
    ul
      li
        router-link(to="/") Home
      li
        router-link(to="/story") Story
      li
        router-link(to="/event") Event
</template>

<script>
  export default {
    name: 'Sidebar',
    data () {
      return {
        msg: 'sidebar'
      }
    }
  }
</script>
<style lang="stylus" scoped>

</style>