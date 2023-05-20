// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import KeyboardSection from "./KeyboardSection";
import React from "react";

const meta: Meta<typeof KeyboardSection> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: KeyboardSection,
};

export default meta;
type Story = StoryObj<typeof KeyboardSection>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <KeyboardSection />,
};
