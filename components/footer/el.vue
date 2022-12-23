<template lang="pug">
footer.footer
  .footer-background
    img(:src='toggle_image' alt='footer')
  .container-column
    .footer-logo
      img(src='@/assets/images/logo.png' alt='Naked Science')
    ul.footer-dev_list
      li.footer-dev_list-item(v-for='item, idx in dev' :key='idx') {{item}}
    ul.footer-social_list
      li.footer-social_list-item(v-for='item, idx in social' :key='idx')
        template(v-if='item === "link"')
          CommonSvgEl(:title='item' @click='copy_link')
        template(v-else)
          a.footer-social_list-link(href='/')
            CommonSvgEl(:title='item')
    span.footer-description Редакция благодарит за помощь и консультации при подготовке проекта космонавта Андрея Борисенко и директора по развитию разработки трудноизвлекаемых запасов «Газпромнефть — Технологические партнерство» Александра Угрюмова.
    span.footer-right © 2022, Naked Science. Все права защищены.
</template>

<script setup>

import { inject, onMounted } from 'vue'

const props = defineProps({
  background: { type: Array, default: [] }
})
const screen_width = inject('screen_width')
const dev = ['Текст: Иван Ортега', 'Корректор: Мария Назарова', 'Выпускающий редактор: Егор Быковский', 'Проект-менеджер: Руслан Зораб', 'Дизайнер: Марина Саргсян', 'Иллюстратор: Ярослав Демидов', 'Аниматор: Ярослав Демидов', 'Программирование: Дмитрий Пырялин']
const social = ['telegram', 'vk', 'ok', 'twitter', 'link']
const toggle_image = ref(null)
const copy_link = () => {
  navigator.clipboard.writeText(document.location.href)
  .then(text => {
    console.log('Ссылка скопирована')
  })
  .catch(err => {
    console.log('Ошибка копирования', err);
  })
}
onMounted(() => toggle_image.value = Array.isArray(props.background) ? (screen_width.value > 576 ? props.background[0] : props.background[1]) : props.background)
</script>

<style lang="sass" scoped>
.footer
  position: relative
  padding: em(100, 16) 0
  height: 100vh
  display: flex
  align-items: center
  &-logo
    img
      max-width: em(240, 16)
      width: 100%
  &-background
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    z-index: -1
    img
      width: 100%
      height: 100%
      object-fit: cover
      object-position: 50% -20%
  .container-column
    align-items: center
  &-dev
    &_list
      margin-top: em(40, 14)
      &-item
        text-align: center
        color: $white
        font: font(14, 26, 400, 'PT Mono')
  &-description
    font: font(14, 26, 400, 'PT Mono')
    color: $white
    margin-top: em(40, 14)
    max-width: 500px
    text-align: center
  &-right
    font: font(14, 26, 400, 'PT Mono')
    color: $white
    text-align: center
    margin-top: em(20, 14)
  &-social
    &_list
      margin-top: em(40, 16)
      display: flex
      align-items: center
      gap: em(15, 16)
      &-item
        display: flex
        cursor: pointer
      &-link
        display: flex
      :deep(svg)
        width: em(48, 16)
        height: em(48, 16)
  @media only screen and (max-width: 576px)
    &-social
      &_list
        :deep(svg)
          width: em(35, 16)
          height: em(35, 16)
</style>