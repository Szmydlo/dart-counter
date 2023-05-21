import type { Meta, StoryObj } from "@storybook/react";

import CurrentNumericValueField from "./CurrentNumericValueField";
import React from "react";

const meta: Meta<typeof CurrentNumericValueField> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: CurrentNumericValueField,
};

export default meta;
type Story = StoryObj<typeof CurrentNumericValueField>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <CurrentNumericValueField {...args} />,
  args: {
    value: 123,
  },
};
