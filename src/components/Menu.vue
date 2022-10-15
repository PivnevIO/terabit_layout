<template>
  <ul class="menu-list">
    <li class="menu-items"><span class="marker">01</span><a href="#TitleSection">О поселке</a></li>
    <li class="menu-items"><span class="marker">02</span><a href="#AboutVillage">Историческое место</a></li>
    <li class="menu-items"><span class="marker">03</span><a href="#Infraxture">Инфраструктура</a></li>
    <li class="menu-items"><span class="marker">04</span><a href="#GeneralPlan">Генплан</a></li>
    <li class="menu-items"><span class="marker">05</span><a href="#Galley">Галерея</a></li>
    <li class="menu-items"><span class="marker">06</span><a href="#Partners">Партнеры</a></li>
  </ul>
</template>






<script lang="ts" setup>

</script>

<style lang="scss">
.menu-list{
  
  margin-top: 2em;
  .menu-items {
    list-style-type: none;
    position: relative;
    padding-left: 2em;
    margin-top: 1em;
    font-weight: 600;
    &:first-child{
      margin: 0;
    }
    .marker{
      color: #6BC067;
    }
    span{
      position: absolute;
      top: -0.8em;
      left: -0.3em;
      padding-right: 1em;
    }
  }
}
</style>
