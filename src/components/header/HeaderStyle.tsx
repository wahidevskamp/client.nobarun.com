import styled from 'styled-components';
import { layoutConstant } from 'utils/constants';
import { getTheme } from '../../utils/utils';

const StyledHeader = styled.header`
  position: relative;
  z-index: 1;
  height: 7.3rem;
  background: ${getTheme('colors.body.paper')};

  .logo {
    img {
      display: block;
    }
  }
  .icon-holder {
    span {
      font-size: 1.2rem;
      line-height: 1;
      margin-bottom: 4px;
    }
    h4 {
      margin: 0px;
      font-size: 1.4rem;
      line-height: 1;
      font-weight: 600;
    }
    div {
      margin-left: 6px;
    }
  }

  .user {
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    height: ${layoutConstant.mobileHeaderHeight};

    .logo,
    .icon-holder,
    .category-holder {
      display: none;
    }
    .header-right {
      display: none !important;
    }
  }
`;

export default StyledHeader;
