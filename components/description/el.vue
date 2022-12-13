<template lang="pug">
section.description
  .description-star
    CommonSvgEl(title='star1')
  .description-background
    img(src='@/assets/images/description.png' alt='cosmos')
  .container
    article.description-content
      p Звездное небо над головой и подземные глубины под нами всегда притягивали человека. Космические тела и геологические пласты хранят не только ответы на вечные вопросы о происхождении планеты, но и огромные запасы энергии. Мы живем в эпоху, когда обычная нефть заканчивается. Человечеству предстоит научиться добывать трудноизвлекаемые углеводороды, и для этого нужны технологии по-настоящему космического уровня. Космонавт Андрей Борисенко и нефтяник Александр Угрюмов помогли нам разобраться, что общего между полетом космического корабля и бурением скважины и почему современную нефтедобывающую отрасль все чаще сравнивают с космической.
</template>

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
    p
      font: font(32, 42, 400, 'PT Mono')
      color: $white
  
</style>