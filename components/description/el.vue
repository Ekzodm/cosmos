<template lang="pug">
section.description
  .description-star
    CommonSvgEl(title='star1')
  .description-background
    img(:src='toggle_image' alt='cosmos')
  .container
    article.description-content
      span Звездное небо над головой и подземные глубины под нами всегда притягивали человека. Космические тела и геологические пласты хранят не только ответы на вечные вопросы о происхождении планеты, но и огромные запасы энергии. Мы живем в эпоху, когда обычная нефть заканчивается. Человечеству предстоит научиться добывать трудноизвлекаемые углеводороды, и для этого нужны технологии по-настоящему космического уровня. Космонавт Андрей Борисенко и нефтяник Александр Угрюмов помогли нам разобраться, что общего между полетом космического корабля и бурением скважины и почему современную нефтедобывающую отрасль все чаще сравнивают с космической.
</template>

<script setup>

import { ref, inject } from 'vue'

import description from '@/assets/images/description/description.png'
import description_m from '@/assets/images/description/description_m.png'

const screen_width = inject('screen_width')
const toggle_image = ref('')
onMounted(() => {
  toggle_image.value = screen_width.value > 576 ? description : description_m
})
</script>

<style lang="sass" scoped>
.description
  position: relative
  &-background
    position: absolute
    left: 0
    top: -45%
    width: 100%
    img
      width: 100%
  &-star
    position: absolute
    left: 0
    top: -20%
    :deep(svg)
      width: em(1164, 16)
      height: em(676, 16)
  .container
    height: 100vh
    align-items: center
    justify-content: center
  &-content
    max-width: em(1141, 16)
    span
      font: font(32, 42, 400, 'PT Mono')
      color: $white
  @media only screen and (max-width: 1920px)
    font-size: media_fz(998, 1920, 14, 16)
  @media only screen and (max-width: 998px)
    font-size: em(14, 16)
  @media only screen and (max-width: 768px)
    padding: em(93, 16) 0
    .container
      height: auto
  @media only screen and (max-width: 576px)
    font-size: 1em
    overflow: hidden
    &-background
      top: 0
    &-content
      span
        font: font(18, 26, 400, 'PT Mono')

  
</style>