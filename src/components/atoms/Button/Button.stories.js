import MyButton from "./ButtonComponent.vue";

export default {
  title: "atom/Button",
  component: MyButton,
  args: {
    onClick: () => alert("button clicked!"),
  }
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  buttonLabel: "Button",
  isDisabled: false,
  buttonClasses: "btn btn-primary",
};
