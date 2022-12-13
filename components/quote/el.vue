<template lang="pug">
section.quote
  .container
    .quote-background
    .quote-image
      img(:src='payload?.image')
    .quote-wrapper
      span.quote-wrapper_name {{payload?.name}}
      span.quote-wrapper_description {{payload?.description}}
</template>