<template lang="pug">
nav.articles-nav
  ul.articles-nav_list.container
    li.articles-nav_list-item(v-for='item, idx in tab' :key='idx' @click='change_button(idx)' :id='item.id' :class='[+active === +idx && "active"]') {{item.title}}
</template>

<script setup>

import { ref, watch } from 'vue'
const emit = defineEmits(['change'])
const props = defineProps({
  tab: { type: Array, default: [] },
  activeIndex: { type: Number, default: 0 }
})
const active = ref(0)
const change_button = idx => {
  active.value = idx
  emit('change', idx)
}
watch(() => props.activeIndex, () => change_button(props.activeIndex), { deep: true, immediate: true })

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