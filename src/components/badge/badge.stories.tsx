import React from "react";
import { Meta, Story } from "@storybook/react";
import Badge from ".";
import { Icon } from "..";
import { IconProps } from "components/icon/icon.type";
import { Status } from "./badge.type";

export default {
  title: "Design System/Badge",
  component: Badge,
} as Meta;

export const AllBadges: Story<IconProps> = (args) => {
  return (
    <div>
      <Badge status="positive">Positive</Badge>
      <Badge status="negative">Negative</Badge>
      <Badge status="neutral">Neutral</Badge>
      <Badge status="error">Error</Badge>
      <Badge status="warning">Warning</Badge>
      <Badge status="positive">
        <Icon {...args} />
        with icon
      </Badge>
    </div>
  );
};
AllBadges.args = {
  icon: "facehappy",
  inline: true,
};

AllBadges.storyName = "all badges";

export const Positive = () => <Badge status="positive">Positive</Badge>;
export const Negative = () => <Badge status="negative">Negative</Badge>;
export const Warning = () => <Badge status="warning">Warning</Badge>;
export const Neutral = () => <Badge status="neutral">Neutral</Badge>;
export const Error = () => <Badge status="error">Error</Badge>;

export const WithIcon: Story<any> = (args) => {
  const { status, ...rest } = args;

  return (
    <Badge status={status}>
      <Icon {...rest} />
      with icon
    </Badge>
  );
};
WithIcon.args = {
  status: "warning",
  icon: "check",
  inline: true,
};

WithIcon.storyName = "with icon";
