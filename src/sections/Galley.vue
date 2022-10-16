<template>
  <section class="container galley">
    <Gallery />
  </section>
  <section class="container galley-map">
    <div class="column">
      <div class="row">
        <div class="marker">
          <div class="shadow">
            <Icons icon="location-dot" />
          </div>
          <div class="marker-info">
            <img src="@/assets/gallry/logoamv.png">
            <p>г. Москва, Троицкий АО, п. Первомайское, К/П "Усадьба Бергов".</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.galley-map{
  .column{
    background: url(../assets/gallry/map-gallry.png);
    background-size: cover;
    width: 100%;
    height: 30em;
    .row{
      .marker{
        position: absolute;    
        top: 20em;
        left: 42%;
        .marker-info{
          position: absolute;
          top: -6em;
          left: 4px;
          background: #fff;
          width: 20em;
          padding-left: 2.5em;
          padding-bottom: 7px;
          border-radius: 0.5em;
          display: flex;
          flex-direction: column;
          align-items: center;
          img{
            height: 3em;
          }
        }
        .shadow{
          svg{
            color: #6bc067;
            position: absolute;
            font-size: 6.5em;
            top: -115px;
            left: -25px;
            z-index: 9;
          }
          width: 2em;
          height: 0px;
          border-radius: 2em;
          position: relative;
          box-shadow: 0px 10px 20px 8px #b5b5b5
        }
      }
      p{
        font-size: 14px;
        text-align: center;
      }
    }
  }
  height: 30em;
}

@media screen and (min-width: 2000px) {
  .galley-map{
    padding: 0 10em;
  }
}
</style>
