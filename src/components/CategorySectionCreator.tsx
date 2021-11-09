import useWindowSize from '@hook/useWindowSize';
import React from 'react';
import Box from './Box';
import CategorySectionHeader from './CategorySectionHeader';
import Container from './Container';

export interface CategorySectionCreatorProps {
  iconName?: string;
  title?: string;
  seeMoreLink?: string;
}

const CategorySectionCreator: React.FC<CategorySectionCreatorProps> = ({
  iconName,
  seeMoreLink,
  title,
  children,
}) => {
  const width = useWindowSize();
  return (
    <Box
      height={
        width > 1000
          ? '38rem'
          : width > 767
          ? '60rem'
          : width > 450
          ? '55rem'
          : '47rem'
      }
      mt="6rem"
      mb="8rem"
    >
      <Container pb="1rem" style={width < 600 ? { margin: '0.5rem' } : {}}>
        {title && (
          <CategorySectionHeader
            title={title}
            seeMoreLink={seeMoreLink}
            iconName={iconName}
          />
        )}

        {children}
      </Container>
    </Box>
  );
};

export default CategorySectionCreator;
