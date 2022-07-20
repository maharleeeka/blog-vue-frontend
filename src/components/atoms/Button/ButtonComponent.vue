<script lang="ts">
export default {
  props: {
    buttonLabel: {
      required: true,
      type: String,
    },
  },
  emits: ["click"],
};
</script>

<template>
  <button v-bind="$attrs">
    {{ buttonLabel }}
  </button>
</template>
