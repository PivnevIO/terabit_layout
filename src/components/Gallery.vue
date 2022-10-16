<template>
<div class="column">
  <div class="row">
    <div class="arw back">
        <Arrow arrowColor="#fff" style="transform: rotate(180deg);"/>
    </div>
    <div class="images">
        <img src="@/assets/images/image_1.png" class="img">
        <img src="@/assets/images/image_2.png" class="img">
        <img src="@/assets/images/image_3.png" class="img">
        <img src="@/assets/images/image_4.png" class="img">
        <img src="@/assets/images/image_5.png" class="img">
        <img src="@/assets/images/image_6.png" class="img">
    </div>
    <div class="arw front">
        <Arrow arrowColor="#fff"/>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.column{
    width: 100%;
    overflow: hidden;
    .row{
        overflow: hidden;
        .arw{
            position: absolute;
            .arrow-container{
                padding: 8.53em 2em;
                position: absolute;
                background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 100%, rgba(255,255,255,0.7) 50%);
                cursor: pointer;
            }
            
            &.back{
                left: 0;
                height: 20em;
                z-index: 10;
                .arrow-container{
                    left: 0;
                }
            }
            &.front{
                right: 0;
                height: 20em;
                z-index: 10;
                .arrow-container{
                    right: 0;
                }
            }
        }
        .images{
            display: flex;
            .img{
                height: 18em;
                width: 22em;
                background-color: aquamarine;
                margin: 0 0.1em;
            }
        }
    }
}
@media screen and (min-width: 2000px) {
  .column{
    padding: 0 10em;
  }
}
</style>