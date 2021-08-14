type Size = "tiny" | "small" | "medium" | "large";

export interface SizeProps {
  size: Size;
}

export interface AvatarProps {
  loading: boolean;
  username: string;
  src: string;
  size: Size;
}
