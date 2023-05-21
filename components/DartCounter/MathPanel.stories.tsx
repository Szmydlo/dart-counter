// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import MathPanel from "./MathPanel";
import React from "react";

const meta: Meta<typeof MathPanel> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: MathPanel,
};

export default meta;
type Story = StoryObj<typeof MathPanel>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: "Whole component",
  render: (args) => <MathPanel {...args} />,
  args: {
    avg: 66.78,
    legAvg: 71.03,
    sets: 1,
    legs: 1,
    lastScore: 98,
  },
};
