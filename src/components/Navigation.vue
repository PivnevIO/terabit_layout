<template>
  <div 
    v-for="(navigate, i) in props.navigation"
    :key="i"
    class="navigation"
    :class="{'active': navigate.isActive}">
    <a @click.prevent="emit('onChickLink', {i, href: navigate.href})">{{navigate.title}}</a>
  </div>
</template>

<script lang="ts" setup>

interface Navigation {
  href: string;
  isActive: boolean;
  title: string;
}

interface Props {
  navigation: Array<Navigation>;
}

const props = defineProps<Props>();
const emit = defineEmits(['onChickLink'])
</script>

<style lang="scss" scoped>
  .navigation{
    padding: 1em 4em;
    transition: 0s;
    cursor: pointer;
    border-bottom: 1px solid;
    &.active{
      border-bottom: 2px solid;
    }
  }
</style>
