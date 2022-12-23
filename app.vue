<template lang="pug">
main.main
  BannerEl
  DescriptionEl
  QuoteEl(:payload='{ name: "Андрей Борисенко", description: "летчик-космонавт, Герой России. В 1987 году окончил ленинградский «Военмех», в 2003-2021-х входил в отряд космонавтов. Дважды участвовал в полетах к Международной космической станции.", background: [quote_background_1, quote_background_1_m], image: quote_media_1, class: "first", meteor: quote_meteor_1 }')
  ArticlesLinkEl(:tab='tab_1' :background='background_1_1' v-if='article_1' :active='0' id='star' @changeIndex='toggle_tab')
    template(v-slot:content_1)
      ArticlesLinkTextEl(:data='article_1?.content_1' :promt='promt' :progressItem='0')
    template(v-slot:media_1)
      ArticlesMediaEl(:media='media_1_1' className='animate1')
  QuoteEl(:payload='{ name: "Александр Угрюмов", description: "руководитель блока по разработке трудноизвлекаемых запасов «Газпромнефть-Технологические Партнерства». С отличием окончил геологический факультет РГУ нефти и газа имени И. М. Губкина. Имеет две магистерские степени по разработке месторождений Университета Хериота-Уатта (Эдинбург, Шотландия). Работал в ведущих российских и международных нефтегазовых компаниях.", background: [quote_background_2, quote_background_2_m], image: quote_media_2, class: "second", meteor: quote_meteor_2 }')
  ArticlesLinkEl(:tab='tab_1' :background_2='background_1_2' v-if='article_1' :active='1' id='bosom' @changeIndex='toggle_tab')
    template(v-slot:content_1)
      ArticlesLinkTextEl(:data='article_1?.content_2' :promt='promt' :progressItem='1')
    template(v-slot:media_1)
      ArticlesMediaEl(:media='media_1_2' type='animation')
  DelimiterEl(title='Выбор курса' :image='[delimiter1, delimiter1_m]')
  CommonEl(:payload='payload_2' v-if='article_2')
  DelimiterEl(title='Навигация' :image='[delimiter2, delimiter2_m]')
  CommonEl(:payload='payload_3' v-if='article_3')
  DelimiterEl(title='Обратный отсчет' :image='[delimiter3, delimiter3_m]')
  CommonEl(:payload='payload_4' v-if='article_4')
  DelimiterEl(title='В космосе и недрах' :image='[delimiter4, delimiter4_m]')
  CommonEl(:payload='payload_5' v-if='article_5')
  DelimiterEl(title='Ключи от будущего' :image='[delimiter5, delimiter5_m]')
  CommonEl(:payload='payload_6' v-if='article_6')
  FooterEl(:background='[delimiter5, delimiter5_m]')
</template>

<script setup>

import { ref, computed, provide, onMounted } from 'vue'

const tab_1 = [{ to: 'star', title: 'На пути к звёздам', index: 3 }, { to: 'bosom', title: 'На пути к недрам', index: 5 }]
const tab_2 = [{ title: 'Цели полёта', id: 10 }, { title: 'Цели бурения', id: 11 }]
const tab_3 = [{ title: 'Управление полётом', id: 12 }, { title: 'Управление бурением', id: 13 }]
const tab_4 = [{ title: 'Подготовка к взлёту', id: 14 }, { title: 'Подготовка к бурению', id: 15 }]
const tab_5 = [{ title: 'На орбите', id: 16 }, { title: 'В недрах', id: 17 }]
const tab_6 = [{ title: 'Будущее космонавтики', id: 18 }, { title: 'Будущее нефтедобычи', id: 19 }]

// Quote Content
import quote_background_1 from '@/assets/images/quote/quote_background_1.png'
import quote_background_2 from '@/assets/images/quote/quote_background_2.png'
import quote_background_1_m from '@/assets/images/quote/quote_background_1_m.png'
import quote_background_2_m from '@/assets/images/quote/quote_background_2_m.png'
import quote_media_1 from '@/assets/images/quote/quote_media_1.png'
import quote_media_2 from '@/assets/images/quote/quote_media_2.png'
import quote_meteor_1 from '@/assets/images/quote/quote_meteor_1.png'
import quote_meteor_2 from '@/assets/images/quote/quote_meteor_2.png'

// Background Articles
import background_1_1 from '@/assets/images/background_1_1.png'
import background_1_2 from '@/assets/images/background_1_2.png'
import background_2_1 from '@/assets/images/article_2_1.png'
import background_4_1 from '@/assets/images/background_4_1.png'
import background_6_1 from '@/assets/images/background_6_1.png'

// JSON Articles
import article_1 from '@/assets/json/article_1.json'
import article_2 from '@/assets/json/article_2.json'
import article_3 from '@/assets/json/article_3.json'
import article_4 from '@/assets/json/article_4.json'
import article_5 from '@/assets/json/article_5.json'
import article_6 from '@/assets/json/article_6.json'

