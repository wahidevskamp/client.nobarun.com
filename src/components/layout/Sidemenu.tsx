import Accordion from '@component/accordion/Accordion';
import AccordionHeader from '@component/accordion/AccordionHeader';
import Box from '@component/Box';
import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Icon from '@component/icon/Icon';
import NavLink from '@component/nav-link/NavLink';
import { SemiSpan } from '@component/Typography';
import groceryNavigations from '@data/groceryNavigations';
import useAllProductCategories from '@hook/Home/useAllProductCategories';
import React, { Fragment, useEffect, useState } from 'react';

export interface SidemenuProps {
  isFixed?: boolean;
}

const Sidemenu: React.FC<SidemenuProps> = ({ isFixed }) => {
  const [navigations, setNavigations] = useState<any>(groceryNavigations);

  useEffect(() => {
    useAllProductCategories().then((res) => {
      const newNavigations = [...navigations];
      newNavigations[0].children = res;
      console.log(newNavigations);
      setNavigations(newNavigations);
    });
  }, []);

  // console.log(navigations);
  const renderChild = (childList: any[], type = 'parent') => {
    if (type === 'parent')
      return childList.map((item) => (
        <Fragment key={item.name}>
          <NavLink href={'/' + item.slug} color="gray.700">
            <FlexBox>
              <SemiSpan ml="2rem" py="6px" color="inherit" flex="1 1 0">
                {item.name}
              </SemiSpan>
            </FlexBox>
          </NavLink>
          {item.children && renderChild(item.children, 'child')}
        </Fragment>
      ));
    else
      return childList.map((item) => (
        <NavLink href={'/' + item.slug} color="gray.700">
          <FlexBox key={item.name}>
            <SemiSpan ml="3rem" py="6px" color="inherit" flex="1 1 0">
              {item.name}
            </SemiSpan>
          </FlexBox>
        </NavLink>
      ));
  };

  return (
    <Card
      position="relative"
      p="20px 20px 14px 24px"
      boxShadow="large"
      height="100%"
      borderRadius={0}
      overflow={isFixed ? 'auto' : 'unset'}
    >
      {navigations.map((item) => (
        <Box mb="0.5rem" key={item.name} color="gray.700">
          {item.children ? (
            <Accordion>
              <AccordionHeader
                px="0px"
                py="6px"
                color="inherit"
                justifyContent="flex-start"
              >
                <Box flex="1 1 0">
                  <NavLink href={'/' + item.slug} color="gray.700">
                    <FlexBox flex="1 1 0">
                      <Icon
                        variant="small"
                        mr="0.75rem"
                        defaultcolor="currentColor"
                      >
                        {item.icon}
                      </Icon>
                      <SemiSpan
                        color="inherit"
                        fontWeight="600"
                        mr="9px"
                        flex="1 1 0"
                      >
                        {item.name}
                      </SemiSpan>
                    </FlexBox>
                  </NavLink>
                </Box>
              </AccordionHeader>
              {item.children ? renderChild(item.children) : null}
            </Accordion>
          ) : (
            <NavLink href={'/' + item.slug} color="gray.700">
              <FlexBox py="6px" color="inherit" key={item.name}>
                <Icon variant="small" mr="0.75rem">
                  {item.icon}
                </Icon>
                <SemiSpan
                  color="inherit"
                  fontWeight="600"
                  mr="9px"
                  flex="1 1 0"
                >
                  {item.name}
                </SemiSpan>
              </FlexBox>
            </NavLink>
          )}
        </Box>
      ))}
    </Card>
  );
};

export default Sidemenu;
