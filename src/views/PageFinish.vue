<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/fonts.styl'

.root-finish
  width 100%
  padding 20px
  background url("/images/bg.jpg") 50% 50% / cover
  .form
    margin 150px auto
    padding 40px 20px
    max-width 600px
    text-align center
    background #000000aa
    border-radius borderRadiusMax
    color colorText1
    position relative
    animation form-in ease 2s
    white-space nowrap
    @keyframes form-in
      0%
        max-width 0
        color transparent
      70%
        max-width 600px
      100%
        color #ffffffff
    .title
      font-large()
      margin-bottom 10px
    .info
      font-medium()
      margin-bottom 5px
    &:after
      content ""
      position absolute
      inset 0
      border-radius borderRadiusMax
      border 3px solid #FFFFFF
      animation opacity-in ease 1.5s
      @keyframes opacity-in
        from
          opacity 0
        to
          opacity 1
    &:before
      content ""
      position absolute
      inset 0
      border-radius borderRadiusMax
      border 6px solid #FFFFFF88
      filter blur(10px)
      animation lighting ease 3s infinite running
      @keyframes lighting
        0%
          border-color #FFFFFF88
        70%
          border-color #FFFFFFFF
        100%
          border-color #FFFFFF88
</style>

<template>
  <div class="root-finish">
    <div class="form">
      <header class="title">Поздравляю!</header>
      <p class="info">200 кругов ада пройдены :)</p>
      <br>
      <p class="info">Конечно, прошло уже сильно больше времени, чем планировалось, но я надеюсь, ты в полной мере насладилась этой валентинкой.</p>
      <p class="info"><i>Кстати, в зависимости от того, как носили бант из ленты, он мог иметь разные значения. И кажется, к твоим волосам он прекрасно подошёл бы)</i></p>
      <br>
      <p class="info"><small>А вот на этом месте возможно что-то появится позже :)</small></p>
      <router-link :to="{name: 'default'}"></router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

