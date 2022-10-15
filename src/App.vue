<template>
  <TitleSection />
  <AboutVillage />
  <Infraxture />
  <GeneralPlan />
  <Galley />
  <Partners />
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
$main-font-family: 'Montserrat';
$main-bg-color: #fff;
*{
  padding: 0;
  margin: 0;
}
body{
  background-color: $main-bg-color;
}
@font-face {
  font-family: $main-font-family;
  src: local($main-font-family),
   url(./assets/fonts/Montserrat/static/Montserrat-Regular.ttf) format("truetype");
   font-weight: 500;
}

@font-face {
  font-family: $main-font-family;
  src: local($main-font-family),
   url(./assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf) format("truetype");
   font-weight: 900;
}

p, a, span, label, div, section, h1, h2, h3, h4, h5{
  font-family: $main-font-family;
  font-style: normal;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #000000;
  text-decoration: none;
  transition: 0.3s;
}
#app{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
a:hover {
  color: #4a4a4a;
}
h1 {
  font-size: 56px;
  line-height: 58px;
}
.container{
  display: flex;
  justify-content: center;
  
  .column {
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    .row {
      width: 100%;
      position: relative;
      display: flex;
    }
    &.column-is-3{
      width: 33%;
    }
  }
}
@media screen and (min-width: 2000px) {
.container{
  display: flex;
  justify-content: center;
  .column {
    &.column-is-3{
      width: 28%;
      .row{
        width: 100%;
      }
    }
  }
}
}
</style>
