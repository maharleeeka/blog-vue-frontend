import Loading from "./LoaderComponent.vue";

export default {
  title: "atom/Loading",
  component: Loading,
  argTypes: {},
};

const Template = (args) => ({
  components: { Loading },
  setup() {
    return { args };
  },
  template: '<loading v-bind="args" />',
});

export const Basic = Template.bind({});
Basic.args = {
  loaderMessage: "Please wait...",
  spinnerColor: "#e3e3e3",
};
