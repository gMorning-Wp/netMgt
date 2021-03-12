<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script setup>
import { isExternal as isExt } from "utils/validate";
import { computed, defineProps } from "vue";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});

const isExternal = computed(() => isExt(props.to));

// type是一个计算属性
// eslint-disable-next-line no-unused-vars
const type = computed(() => {
  if (isExternal.value) {
    return "a";
  }
  return "router-link";
});
// eslint-disable-next-line no-unused-vars
const linkProps = to => {
  if (isExternal.value) {
    return {
      href: to,
      target: "_blank",
      rel: "noopener",
    };
  }
  return { to };
};
</script>
