<template lang="pug">
section.banner(ref='observe')
  .banner-background
    img(:src='toggle_image' alt='background')
  .banner-satellite(:style='{transform: `translateX(${satellite}px)`}')
    img(src='@/assets/images/satellite.png' alt='satellite')
  .container-column
    .banner-title(:style='{ transform: `scale(${transform})`, filter: `blur(${filter}px)` }')
      CommonTitleEl(:banner='true' title='Через недра в космос') 
</template>

<script setup>

import { ref, inject, onMounted } from 'vue'

import banner from '@/assets/images/banner.png'
import banner_m from '@/assets/images/banner_m.png'

const observe = ref(null)
const transform = ref(1)
const filter = ref(0)
const satellite = ref(0)
const screen_width = inject('screen_width')
const toggle_image = ref('')
const threshold_list = () => {
  let thresholds = []
  let numSteps = 100
  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps
    thresholds.push(ratio)
  }
  thresholds.push(0)
  return thresholds;
}
const options = {
    root: null,
    rootMargin: '5px',
    threshold: threshold_list()
}
onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const ratio = 1 - entry.intersectionRatio
      transform.value = 1 + ratio * 2
      filter.value = 0 + ratio * 10
      satellite.value = 0 + ratio * 500
    })
  }, options)
  !!observe.value && observer.observe(observe.value)
  toggle_image.value = screen_width.value > 576 ? banner : banner_m
})

</script>

<style lang="sass" scoped>
.banner
  width: 100vw
  height: 100vh
  position: relative
  .container-column
    height: 100vh
    align-items: center
    justify-content: center
  &::before
    content: ''
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 60%
    background: linear-gradient(180deg, rgba(9, 52, 96, 0.6) 0%, rgba(9, 52, 96, 0) 100%)
  &-background
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    img
      width: 100%
      height: 100%
      object-fit: cover
  &-satellite
    position: absolute
    right: 0
    top: em(-30, 16)
    width: 55.389vw
    z-index: 7
    img
      width: 100%
  @media only screen and (max-width: 576px)
    overflow: hidden
</style>