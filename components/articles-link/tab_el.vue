<template lang="pug">
nav.articles-nav
  ul.articles-nav_list.container 
    li.articles-nav_list-item(v-for='item, idx in tab' :key='idx' :class='[+idx === +activeIndex && "active"]' @click='change(item.index)') {{item.title}}
</template>

<script setup>

const props = defineProps({
  tab: { type: Array, default: [] },
  activeIndex: { type: Number }
})
const emit = defineEmits(['changeIndex'])
const change = idx => { 
  emit('changeIndex', idx)
  const main = document.querySelector('main')
  const article = [...document.querySelector('main').children]
  const height = article[0].offsetHeight
  main.style.transform = `translateY(${-height * idx}px)`
}

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
  @media only screen and (max-width: 576px)
    &_list
      padding: 0
      &-item
        font: font(14, 24, 400, 'Roboto Flex')
        text-align: center
        &:first-child
          padding-left: 20px
        &:last-child
          padding-right: 20px
        &::before
          content: ''
          position: absolute
          left: 0
          bottom: 0
          width: 100%
          height: 2px
          background: $orange
          opacity: 0
        &.active
          &::before
            opacity: 1
</style>