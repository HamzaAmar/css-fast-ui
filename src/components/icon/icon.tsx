import React from "react";
import styled from "styled-components";
import { icons } from "../../shared/icons";
import { IconProps } from "./icon.type";

const Svg = styled.svg<{ block: boolean }>`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  vertical-align: middle;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */
function Icon({ icon, display, width, height, ...props }: IconProps) {
  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={width}
      height={height}
      display={display}
      {...props}
    >
      <path fill="currentColor" d={icons[icon]} />
    </Svg>
  );
}

Icon.defaultProps = {
  display: "block",
  width: "20px",
  height: "20px",
};

export default Icon;
