import React from 'react';
import Breadcrumb from './Breadcrumb';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

const Template = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'Data', href: '#' },
  ],
  size: 'medium',
  custom: false,
};

export const Custom = Template.bind({});
Custom.args = {
  ...Default.args,
  custom: true,
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large',
};
