<script lang="ts">
import { reactive } from "vue";

export default {
  props: {
    inputLabel: {
      required: false,
      type: String,
    },
    helperText: {
      required: false,
      type: String,
    },
    placeholder: {
      required: false,
      type: String,
    },
    inputType: {
      required: false,
      type: String,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      label: props.inputLabel,
      helperMsg: props.helperText,
      inputPlaceholder: props.placeholder,
      type: props.inputType,
    };
  },
};
</script>
<template>
  <label v-if="label" for="exampleInputEmail1">{{ label }}</label>
  <input
    :type="type"
    class="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    :placeholder="inputPlaceholder"
  />
  <small v-if="helperMsg" id="emailHelp" class="form-text text-muted">{{ helperMsg }}</small>
</template>
