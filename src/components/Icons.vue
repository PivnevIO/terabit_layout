<template>
    <faIcons :icon="props.icon" />
</template>
  
<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  icon: string;
}
const props = defineProps<Props>();
</script>
  
<style lang="scss">
</style>