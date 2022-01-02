import Link from 'next/link';
import React from 'react';
import Accordion from '../accordion/Accordion';
import AccordionHeader from '../accordion/AccordionHeader';
import Card from '../Card';
import CheckBox from '../CheckBox';
import Divider from '../Divider';
import { H6, Paragraph, SemiSpan } from '../Typography';

const CategoryFilterCard = ({
  slug,
  stockStatus,
  categories,
  filters,
  setFilters,
}) => {
  return (
    <Card p="18px 27px" elevation={5}>
      <H6 mb="10px" fontSize="2.5rem">
        Categories
      </H6>

      {categories?.map((item) =>
        item?.children.length > 0 ? (
          <Accordion key={item?.name} expanded>
            <AccordionHeader
              px="0px"
              py="6px"
              color="text.muted"
              // justifyContent="flex-start"
            >
              <SemiSpan className="cursor-pointer" mr="9px">
                {item?.name}
              </SemiSpan>
            </AccordionHeader>
            {item?.children?.map((name) => (
              <Paragraph
                className="cursor-pointer"
                fontSize="18px"
                color="text.muted"
                pl="22px"
                py="6px"
                key={name}
              >
                {name}
              </Paragraph>
            ))}
          </Accordion>
        ) : (
          <Link href={`/category/${item.slug}`}>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '3px',
              }}
            >
              {item.icon && (
                <img
                  src={item.icon}
                  height="30"
                  width="30"
                  style={{ marginRight: '1.5rem' }}
                />
              )}
              <Paragraph
                className="cursor-pointer"
                fontSize="18px"
                color={slug === item?.slug ? 'red' : 'text.muted'}
                py="6px"
                key={item?.name}
              >
                {item?.name}
              </Paragraph>
            </a>
          </Link>
        ),
      )}

      <Divider my="24px" />

      <H6 mb="16px" fontSize="2.5rem">
        Stock Status
      </H6>
      {stockStatus?.map(
        (item) =>
          item.isPublished && (
            <CheckBox
              key={item.title}
              name={item.title}
              value={item.title}
              color="secondary"
              label={
                <SemiSpan color="inherit" fontSize="1.8rem">
                  {item.title}
                </SemiSpan>
              }
              my="10px"
              onChange={(e) => {
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
  );
};

export default CategoryFilterCard;
