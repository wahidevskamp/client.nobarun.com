import Link from 'next/link';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Icon from '../../icon/Icon';
import { StyledCategoryMenuItem } from './CategoryMenuItemStyle';

interface CategoryMenuItemProps {
  href: string;
  icon?: string;
  title: string;
  caret?: any[];
}

const CategoryMenuItem: React.FC<CategoryMenuItemProps> = ({
  href,
  icon,
  title,
  caret,
  children,
}) => {
  return (
    <StyledCategoryMenuItem>
      <Link href={href}>
        <a>
          <div className="category-dropdown-link">
            {icon && (
              <LazyLoadImage alt={title} src={icon} height={30} width={30} />
            )}
            <span className="title">{title}</span>
            {caret.length > 0 && <Icon variant="small">chevron-right</Icon>}
          </div>
        </a>
      </Link>
      {children}
    </StyledCategoryMenuItem>
  );
};

CategoryMenuItem.defaultProps = {
  caret: [],
};

export default CategoryMenuItem;
