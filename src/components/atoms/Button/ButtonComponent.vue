<script lang="ts">
import { reactive } from 'vue';
export default {
  props: {
    buttonLabel: {
      required: true,
      type: String,
    },
    isDisabled: {
      required: false,
      default: false,
      type: Boolean,
    },
    buttonClasses: {
      required: false,
      default: "btn",
      type: String,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    props = reactive(props);
    return {
      label: props.buttonLabel,
      disabled: props.isDisabled,
      classes: props.buttonClasses,
      onClick() {
        emit('click');
      }
    };
  },
};
</script>

<template>
  <button type="button" :class="classes" :disabled="disabled" @click="onClick">Primary</button>
</template>
