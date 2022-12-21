<template lang="pug">
.articles-progress(:style='{ width: percent, left: !!progressItem ? "50%" : "0" }')
.articles-text(@scroll='progress' :class='[overflow && "overflow"]')
  .articles-text_item(v-html='data' ref='content')
  .articles-observer(ref='toggle_content')
ArticlesPromtEl(:payload='promt_search' :params='params' :visible='promt_visible' @close='close_promt' @height='get_height')
</template>

<script setup>

import { ref, onMounted, inject } from 'vue'
const props = defineProps({
  data: { type: String, default: '' },
  promt: { type: Object, default: {} },
  progressItem: { type: Number, default: 0 },
  id: { type: Number, default: 0 },
  observeMode: { type: String, default: 'default' }
})
const screen_width = inject('screen_width')
const wheel = inject('wheel')
const emit = defineEmits(['change'])
const transform = ref('translateX(0)')
const content = ref(null)
const toggle_content = ref(null)
const percent = ref('0%')
const promt_search = ref({})
const promt = ref(0)
const promt_visible = ref(false)
const params = ref({})
const overflow = ref(false)
const progress = (e) => {
  const { offsetHeight, scrollHeight, scrollTop } = e.target
  percent.value = `${Math.ceil(scrollTop * 100 / ((scrollHeight - offsetHeight) * 2))}%`
  percent.value === '50%' && props.progressItem === 0 && emit('change', 1)
  percent.value === '50%' && props.progressItem === 1 && ([...document.querySelector('main')].children[wheel.value].dataset.scroll = true, overflow.value = false)
}
const options = {
  root: null,
  rootMargin: '-20% 0% -70% 0%',
  threshold: 1
}
const prompt_select = () => {
  const prompt_array = content.value.querySelectorAll('.promt')
  for(const i of prompt_array) {
    if ( screen_width.value > 576) {
      i.addEventListener('mouseenter', e => {
        promt_search.value = props.promt.promt.filter(x => x.search.indexOf(e.target.textContent.toLowerCase()) > -1)[0]
          promt_visible.value = true
          promt.value + e.target.getBoundingClientRect().top <= window.innerHeight ? params.value = { x: +e.layerX + 15, y: +e.layerY + 15 } : params.value = { x: +e.layerX + 15, y: +e.layerY - 15 - promt.value }
      })
      i.addEventListener('mouseleave', e => {
        promt_visible.value = false
        params.value = { x: +e.layerX + 15, y: +e.layerY + 15 }
      })
    } else {
      i.addEventListener('click', e => {
        promt_visible.value = true
        params.value = { x: 0, y: 0 }
        promt_search.value = props.promt.promt.filter(x => x.search.indexOf(e.target.textContent.toLowerCase()) > -1)[0]
        document.querySelector('html').style.overflow = 'hidden'
      })
    }
  }
}
const get_height = data => promt.value = data
const close_promt = data => promt_visible.value = data
const mobile_tab = () => {
  if(screen_width.value <= 576 && props.progressItem === 0 && props.id !== 0) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const el = document.getElementById(props.id)
          window.scrollBy(0, el.getBoundingClientRect().top - 10)
          emit('change', 1)
          observer.disconnect()
        }
      })
    }, options)
    !!toggle_content.value && observer.observe(toggle_content.value)
  }
}
onMounted(() => { 
  prompt_select()
  mobile_tab()
})

</script>

<style lang="sass" scoped>
.articles
  &-progress
    height: 2px
    background: $orange
    max-width: 50%
    position: relative
  &-text
    max-width: 50%
    width: 100%
    max-height: calc(100vh - em(65, 16))
    overflow-y: auto
    padding-top: em(62, 16)
    &::-webkit-scrollbar
      width: 0
    &.overflow
      max-width: 100%
      *
        max-width: 50%
    :deep(p)
      font: font(22, 32, 400, 'Roboto Flex')
      color: $grey
      & + p
        margin-top: em(40, 22)
      & + .author
        margin-top: em(48, 16)
      span
        display: block
        & + span
          margin-top: em(32, 22)
    :deep(.promt)
      color: $orange
      background: rgba(224, 116, 56, .1)
      padding: 0 em(8, 22)
      border-radius: em(6, 22)
      display: inline
      cursor: pointer
      z-index: 15
    :deep(.active)
      background: $text_active
      padding: em(32, 24)
      font: font(24, 32, 400, 'PT Mono')
      color: $white
      border-radius: em(20, 24)
    :deep(.author)
      display: flex
      align-items: center
      gap: em(14, 16)
      margin-bottom: em(24, 16)
      img
        width: em(48, 16)
        height: em(48, 16)
      span
        font: font(18, 24, 400, 'PT Mono')
        color: $white
        display: block
        max-width: em(275, 18)
  @media only screen and (max-width: 576px)
    &-progress
      display: none
    &-observer
      width: 100%
      height: 50px
      position: absolute
      bottom: 0
      left: 0
      z-index: 10
      background: transparent
    &-text
      max-width: 100%
      max-height: none
      padding-top: 0
      :deep(p)
        font: font(16, 24, 400, 'Roboto Flex')
        & + p
          margin-top: em(20, 16)
      :deep(.active)
        padding: em(20, 16)
        font: font(18, 24, 400, 'PT Mono')
      :deep(.author)
        margin-bottom: 1em
        img
          width: em(40, 16)
          height: em(40, 16)
        span
          font: font(14, 18, 400, 'PT Mono')
</style>