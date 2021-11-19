import styled from 'styled-components';
import { layoutConstant } from 'utils/constants';
import { getTheme } from '../../utils/utils';

const StyledMobileNavigationBar = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  justify-content: space-around;
  align-items: flex-start;
  background: ${getTheme('colors.body.paper')};
  box-shadow: 0px 1px 4px 3px rgba(0, 0, 0, 0.1);
  z-index: 999;
  padding: 0 2rem;

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
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    /* height: 60%; */
    flex-grow: 1;
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
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
    .icon {
      margin-right: 10px;
    }
  }

  @media only screen and (max-width: 600px) {
    button {
      padding: 5px;
      &:not(:last-of-type) {
        margin-right: 0.5rem;
      }

      .icon {
        margin-right: 5px;
      }
    }
  }
  @media only screen and (max-width: 420px) {
    button {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    width: 100%;
  }
`;

export default StyledMobileNavigationBar;