// Media Image Articles
import media_1_1 from '@/assets/images/media_1_1.png'
import media_1_2 from '@/assets/animation/media_1_2.json'
import media_2_1 from '@/assets/images/media_2_1.png'
import media_2_2 from '@/assets/animation/media_2_2.json'
import media_3_1 from '@/assets/animation/media_3_1.json'
import media_3_2 from '@/assets/images/media_3_2.png'
import media_4_1 from '@/assets/animation/media_4_1.json'
import media_4_2 from '@/assets/animation/media_4_2.json'
import media_5_1 from '@/assets/images/media_5_1.png'
import media_5_2 from '@/assets/images/media_5_2.png'
import media_6_1 from '@/assets/animation/media_6_1.json'
import media_6_2 from '@/assets/images/media_6_2.png'

import media_background_2_1 from '@/assets/images/media_background_2_1.png'
import media_background_3_1 from '@/assets/images/media_background_3_1.png'
import media_background_3_1_m from '@/assets/images/media_background_3_1_m.png'
import media_background_4_2 from '@/assets/images/media_background_4_2.png'
import media_background_4_2_m from '@/assets/images/media_background_4_2_m.png'
import media_background_5_1 from '@/assets/images/media_background_5_1.png'

// Promt
import promt from '@/assets/json/promt.json'

// Delimiter
import delimiter1 from '@/assets/images/delimiter/delimiter1.png'
import delimiter1_m from '@/assets/images/delimiter/delimiter1_m.png'
import delimiter2 from '@/assets/images/delimiter/delimiter2.png'
import delimiter2_m from '@/assets/images/delimiter/delimiter2_m.png'
import delimiter3 from '@/assets/images/delimiter/delimiter3.png'
import delimiter3_m from '@/assets/images/delimiter/delimiter3_m.png'
import delimiter4 from '@/assets/images/delimiter/delimiter4.png'
import delimiter4_m from '@/assets/images/delimiter/delimiter4_m.png'
import delimiter5 from '@/assets/images/delimiter/delimiter5.png'
import delimiter5_m from '@/assets/images/delimiter/delimiter5_m.png'

const screen_width = computed(() => {
  if (process.client) {
    return document.body.offsetWidth
  } else {
    return null
  }
})

provide('screen_width', screen_width)

// Payload Article

const payload_2 = ref({
  tab: tab_2,
  background: background_2_1,
  article: article_2,
  observe: 'default',
  media: [{ item: media_2_1, type: 'image', background: media_background_2_1, class_name: 'media21' },{ item: media_2_2, type: 'animation' }],
  promt: promt
})
const payload_3 = ref({
  tab: tab_3,
  article: article_3,
  observe: 'default',
  media: [{ item: media_3_1, type: 'animation', background: [media_background_3_1, media_background_3_1_m], class_name: 'media31' },{ item: media_3_2, type: 'image', class_name: 'scale' }],
  promt: promt
})
const payload_4 = ref({
  tab: tab_4,
  background: background_4_1,
  article: article_4,
  observe: 'default',
  media: [{ item: media_4_1, type: 'animation' },{ item: media_4_2, type: 'animation', background: [media_background_4_2, media_background_4_2_m], class_name: 'media42' }],
  promt: promt
})
const payload_5 = ref({
  tab: tab_5,
  article: article_5,
  observe: 'default',
  media: [{ item: media_5_1, type: 'image', background: media_background_5_1, class_name: 'media51' },{ item: media_5_2, type: 'image' }],
  promt: promt
})
const payload_6 = ref({
  tab: tab_6,
  background: screen_width > 576 ? background_6_1 : null,
  article: article_6,
  observe: 'last',
  media: [{ item: media_6_1, type: 'animation' },{ item: media_6_2, type: 'image', class_name: 'media62' }],
  promt: promt
})
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .5
}
const wheel_index = ref(0)
provide('wheel', wheel_index)
const toggle_tab = data => { wheel_index.value = data, console.log(data + 'emit')}
const article_observer = () => {
  if(screen_width.value <= 576) return false
  window.scrollTo(0, 0)
  const main = document.querySelector('main')
  const article = [...document.querySelector('main').children]
  article.forEach((i, idx) => {
    i.setAttribute('data-index', idx)
    if(idx === 3 || idx === 5 || idx === 7 || idx === 9 || idx === 11 || idx === 13 || idx === 15) {
      i.dataset.scroll = false
      i.querySelectorAll('.articles-text').forEach(x=> x.classList.add('overflow'))
    } else {
      i.dataset.scroll = true
    }
  })
  const flag = ref(true)
  const height = article[0].offsetHeight
  window.addEventListener('wheel', e => {
    if(!flag.value) return
    flag.value = false
    if(e.deltaY > 0) {
      if(article[wheel_index.value].dataset.scroll === 'true' && e.target.tagName !== 'P') {
        wheel_index.value < article.length - 1 ? wheel_index.value += 1 : wheel_index.value = article.length - 1
      }
    } else {
      if(e.target.tagName !== 'P') {
        wheel_index.value > 0 ? wheel_index.value -= 1 : wheel_index.value = 0
      }
    }
    main.style.transform = `translateY(${-height * wheel_index.value}px)`
    setTimeout(() => flag.value = true, 500)
  })
}
onMounted(() => article_observer())

</script>

<style lang="sass" scoped>
main
  transition: .5s
  @media only screen and (max-width: 576px)
    overflow: hidden
</style>