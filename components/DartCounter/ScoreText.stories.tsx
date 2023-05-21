// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import ScoreText from "./ScoreText";

const meta: Meta<typeof ScoreText> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: ScoreText,
};

export default meta;
type Story = StoryObj<typeof ScoreText>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: "Whole component",
  render: (args) => <ScoreText {...args} />,
  args: {
    value: 123,
  },
};
