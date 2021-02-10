import React from "react";
import { useTransition, animated } from "react-spring";
import { useLocation, useHistory } from "react-router-dom";
import transitionTypes from "./transitionTypes";
import { StyledAnimatedContainer } from "./StyledAnimatedContainer";

function RouteTransition({ children, animationType }) {
  const location = useLocation();
  const { action } = useHistory();
  const direction = action === "POP" ? "backward" : "forward";
  const animationConfig = transitionTypes[animationType || "RIGHT_TO_LEFT"][direction];

  const transitions = useTransition(location, (location) => location.pathname, {
    from: () => {
      return { ...animationConfig.from, $animating: 1 };
    },
    enter: () => {
      return { ...animationConfig.enter, $animating: 0 };
    },
    leave: () => {
      return { ...animationConfig.leave, $animating: 1 };
    },
  });

  return transitions.map(({ item: location, props, key }) => {
    const { $animating, ...styleProps } = props;
    return (
      <StyledAnimatedContainer
        as={animated.div}
        key={key}
        style={styleProps}
        $animating={$animating !== 1}
      >
        {children(location)}
      </StyledAnimatedContainer>
    );
  });
}

export default RouteTransition;
