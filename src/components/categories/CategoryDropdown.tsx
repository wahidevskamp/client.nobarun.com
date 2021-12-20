import React, { forwardRef, useState, useEffect } from 'react';
import useAllProductCategories from '@hook/Home/useAllProductCategories';
import CategoryMenuItem from './category-menu-item/CategoryMenuItem';
import { StyledCategoryDropdown } from './CategoryDropdownStyle';
import MegaMenu from './mega-menu/MegaMenu2';
import Link from 'next/link';
import { StyledCategoryMenuItem } from './category-menu-item/CategoryMenuItemStyle';
import Icon from '@component/icon/Icon';

export interface CategoryDropdownProps {
  open: boolean;
  position?: 'absolute' | 'relative';
  menu?: any;
  ref?: any;
  noOfCategory?: number;
  CONTAINER?: number;
}

const MENU = 45;

const CategoryDropdown: React.FC<CategoryDropdownProps> = forwardRef(
  ({ open, position, CONTAINER }, ref) => {
    const [categories, setCategories] = useState([]);
    const [slice, setSlice] = useState(0);
    const [showLoadMore, setShowLoadMore] = useState(false);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
      useAllProductCategories().then((data) => setCategories(data));
    }, []);

    useEffect(() => {
      const menuHeight = categories.length * 45;
      const height = CONTAINER - 45;
      if (menuHeight > CONTAINER) {
        const noOfMenu = Math.floor(height / MENU);
        setSlice(noOfMenu);
        setShowLoadMore(true);
      } else {
        setSlice(categories.length);
        setShowLoadMore(false);
      }
    }, [categories]);

    let items = [];
    items =
      categories.length > 0 &&
      categories
        .concat(categories)
        .slice(0, slice)
        .map((item) => (
          <CategoryMenuItem
            title={item.name}
            href={`/product/category/${item.slug}`}
            icon={item.image}
            caret={item.children}
            key={item.id}
          >
            <MegaMenu data={item.children || {}} />
          </CategoryMenuItem>
        ));
    return (
      <StyledCategoryDropdown open={open} position={position} ref={ref}>
        {items}
        {showLoadMore && (
          <StyledCategoryMenuItem>
            <Link href="#">
              <div
                className="category-dropdown-link"
                onClick={(e) => {
                  e.preventDefault();
                  if (showAll) {
                    const height = CONTAINER - 45;
                    const noOfMenu = Math.floor(height / MENU);
                    setSlice(noOfMenu);
                    setShowAll(false);
                  } else {
                    setSlice(categories.length);
                    setShowAll(true);
                  }
                }}
              >
                <Icon size="20px" ml=".2rem" mr="1rem">
                  {showAll ? 'double-up' : 'double-down'}
                </Icon>
                <span className="title">
                  {showAll ? 'Show Less Categories' : 'Load All Categories'}
                </span>
              </div>
            </Link>
          </StyledCategoryMenuItem>
        )}
      </StyledCategoryDropdown>
    );
  },
);

CategoryDropdown.defaultProps = {
  position: 'absolute',
};

export default CategoryDropdown;
