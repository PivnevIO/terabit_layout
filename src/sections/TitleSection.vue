<template>
  <section class="container title-section">
    <div class="column left-menu">
      <div class="row">
        <img src="@/assets/logo.png" alt="" class="logo">
      </div>
      <div class="row">
        <Menu />
      </div>
    </div>
    <div class="column heading-container">
      <div class="row heading">
        <div class="contacts">
          <a href="mailto:5378082@mail.ru">5378082@mail.ru</a>
          <a href="tel:+74957473110">8 (495) 747-31-10</a>
        </div>
        <div class="heading-info">
          <h1>Коттеджный поселок класса De luxe <strong>«Усадьба Бергов»</strong></h1>
          <h3>Мы строим этот поселок для тех, кто выбирает жизнь загородом, жизнь в гармонии с природой — реальным связующим между прошлым и будущим.</h3>
          <div class="projects">
            <img src="@/assets/Vector.png">
            <a href="">Сотреть проекты</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Menu from '@/components/Menu.vue';
</script>

<style lang="scss">
$text-color: #fff;
$text-hover-color: #cff6ff;
  .title-section{
    .left-menu{
      height: 35em;
      padding: 1em 2em 0 2em;
    }
    .heading-container{
      width: 100%;
      height: 35em;
      background: url(../assets/headingImage.png);
      
      .heading{
        width: 100%;
        height: 35em;
        display: flex;
        align-items: center;
        flex-direction: column;
        background: linear-gradient(180.33deg, rgba(0, 0, 0, 0.45) 14.06%, rgba(0, 0, 0, 0.25) 99.78%);
        .contacts{
          display: flex;
          justify-content: flex-end;
          width: 100%;
          padding: 1em 0;
          a{
            color: $text-color;
            padding: 2em;
            &:hover{
              color: $text-hover-color;
            }
          }
        }
        .heading-info{
          width: 65%;
          a{
            color: $text-color;
            &:hover{
              color: $text-hover-color;
            }
          }
          h1{
            font-weight: 400;
            font-size: 56px;
            line-height: 58px;
            text-align: right;
            color: #FFFFFF;
            strong {
              font-weight: 700;
            }
          }
          h3{
            color: #FFFFFF;
            margin-top: 40px;
            font-weight: 500;
            font-size: 18px;
            line-height: 26px;
            text-align: right;
          }
          .projects{
            display: flex;
            justify-content: space-between;
            margin-top: 3em;
            padding: 0 5em 0 3em;
          }
        }
      }
    }
  }
</style>
