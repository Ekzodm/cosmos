<template lang="pug">
section.articles
  ArticlesTabEl(:tab='tab' @change='tab_value' :activeIndex='active')
  transition(name='fade' mode='out-in')
    .articles-wrapper(v-if='index === 0')
      .articles-background(v-if='!!background')
        img(:src='background' alt='background')
      .container
        .articles-wrapper_content
          slot(name='content_1')
      .articles-wrapper_media
        slot(name='media_1')
    .articles-wrapper(v-else)
      .container
        .articles-wrapper_content
          slot(name='content_2')
      .articles-wrapper_media
        slot(name='media_2')
</template>

<script setup>

import { ref } from 'vue'

const emit = defineEmits(['progress'])
const props = defineProps({
  tab: { type: Array, default: [] },
  percent: { type: String, default: '0%' },
  background: { type: String, default: '' },
  active: { type: Number, default: 0 }
})
const index = ref(0)
const tab_value = data => {
  index.value = data
  emit('progress', data)
}

</script>

<style lang="sass" scoped>
.articles
  height: 100vh
  position: relative
  overflow: hidden
  &-wrapper
    display: flex
    align-items: center
    &_content
      width: 100%
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
</style>