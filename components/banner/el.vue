<template lang="pug">
section.banner
  .banner-background
    img(src='@/assets/images/banner.png' alt='background')
  .banner-satellite
    img(src='@/assets/images/satellite.png' alt='satellite')
  .container-column
    CommonTitleEl(:banner='true' title='Через недра в космос') 
</template>

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
</style>