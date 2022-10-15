<template>
  <div class="arrow-container">
    <div class="arrow" :style="`color: ${color}`" />
  </div>
</template>
  
<script lang="ts" setup>
import { ref, Ref } from 'vue';

interface Props {
  arrowColor?: string
}
const props = defineProps<Props>();

const color: Ref = ref('#fff');

if (props.arrowColor) {
  color.value = props.arrowColor
}
</script>

<style lang="scss" scoped>
.arrow-container{
  display: flex;
  align-items: center;
  .arrow {
    width:100px;
    height:17px;
    display: flex;
    &::before{
      content: "";
      background: currentColor;
      width:100%;
      clip-path: polygon(0 8px, calc(100% - 16px) 9px, calc(100% - 16px) 3px, 100% 50%, calc(100% - 16px) 72%, calc(100% - 16px) calc(100% - 10px), 0 calc(100% - 11px))
    }
  }
}
</style>