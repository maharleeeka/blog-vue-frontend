<script lang="ts">
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
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>
<template>
  <label v-if="inputLabel">{{ inputLabel }}</label>
  <input
    class="form-control"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
  <small v-if="helperText" id="emailHelp" class="form-text text-muted">{{
    helperText
  }}</small>
</template>
