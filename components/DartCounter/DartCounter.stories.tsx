// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import DartCounter from "./DartCounter";
import React from "react";

const meta: Meta<typeof DartCounter> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: DartCounter,
};

export default meta;
type Story = StoryObj<typeof DartCounter>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: "Whole component",
  render: (args) => <DartCounter {...args} />,
  args: {
    noOfPlayers: 1,
  },
};
