<script lang="ts">
import "./loader.css";

export default {
  props: {
    loaderMessage: {
      required: false,
      type: String,
    },
    spinnerColor: {
      required: false,
      type: String,
    },
  },
  computed: {
    spinnerStyle(props) {
      return {
        color: props.spinnerColor,
      };
    },
  },
  setup(props) {
    console.log({ props });
    return {
      message: props.loaderMessage,
      color: props.spinnerColor,
    };
  },
};
</script>
<template>
  <div class="loader-wrapper">
    <div class="spinner-border" role="status" :style="spinnerStyle">
      <span class="visually-hidden">Loading...</span>
    </div>
    {{ message }}
  </div>
</template>
