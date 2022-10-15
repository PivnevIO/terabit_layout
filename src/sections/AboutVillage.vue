<template>
  <section class="container">
    <div class="column aboutvillage-info">
      <div class="row">
        <h1>О <strong>поселке</strong></h1>
      </div>
      <div class="row">
        <h3>Основными элементами планировки участков стали 
          уникальные природные условия, ландшафт территории, 
          используемой под застройку. Основополагающий фактор 
          застройки северной части, на которой расположен лесной 
          массив, — сохранение максимального количества вековых деревьев. 
          В застройке и планировке участков средней части активно 
          используется и сохраняется природный ландшафт и рельеф, 
          что позволяет добиться уникальных видовых характеристик. 
          В южной части участки примыкают к реке, вдоль которой 
          устраивается набережная.</h3>
      </div>
      <div class="row aboutvillage-link">
        <a href="#">Больше о поселке </a><Arrow arrowColor="#6ED669"/>
      </div>
    </div>
    <div class="column aboutvillage-img">
      <div class="row">
        <img src="@/assets/aboutvillage/AboutVillage.png">
      </div>
    </div>
  </section>
  <section class="container" style="padding-bottom: 3.5em;">
    <div class="column column-is-3 counter-abo">
      <div class="row counter-abo-village">
        <strong>Площадь земельного участка</strong>
        <p :style="bgPosY()">171 399m<sup>2</sup></p>
      </div>
    </div>
    <div class="column column-is-3 counter-abo">
      <div class="row counter-abo-village">
        <strong>Общая застройка</strong>
        <p :style="bgPosY()">24 460m<sup>2</sup></p>
      </div>
    </div>
    <div class="column column-is-3 counter-abo">
      <div class="row counter-abo-village">
        <strong>Количество коттеджей</strong>
        <p :style="bgPosY()">40<sup /></p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const bgPosY = (): string => {
  return `background-position-y: ${Math.floor(Math.random() * 100) + 50}%`
}
</script>

<style lang="scss">
.aboutvillage-info{
  width: 45%;
  margin-top: 5em;
  .aboutvillage-link{
    padding-top: 1em;
    margin-top: 1.5em;
    a {
      color: #6ED669;
      margin-top: -0.2em;
      padding-right: 1em;
    }
  }
  .row{
    h1 {
      font-weight: 400;
      font-size: 60px;
      strong {
        font-weight: 700;
      }
    }
    h3{
      margin-top: 2em;
      font-weight: 500;
      font-size: 18px;
    }
  }
}
.aboutvillage-img{
  width: 50%;
  img {
    width: 100%;
  }
}
.counter-abo{
  padding-left: 2em;
  &:last-child{ 
    padding-left: 5em;
  }
  .counter-abo-village{
    display: flex;
    flex-direction: column;
    
    p {
      background: url(../assets/aboutvillage/vilagebuid1.png);
      background-position-y: 100%;
      color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 900;
      font-size: 100px;
      line-height: 122px;
      sup {
        font-size: 50px;
      }
    }
  }
}


@media screen and (min-width: 2000px) {
  .aboutvillage-info{
    width: 30%;
  }
  .aboutvillage-img{
    width: 35%;
  }
  .counter-abo-village{
    padding-left: 10em;
  }
  
}
</style>
