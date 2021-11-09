import styled from 'styled-components';
import { getTheme } from '../../../utils/utils';

export const StyledCategoryMenuItem = styled.div`
  .category-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px 1rem;
    height: 45px;
    min-width: 285px;
    white-space: pre;
    transition: all 250ms ease-in-out;

    .title {
      padding-left: 0.75rem;
      flex-grow: 1;
      font-size: 1rem;
    }
  }

  :hover {
    & > .category-dropdown-link {
      color: ${getTheme('colors.primary.main')};
      background: ${getTheme('colors.primary.light')};
    }

    & > .mega-menu {
      display: block;
    }
  }
`;
