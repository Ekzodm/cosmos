<template lang="pug">
section.quote
  .container
    .quote-block(:class='payload?.class')
      .quote-background
        img(:src='toggle_image')
      .quote-meteor
        img(:src='payload?.meteor')
      .quote-image
        img(:src='payload?.image')
      .quote-wrapper
        span.quote-wrapper_name {{payload?.name}}
        span.quote-wrapper_description {{payload?.description}}
</template>

<script setup>

import { ref, inject } from 'vue'

const props = defineProps({
  payload: { type: Object, default: {} }
})

const screen_width = inject('screen_width')
const toggle_image = ref('')
onMounted(() => {
  toggle_image.value = screen_width.value > 576 ? props.payload?.background[0] : props.payload?.background[1]
})

</script>

<style lang="sass" scoped>
.quote
  .container
    height: 100vh
    align-items: center
  &-block
    position: relative
    width: 100%
    background: $blue
    display: flex
    align-items: center
    border-radius: em(48, 16)
    height: em(780, 16)
    padding: em(20, 16) em(145, 16)
    &.first
      .quote
        &-image
          order: 1
          display: flex
          width: 50.21vw
          img
            left: 0
            width: inherit
        &-meteor
          top: em(-24, 16)
          right: em(-36, 16)
        &-wrapper
          order: 2
          max-width: em(554, 16)
    &.second
      .quote
        &-image
          order: 2
          display: flex
          width: 44.45vw
          img
            right: 0
            width: inherit
        &-meteor
          top: 0
          left: em(-100, 16)
        &-wrapper
          order: 1
          max-width: em(705, 16)
  &-background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 1
    img
      width: 100%
  &-image
    img
      position: absolute
      bottom: 0
  &-meteor
    position: absolute
  &-wrapper
    display: flex
    flex-direction: column
    align-items: flex-start
    width: 100%
    position: relative
    z-index: 2
    &_name
      color: $white
      font: font(64, 72, 600, 'Roboto Flex')
      text-transform: uppercase
      max-width: em(450, 64)
    &_description
      color: $white
      font: font(28, 40, 400, 'Roboto Flex')
      margin-top: em(24, 28)
  @media only screen and (max-width: 1920px)
    font-size: media_fz(998, 1920, 14, 16)
    &-block
      height: media_fz(998, 1920, 450, 780)
  @media only screen and (max-width: 768px)
    font-size: em(14, 16)
  @media only screen and (max-width: 576px)
    margin-top: em(50, 16)
    .container
      padding: 0
      height: auto
    &-block
      height: auto
      flex-direction: column
      border-radius: 0
      padding: 0 em(20, 16) 1em
      &.first,
      &.second
        .quote
          &-wrapper
            max-width: 100%
            background: $body
            border-radius: em(8, 16)
            padding: em(20, 16)
          &-image
            width: 110vw
            img
              position: relative
      &.first
        .quote
          &-background
            img
              top: -110%
      &.second
        .quote
          &-background
            img
              top: -85%
          &-image
            max-height: 88vw
            img
              object-fit: cover
              object-position: 0% 0%
              left: em(20, 16)
          &-wrapper
            order: 2
    &-meteor
      display: none
    &-image
      position: relative
      z-index: 2
      &::before
        content: ''
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: linear-gradient(180deg, rgba(4, 18, 75, 0) 60.24%, #04284B 100%)
        z-index: 10
      img
        width: inherit
        bottom: auto
        margin-top: em(-39, 16)
    &-wrapper
      &_name
        font: font(32, 36, 600, 'Roboto Flex')
      &_description
        font: font(16, 24, 400, 'Roboto Flex')
        color: $grey
    &-background
      img
        position: relative

</style>