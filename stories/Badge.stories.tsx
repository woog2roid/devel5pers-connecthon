import Badge from "../components/Badge";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: 'Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

export const Primary: ComponentStory<typeof Badge> = () => <Badge />
