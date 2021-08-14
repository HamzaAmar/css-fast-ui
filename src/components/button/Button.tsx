import React, { Fragment } from "react";
import { ButtonProps } from "./button.type";
import { Loading, StyledButton, Text } from "./styles";

const ButtonLink = StyledButton.withComponent("a");

const applyStyle = (ButtonWrapper) => {
  return (
    ButtonWrapper &&
    StyledButton.withComponent(
      ({ containsIcon, isLoading, isUnclickable, ...rest }) => (
        <ButtonWrapper {...rest} />
      )
    )
  );
};

function Button({
  isDisabled,
  isLoading,
  loadingText,
  isLink,
  children,
  ButtonWrapper,
  ...props
}: ButtonProps) {
  const buttonInner = (
    <Fragment>
      <Text>{children}</Text>
      {isLoading && <Loading>{loadingText || "Loading..."}</Loading>}
    </Fragment>
  );

  const StyledButtonWrapper = React.useMemo(
    () => applyStyle(ButtonWrapper),
    [ButtonWrapper]
  );

  let SelectedButton = StyledButton;
  if (ButtonWrapper) {
    SelectedButton = StyledButtonWrapper;
  } else if (isLink) {
    SelectedButton = ButtonLink;
  }

  return (
    <SelectedButton isLoading={isLoading} disabled={isDisabled} {...props}>
      {buttonInner}
    </SelectedButton>
  );
}

Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  isLink: false,
  appearance: "tertiary",
  isDisabled: false,
  isUnclickable: false,
  containsIcon: false,
  size: "medium",
  ButtonWrapper: undefined,
};

export default Button;
