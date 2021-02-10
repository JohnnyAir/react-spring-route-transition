import styled, { css } from "styled-components";

export const StyledAnimatedContainer = styled.div`
  height: 100%;
  width: 100%;
  ${(props) =>
    props.$animating &&
    css`
      position: absolute;
    `};
`;
