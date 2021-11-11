import React, { forwardRef } from 'react';
import useAllProductCategories from '@hook/Home/useAllProductCategories';
import CategoryMenuItem from './category-menu-item/CategoryMenuItem';
import { StyledCategoryDropdown } from './CategoryDropdownStyle';
import MegaMenu from './mega-menu/MegaMenu2';

export interface CategoryDropdownProps {
  open: boolean;
  position?: 'absolute' | 'relative';
  menu?: any;
  ref?: any;
  noOfCategory?: number;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = forwardRef(
  ({ open, position, menu, noOfCategory }, ref) => {
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
      useAllProductCategories().then((data) => {
        return setCategories(data);
      });
    }, []);

    let items = [];
    if (menu) {
      items = menu.map((item) => (
        <CategoryMenuItem title={item.title} href={item.url} key={item.title} />
      ));
    } else {
      items =
        categories.length > 0 &&
        categories.slice(0, noOfCategory).map((item) => (
          <CategoryMenuItem
            title={item.name}
            href={`/product/search/bikes`}
            icon={item.image}
            caret={item.children}
            key={item.id}
          >
            <MegaMenu data={item.children || {}} />
          </CategoryMenuItem>
        ));
    }
    return (
      <StyledCategoryDropdown open={open} position={position} ref={ref}>
        {items}
      </StyledCategoryDropdown>
    );
  },
);

CategoryDropdown.defaultProps = {
  position: 'absolute',
};

export default CategoryDropdown;
