import React from "react";

export type Status = "positive" | "negative" | "neutral" | "error" | "warning";

export interface BadgeProps {
  status: Status;
  children?: React.ReactNode;
}
