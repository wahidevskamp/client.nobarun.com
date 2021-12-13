import Accordion from '@component/accordion/Accordion';
import AccordionHeader from '@component/accordion/AccordionHeader';
import Box from '@component/Box';
import Card from '@component/Card';
import CheckBox from '@component/CheckBox';
import Divider from '@component/Divider';
import Tags from '@component/Product/Tags';
import { H6, SemiSpan, Paragraph } from '@component/Typography';
import { useRouter } from 'next/router';
import React from 'react';

const CollectionFilterCard = ({
  slug,
  categories,
  setSelectedCategory,
  stockStatus,
  filters,
  setFilters,
}) => {
  const router = useRouter();
  const selectCategory = (name) => {
    setSelectedCategory(name);
  };
  return (
    <>
      <Card p="18px 27px" elevation={5}>
        <H6 mb="10px">Categories</H6>
        {categories?.map((item) =>
          item?.children.length > 0 ? (
            <Accordion key={item?.name} expanded>
              <AccordionHeader
                px="0px"
                py="6px"
                color="text.muted"
                // justifyContent="flex-start"
              >
                <SemiSpan
                  className="cursor-pointer"
                  mr="9px"
                  color={slug === item?.name ? 'red' : 'text.muted'}
                  onClick={() => selectCategory(item?.name)}
                >
                  {item?.name}
                </SemiSpan>
              </AccordionHeader>
              {item?.children?.map((subChild) => (
                <Paragraph
                  className="cursor-pointer"
                  fontSize="14px"
                  color={slug === subChild?.name ? 'red' : 'text.muted'}
                  pl="22px"
                  py="6px"
                  key={subChild.name}
                  onClick={() => selectCategory(subChild?.name)}
                >
                  {subChild.name}
                </Paragraph>
              ))}
            </Accordion>
          ) : (
            <Paragraph
              className="cursor-pointer"
              fontSize="14px"
              color={slug === item?.name ? 'red' : 'text.muted'}
              py="6px"
              key={item?.name}
              onClick={() => selectCategory(item?.name)}
            >
              {item?.name}
            </Paragraph>
          ),
        )}
        <Divider my="24px" />

        <H6 mb="16px">Stock Status</H6>
        {stockStatus?.map(
          (item) =>
            item.isPublished && (
              <CheckBox
                key={item.title}
                name={item.title}
                value={item.title}
                color="secondary"
                label={<SemiSpan color="inherit">{item.title}</SemiSpan>}
                my="10px"
                onChange={(e) => {
                  // console.log(e.target.value, e.target.checked);
                  if (e.target.checked) {
                    const newFilters = [...filters, item.title];
                    setFilters(newFilters);
                  } else {
                    const index = filters.findIndex(
                      (filter) => filter === item.title,
                    );
                    const newFilters = [...filters];
                    if (index !== -1) {
                      newFilters.splice(index, 1);
                      setFilters(newFilters);
                    }
                  }
                }}
              />
            ),
        )}
      </Card>
    </>
  );
};

export default CollectionFilterCard;
