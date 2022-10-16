<template>
  <section class="container gen-plan">
    <div class="column">
      <div class="row">
        <h1>Ген. план <strong>поселка</strong></h1>
        <img src="../assets/GeneralPlan/compass.jpg">
      </div>
    </div>
  </section>
  <section class="container schema">
    <div class="column schema-info">
      <div class="row">
        <h1>Схема <strong>проезда</strong></h1>
      </div>
      <div class="row">
        <h3>Коттеджный поселок класса De Luxe «Усадьба Бергов» располагается вблизи поселка Первомайское.</h3>
      </div>
      <div class="row">
        <h3>Границами участка застройки служат: с севера — улица Парковая, с юга — река Десна и коттеджный поселок «Кедровое», с запада — ИЖС, с востока — ручей.</h3>
      </div>
      <div class="row">
        <h3>Подъездная дорога ведет со стороны улицы Парковая поселка Первомайское с выездом на автотрассу «Москва- Киев».</h3>
      </div>
      <div class="row">
        <div class="distance">
          <p>23</p>
          <h3>км от Москвы</h3>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="row">
        <img src="../assets/GeneralPlan/schema.png">
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
h1{
  font-weight: 500;
}
.schema{
  display: flex;
  justify-content: center;
  height: 40em;
  .column:last-child{
    width: 50%;
    .row{
      height: 40em;
      img{
        width: 60em;
      }
    }
  }
  .schema-info{
    padding: 0 5em;
    align-self: center;
    .row{
      h1{
        padding-top: 1em;
        padding-bottom: 1em;
      }
      h3{
        font-weight: 500;
        padding-bottom: 2em;
        font-size: 1.1em;
        line-height: 24px;
      }
      .distance {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 2em 4em 0 4em;
        p{
          font-weight: 900;
          font-size: 148px;
          color: #6BC067;
        }
        h3{
          margin-top: 3em;
          font-weight: 900;
          font-size: 18px;
        }
      }
    }
  }
}
.gen-plan{
  background: url(../assets/GeneralPlan/map_village.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  .column{
    height: 55em;
    width: 100%;
    .row{
      justify-content: flex-end;
      padding-right: 20%;
    }
    h1{
      padding: 1em 0 0 15em;
    }
    img{
      position: absolute;
      right: 0em;
      bottom: -48em;
    }
  }
}
@media screen and (min-width: 2000px){
  .container {
    padding: 0 10em;
  }
}
</style>
