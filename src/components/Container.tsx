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

const Container = styled.div<
  LayoutProps & ColorProps & PositionProps & SpaceProps & FlexboxProps
>`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 1699px) {
    max-width: 1300px;
  }
  @media only screen and (max-width: 1399px) {
    max-width: 1200px;
  }
  @media only screen and (max-width: 1299px) {
    max-width: 1140px;
  }
  @media only screen and (max-width: 1199px) {
    max-width: 1000px;
  }
  @media only screen and (max-width: 1045px) {
    max-width: 900px;
  }
  @media only screen and (max-width: 945px) {
    max-width: 750px;
  }
  @media only screen and (max-width: 760px) {
    max-width: 100%;
    margin-left: 20px;
    margin-right: 20px;
  }

  ${color}
  ${position}
  ${flexbox}
  ${layout}
  ${space}
`;

export default Container;
