<template lang="pug">
main.main
  BannerEl
  DescriptionEl
  QuoteEl(:payload='{ name: "Андрей Борисенко", description: "летчик-космонавт, Герой России (2012). В 1987 году окончил ленинградский «Военмех», в 2003-2021-х входил в отряд космонавтов. Дважды участвовал в полетах к Международной космической станции.", background: quote_background_1, image: quote_media_1, class: "first", meteor: quote_meteor_1 }')
  ArticlesLinkEl(:tab='tab_1' :background='background_1_1' v-if='article_1' :active='0' id='star')
    template(v-slot:content_1)
      ArticlesTextEl(:data='article_1?.content_1' :promt='promt')
    template(v-slot:media_1)
      ArticlesMediaEl(:media='media_1_1' className='animate1')
  QuoteEl(:payload='{ name: "Александр Угрюмов", description: "руководитель блока по разработке трудноизвлекаемых запасов «Газпромнефть-Технологических партнерств». С отличием окончил геологический факультет РГУ нефти и газа имени И. М. Губкина. Имеет две магистерские степени по разработке месторождений Университета Хериота-Уатта (Эдинбург, Шотландия). Работал в ведущих российских и международных нефтегазовых компаниях.", background: quote_background_2, image: quote_media_2, class: "second", meteor: quote_meteor_2 }')
  ArticlesLinkEl(:tab='tab_1' :background_2='background_1_2' v-if='article_1' :active='1' id='bosom')
    template(v-slot:content_1)
      ArticlesTextEl(:data='article_1?.content_2' :promt='promt')
    template(v-slot:media_1)
      ArticlesMediaEl(:media='media_1_2' type='animation')
  DelimiterEl(title='Цели')
    .delimiter-background
      img(src='@/assets/images/delimiter1.png')
  CommonEl(:payload='payload_2' v-if='article_2')
  DelimiterEl(title='Управление')
    .delimiter-background
      img(src='@/assets/images/delimiter2.png')
  CommonEl(:payload='payload_3' v-if='article_3')
  DelimiterEl(title='Подготовка')
    .delimiter-background
      img(src='@/assets/images/delimiter3.png')
  CommonEl(:payload='payload_4' v-if='article_4')
  DelimiterEl(title='Полёты: вверх и вниз')
    .delimiter-background
      img(src='@/assets/images/delimiter4.png')
  CommonEl(:payload='payload_5' v-if='article_5')
  DelimiterEl(title='Ключи')
    .delimiter-background
      img(src='@/assets/images/delimiter5.png')
  CommonEl(:payload='payload_6' v-if='article_6')
</template>

<script setup>

import { ref, onMounted } from 'vue'

const tab_1 = [{ to: 'star', title: 'На пути к звёздам' }, { to: 'bosom', title: 'На пути к недрам' }]
const tab_2 = [{ title: 'Цели для полёта' }, { title: 'Цели для бурения' }]
const tab_3 = [{ title: 'Управление полётом' }, { title: 'Управление бурением' }]
const tab_4 = [{ title: 'Подготовка к взлёту' }, { title: 'Подготовка к бурению' }]
const tab_5 = [{ title: 'На орбите' }, { title: 'В недрах' }]
const tab_6 = [{ title: 'Ключи к космосу' }, { title: 'Ключи к недрам' }]

// Quote Content
import quote_background_1 from '@/assets/images/quote_background_1.png'
import quote_background_2 from '@/assets/images/quote_background_2.png'
import quote_media_1 from '@/assets/images/quote_media_1.png'
import quote_media_2 from '@/assets/images/quote_media_2.png'
import quote_meteor_1 from '@/assets/images/quote_meteor_1.png'
import quote_meteor_2 from '@/assets/images/quote_meteor_2.png'

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
import media_2_1 from '@/assets/images/fly.png'
import media_2_2 from '@/assets/images/drilling.png'
import media_3_1 from '@/assets/images/media_3_1.png'
import media_3_2 from '@/assets/images/media_3_2.png'
import media_4_1 from '@/assets/animation/media_4_1.json'
import media_4_2 from '@/assets/images/media_4_2.png'
import media_5_1 from '@/assets/images/media_5_1.png'
import media_5_2 from '@/assets/images/media_5_2.png'
import media_6_1 from '@/assets/images/media_6_1.png'
import media_6_2 from '@/assets/images/media_6_2.png'

// Promt
import promt from '@/assets/json/promt.json'

// Payload Article

const payload_2 = ref({
  tab: tab_2,
  background: background_2_1,
  article: article_2,
  media: [{ item: media_2_1, type: 'image' },{ item: media_2_2, type: 'image' }],
  promt: promt
})
const payload_3 = ref({
  tab: tab_3,
  article: article_3,
  media: [{ item: media_3_1, type: 'image' },{ item: media_3_2, type: 'image' }],
  promt: promt
})
const payload_4 = ref({
  tab: tab_4,
  background: background_4_1,
  article: article_4,
  media: [{ item: media_4_1, type: 'animation' },{ item: media_4_2, type: 'image' }],
  promt: promt
})
const payload_5 = ref({
  tab: tab_5,
  article: article_5,
  media: [{ item: media_5_1, type: 'image' },{ item: media_5_2, type: 'image' }],
  promt: promt
})
const payload_6 = ref({
  tab: tab_6,
  background: background_6_1,
  article: article_6,
  media: [{ item: media_6_1, type: 'image' },{ item: media_6_2, type: 'image' }],
  promt: promt
})

</script>

<style lang="sass" scoped>
.delimiter-background
  width: 100%
  height: 100%
  img
    width: 100%
    height: 100%
</style>