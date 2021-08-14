import React from "react";

export type Size = "small" | "medium";
export type Appearance =
  | "primary"
  | "primaryOutline"
  | "secondary"
  | "secondaryOutline"
  | "tertiary"
  | "outline";

export interface ButtonProps {
  isLoading: boolean;
  loadingText: string;
  isLink: boolean;
  appearance: Appearance;
  isDisabled: boolean;
  isUnclickable: boolean;
  containsIcon: boolean;
  size: Size;
  ButtonWrapper: React.ReactNode;
  children: React.ReactNode;
}
