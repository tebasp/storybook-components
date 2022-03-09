import MyLabel from '../../components/MyLabel'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Config
export default {
  title: 'UI/Etiquetas/MyLabel',
  component: MyLabel,
  argTypes: {
    color: { control: { type: 'select' } },
    fontColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>

// Template: that returns the Component
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

// Variations
export const Basic = Template.bind({})
Basic.args = {
  size: 'normal',
}

export const AllCaps = Template.bind({})
AllCaps.args = {
  size: 'normal',
  allCaps: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: 'normal',
  color: 'secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  size: 'normal',
  color: 'tertiary',
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
  size: 'h1',
  fontColor: '#7f77c4',
}
