import styled from 'styled-components';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';
import { layoutConstant } from 'utils/constants';

const Container = styled.div<
  LayoutProps & ColorProps & PositionProps & SpaceProps & FlexboxProps
>`
  max-width: ${layoutConstant.containerWidth};
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 1399px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media only screen and (max-width: 450px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  ${color}
  ${position}
  ${flexbox}
  ${layout}
  ${space}
`;

export default Container;
