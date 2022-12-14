<template lang="pug">
nav.articles-nav
  ul.articles-nav_list.container 
    li.articles-nav_list-item(v-for='item, idx in tab' :key='idx' :class='[+idx === +active && "active"]')
      a.articles-nav_list-link(:href='`#${item.to}`') {{item.title}}
</template>

<script setup>

const props = defineProps({
  tab: { type: Array, default: [] },
  active: { type: Number }
})

</script>

<style lang="sass" scoped>
.articles-nav
  border-bottom: 1px solid rgba(255, 255, 255, .13)
  &_list
    align-items: center
    justify-content: space-between
    &-item
      flex: 1
      padding: 1em 0
      font: font(20, 24, 400, 'Roboto Flex')
      color: rgba(255, 255, 255, .4)
      position: relative
      display: block
      cursor: pointer
      &.active
        color: $white
        .articles-nav_list-link
          color: inherit
    &-link
      color: inherit

</style>