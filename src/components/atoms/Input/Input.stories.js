import TextInput from "./InputComponent.vue";

export default {
  title: "atom/TextInput",
  component: TextInput,
  args: {},
};

const Template = (args) => ({
  components: { TextInput },
  setup() {
    return { args };
  },
  template: '<text-input v-bind="args" />',
});

export const Input = Template.bind({});
Input.args = {
  inputLabel: "Email Address",
  helperText: "We will not share your email address to anyone.",
  placeholder: "Add your email here...",
};
