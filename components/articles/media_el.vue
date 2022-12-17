<template lang="pug">
.articles-media( ref='observe')
  .articles-media_background(v-if='!!background')
    img(:src='background')
  img(v-if='type === "image"' :src='media' ali='image' :class='className')
  LottieAnimation(v-else ref='anim' :animationData='media' :autoplay='false')
</template>

<script setup>

import { ref, onMounted } from 'vue'

const props = defineProps({
  media: { type: [Object, String], required: true },
  className: { type: String, default: '' },
  type: { type: String, default: 'image' },
  background: { type: String, default: '' }
})

const anim = ref(null)
const observe = ref(null)

const options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        !!anim.value && anim.value.play()
      } else {
        !!anim.value && anim.value.stop()
      }
    })
  }, options)
  !!observe.value && observer.observe(observe.value)
})

</script>

<style lang="sass" scoped>
.articles-media
  width: 100%
  height: 100%
  margin-left: em(20, 16)
  &_background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: -1
  img
    width: inherit
    height: 100%
    object-fit: contain
  :deep(svg)
    position: relative
    top: em(30 ,16)
  @media only screen and (max-width: 576px)
    margin-left: 0
    :deep(svg)
      top: 0
.animate1
  animation: media1 20s linear infinite
  position: relative
  top: em(20, 16)
  @media only screen and (max-width: 576px)
    img
      height: 75vw

@keyframes media1
  0%
    transform: translate(0, 0) rotate(0)
  12%
    transform: translate(10px, 0) rotate(2deg)
  25%
    transform: translate(10px, 5px) rotate(3deg)
  33%
    transform: translate(5px, 10px) rotate(2deg)
  50%
    transform: translate(0, 10px) rotate(0)
  66%
    transform: translate(-5px, 10px) rotate(2deg)
  75%
    transform: translate(-10px, 5px) rotate(3deg)
  87%
    transform: translate(-5px, 0) rotate(2deg)
  100%
    transform: translate(0, 0) rotate(0)
</style>