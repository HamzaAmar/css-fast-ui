type Display = "inline" | "block";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: string;
  display?: Display;
  inline?: boolean;
  minimal?: boolean;
}
