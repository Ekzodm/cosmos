<template lang="pug">
section.articles
  ArticlesLinkTabEl(:tab='tab' @changeIndex='tab_value' :percent='percent' :activeIndex='active')
  transition(name='fade' mode='out-in')
    .articles-wrapper
      .articles-background(v-if='!!background')
        img(:src='background' alt='background')
      .container
        .articles-wrapper_content
          slot(name='content_1')
      .articles-wrapper_media
        slot(name='media_1')
</template>

<script setup>

const props = defineProps({
  tab: { type: Array, default: [] },
  percent: { type: String, default: '0%' },
  background: { type: String, default: '' },
  active: { type: Number }
})
const emit = defineEmits(['changeIndex'])
const tab_value = data => emit('changeIndex', data)
</script>

<style lang="sass" scoped>
.articles
  height: 100vh
  position: relative
  &-wrapper
    display: flex
    align-items: center
    &_content
      width: 100%
    &_media
      position: absolute
      right: 0
      top: em(50, 16)
      display: flex
      justify-content: center
      width: 50%
      height: 85%
  &-background
    position: absolute
    z-index: -1
    width: 100%
    left: 0
    img
      width: 100%
  @media only screen and (max-width: 576px)
    overflow-y: visible
    overflow-x: hidden
    height: auto
    .container
      flex-direction: column
      order: 3
    &-wrapper
      flex-direction: column
      height: auto
      &_media
        position: relative
        width: 100%
        top: em(10, 16)
</style>