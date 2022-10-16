<template>
  <section class="container">
    <div class="column">
      <div class="row">
        <img src="@/assets/infraxture/Infraxture.png">
      </div>
    </div>
    <div class="column infraxture-info">
      <div class="row">
        <h1>Единство природы и истории — основа концепции коттеджного поселка <strong>«Усадьба Бергов»</strong></h1>
        <h3>Традиционная русская усадьба - богатейший пласт отечественного культурного наследия, гармоничный организм, где природа и архитектура сочетаются с поэзией загородной жизни, ее экологической целесообразностью.</h3>
        <h3>С русской усадьбой неразрывно связаны имена многих государственных деятелей и военачальников, писателей, художников - тех, кто составлял веками славу России.</h3>
      </div>
      <div class="row more-link">
        <a href="#">Об истории усадьбы</a><Arrow arrowColor="#6ED669"/>
      </div>
    </div>
  </section>
  <section class="container infraxture">
    <div class="column">
      <div class="row">
        <h1>Инфраструктура</h1>
        <img src="@/assets/infraxture/grass/grass1.png" class="grass1">
        <img src="@/assets/infraxture/grass/grass2.png" class="grass2">
      </div>
      <div class="row navigate">
        <Navigation :navigation="navigation" @onChickLink="setActiveNavigation" />
      </div>
      <div class="row navigate-buttons">
        <InteractiveButtons :interactiveButtons="interactiveButtons" />
      </div>
    </div>
  </section>
  <section class="container speech">
    <div class="column">
      <div class="row">
        <h1>SPEECH</h1>
      </div>
      <div class="row">
        <h3>Разработчиком архитектурной концепции посёлка и Генеральным проектировщиком является 
              одно из ведущих архитектурных бюро в России 
              SPEECH Чобан&Кузнецов, во главе которого стоял
              Сергей Кузнецов, ныне Главный Архитектор г. Москвы.</h3>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';

interface Navigation {
  href: string;
  isActive: boolean;
  title: string;
}
interface InteractiveButtons {
  params: string;
  title: string;
  iconName: string;
}

const navigation: Ref<Array<Navigation>> = ref([
  {
    href: "#1",
    isActive: true,
    title: "Внутри",
  },
  {
    href: "#2",
    isActive: false,
    title: "Рядом",
  },
])

const interactiveButtons: Ref<Array<InteractiveButtons>> = ref([
  {
    params: "#1",
    title: "Газ",
    iconName: 'mask-ventilator'
  },
  {
    params: "#2",
    title: "Электричество",
    iconName: 'lightbulb'
  },
  {
    params: "#3",
    title: "Водопровод",
    iconName: 'faucet-drip'
  },
  {
    params: "#4",
    title: "Канализация",
    iconName: 'toilet'
  },
  {
    params: "#5",
    title: "Благоустройство",
    iconName: 'tree-city'
  },
  {
    params: "#6",
    title: "Интернет",
    iconName: 'wifi'
  },
])

const setActiveNavigation = (data: any): void => {
  navigation.value.forEach((el: Navigation) => {el.isActive = false})
  navigation.value[data.i].isActive = true;
  console.log(data.href);
}

</script>

<style lang="scss" scoped>
.container{
  .infraxture-info{
    .row{
      &.more-link{
        display: flex;
        flex-direction: row;
        a {
          color: #6ED669;
          padding-right: 1em;
          margin-top: -0.25em;
        }
      }
      padding: 3em 0 0 3em;
      display: flex;
      flex-direction: column;
      h1{
        display:flex;
        flex-direction: column;
        font-weight: 400;
        font-size: 56px;
        line-height: 58px;
        text-align: left;
        strong {
          font-weight: 900;
        }
      }
      h3{
        margin-top: 40px;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        text-align: left;
      }
    }
  }
  &.speech{
    & > .column{
      display: flex;
      flex-direction: row;
      justify-content: center;
      background: #6BC067;
      .row{
        align-items: center;
        &:first-child{
          width: 30%;
          justify-content: flex-end;
        }
        &:last-child{
          width: 55%;
          justify-content: flex-start;
        }
        & > * {
          color: #FFF;
          padding: 2em 0;
        }
        h3{
          padding: 3em 10em 3em 3em;
          font-size: 18px;
          font-weight: 400;
        }
      }
    }
  }
}

.infraxture{
  .column{
    background: url(../assets/infraxture/lake/souse4_10.png);
    background-size: 100%;
    background-position-x: 0;
    background-position-y: 0%;
    background-repeat: no-repeat;
    width: 100%;
    .grass1{
      position: absolute;
      left: 20em;
    }
    .grass2{
      position: absolute;
      right: 10em;
      top: 3em;
    }
    .row{
      &.navigate-buttons{
        background: url(../assets/infraxture/lake/lake.png);
        background-repeat: no-repeat;
        background-position-x: 0;
        background-position-y: 0;
        display: flex;
        justify-content: center;
        padding: 6em 0;
      }
      &.navigate{
        justify-content: center;
      }
      h1{
        margin-top: 2em;
        font-weight: 400;
      }
    }
  }
}

@media screen and (min-width: 2000px) {
  .container{
    padding: 0 10em;
  }
}
</style>
