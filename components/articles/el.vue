<template lang="pug">
section.articles(ref='article')
  ArticlesTabEl(:tab='tab' @change='tab_value' :activeIndex='active')  
  transition(name='fade')
    .articles-wrapper(v-show='index === 0')
      .articles-background(v-if='!!background')
        img(:src='background' alt='background')
      .container
        .articles-wrapper_content
          slot(name='content_1')
      .articles-wrapper_media
        slot(name='media_1')
  transition(name='fade')
    .articles-wrapper(v-show='index===1')
      .container
        .articles-wrapper_content
          slot(name='content_2')
      .articles-wrapper_media
        slot(name='media_2')
</template>

<script setup>

import { ref, onMounted, inject } from 'vue'

const emit = defineEmits(['progress'])
const screen_width = inject('screen_width')
const props = defineProps({
  tab: { type: Array, default: [] },
  percent: { type: String, default: '0%' },
  background: { type: String, default: '' },
  active: { type: Number, default: 0 }
})
const index = ref(0)
const article = ref(null)
const tab_value = data => {
  index.value = data
  emit('progress', data)
}

</script>

<style lang="sass" scoped>
.articles
  height: 100vh
  position: relative
  z-index: 10
  overflow: hidden
  &-wrapper
    display: flex
    align-items: center
    height: calc(100vh - em(65, 16))
    &_content
      width: 100%
      height: inherit
      margin-top: em(-100, 16)
    &_media
      position: absolute
      right: 0
      display: flex
      justify-content: center
      width: 50%
      height: 100%
  &-background
    position: absolute
    z-index: -1
    width: 100%
    left: 0
    img
      width: 100%
  @media only screen and (max-width: 576px)
    height: auto
    overflow-y: visible
    overflow-x: hidden
    .container
      flex-direction: column
      order: 3
    &-wrapper
      flex-direction: column
      height: auto
      &_content
        margin-top: 0
      &_media
        position: relative
        width: 100%

</style>