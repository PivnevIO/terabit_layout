<template>
  <div 
    v-for="(btn, i) in props.interactiveButtons"
    :key="i" class="interactiveButtons">
    <button @click.prevent="emit('onChick', btn.params)">
      <Icons :icon="btn.iconName" />
      <p>{{btn.title}}</p>
    </button>
  </div>
</template>

<script lang="ts" setup>

interface InteractiveButtons {
  params: string;
  title: string;
  iconName: string;
}

interface Props {
  interactiveButtons: Array<InteractiveButtons>;
}

const props = defineProps<Props>();

const emit = defineEmits(['onChick']);
</script>

<style lang="scss" scoped>
  .interactiveButtons{
    button {
      background: #FFFFFF;
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.11);
      border-radius: 12px;
      font-weight: 400;
      width: 159px;
      height: 152px;
      border: none;
      margin: 0 1em;
      cursor: pointer;
      transition: 0.2s;
      &:hover{
        background: #ebebeb;
      }
      p {
        font-size: 1.1em;
      }
      svg {
        font-size: 2em;
        padding-bottom: 1em;
      }
    }
    transition: 0s;
    cursor: pointer;
    &.active{
      border-bottom: 2px solid;
    }
  }
</style>
