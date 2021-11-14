import styled from 'styled-components';
import { layoutConstant } from 'utils/constants';
import { getTheme } from '../../utils/utils';

const StyledMobileNavigationBar = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${layoutConstant.mobileNavHeight};
  justify-content: space-around;
  align-items: center;
  background: ${getTheme('colors.body.paper')};
  box-shadow: 0px 1px 4px 3px rgba(0, 0, 0, 0.1);
  z-index: 999;

  .link {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;

    .icon {
      margin-bottom: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  button {
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 80%;
    font-size: 14px;
    font-weight: 600;
    border: none;
    color: #fff;
    border-radius: 10px;
    &.whatsapp {
      background-color: #40c351;
    }
    &.call {
      background-color: #0082c9;
    }
    &.quote {
      background-color: #ec1c24;
    }
    .icon {
      margin-right: 10px;
    }
  }

  @media only screen and (max-width: 600px) {
    button {
      height: 70%;
      padding: 5px;
      .icon {
        margin-right: 5px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    width: 100vw;
  }
`;

export default StyledMobileNavigationBar;
