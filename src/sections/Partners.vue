<template>
  <section class="container footer">
    <div class="column">
      <div class="row">
        <img src="@/assets/footerLogo.png">
      </div>
      <div class="row">
        <div class="links">
          <a href="">О поселке</a>
          <a href="">Инфраструктура</a>
          <a href="">Историческая справка</a>
          <a href="">Партнеры</a>
        </div>
      </div>
      <div class="row">
        <div class="contacts">
          <a href="mailto:5378082@mail.ru">5378082@mail.ru</a>
          <a href="tel:+74957473110">8 (495) 747-31-10</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.footer{
  .column{
    background: #505050;
    width: 100%;
    padding: 3em 6.5em;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .row{
      & > * > *{
        color: #fff;
      }
      .contacts{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
      .links{
        a {
          padding: 0 2em;
        }
      }
    }
  }
}
@media screen and (min-width: 2000px) {
  .footer{
    padding: 0 10em;
  }
}
</style>
