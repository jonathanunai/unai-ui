
import Cta from '../components/elements/Cta.vue';

export default {
  title: 'Cta',
  component: Cta,
};

const Template = (args) => ({
  components: { Cta },
  setup() {
    return { args };
  },
  template: '<Cta v-bind="args"/>',
});

export const Primary = Template.bind({});

Primary.args = {
  label: 'Primary',
  variant: 'primary'
};
export const Secondary = Template.bind({});

Secondary.args = {
  label: 'Secondary',
  variant: 'secondary'
};