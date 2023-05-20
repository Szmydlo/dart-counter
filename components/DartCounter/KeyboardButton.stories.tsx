// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import KeyboardButton from "./KeyboardButton";
import React from "react";

const meta: Meta<typeof KeyboardButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: KeyboardButton,
  argTypes: {
    buttonText: {
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "CLR",
        "OK",
        "BACK",
      ],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KeyboardButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <KeyboardButton {...args} />,
  args: {
    buttonText: "0",
  },
};
