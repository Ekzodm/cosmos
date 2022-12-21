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
const article_observer = () => {
  if(screen_width <= 576) return false
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.99
  }
  const html = document.querySelector('html')
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log(entry.intersectionRatio)
      if (entry.isIntersecting) {
        html.style.overflowY = 'hidden'
        observer.unobserve(entry.target)
      }

    })
  }, options)
  observer.observe(article.value)
}
// onMounted(() => article_observer())

</script>

<style lang="sass" scoped>
.articles
  height: 100vh
  position: relative
  z-index: 10
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
  @media only screen and (max-width: 576px)
    height: auto
    .container
      flex-direction: column
      order: 3
    &-wrapper
      flex-direction: column
      &_media
        position: relative
        width: 100%

</style>