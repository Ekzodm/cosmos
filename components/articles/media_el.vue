<template lang="pug">
.articles-media(:class='className' ref='observe')
  .articles-media_background(v-if='!!background')
    img(:src='toggle_image')
  img.articles-media_image(v-if='type === "image"' :src='media' ali='image' )
  LottieAnimation(v-else ref='anim' :animationData='media' :autoplay='false')
</template>

<script setup>

import { ref, onMounted, inject } from 'vue'

const props = defineProps({
  media: { type: [Object, String], required: true },
  className: { type: String, default: '' },
  type: { type: String, default: 'image' },
  background: { type: [String, Array], default: '' }
})
const screen_width = inject('screen_width')
const toggle_image = ref('')
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
  toggle_image.value = Array.isArray(props.background) ? (screen_width.value > 576 ? props.background[0] : props.background[1]) : props.background
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
    height: 100vw
    margin-left: 0
    :deep(svg)
      top: 0
.media21
  .articles-media_image
    animation: media1 20s linear infinite
  @media only screen and (max-width: 576px)
    .articles-media_image
      position: relative
      left: 5%
.media31
  .articles-media
    &_background
      img
        object-fit: cover
    &_image
      width: 65%
      margin: 0 auto
  @media only screen and (max-width: 576px)
    left: 0
    width: 100%
.media42
  @media only screen and (max-width: 576px)
    .articles-media_background
      img
        position: relative
        top: 15%
.media62
  @media only screen and (max-width: 576px)
    .articles-media_image
      width: 110%
      position: relative
      left: -5%
      object-fit: cover
.media51
  .articles-media_image
    position: relative
    top: 5%
    left: 5%
    width: 50%
    animation: media1 20s linear infinite
  @media only screen and (max-width: 576px)
    transform: scale(-1, 1)
    .articles-media_background
      width: 110vw
      object-fit: cover
    
.animate1
  .articles-media_image
    animation: media1 20s linear infinite
    position: relative
    top: em(20, 16)
  @media only screen and (max-width: 576px)
    .articles-media_image
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