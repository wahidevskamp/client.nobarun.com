import React from 'react';
import Accordion from '../accordion/Accordion';
import AccordionHeader from '../accordion/AccordionHeader';
import Card from '../Card';
import CheckBox from '../CheckBox';
import Divider from '../Divider';
import { H6, Paragraph, SemiSpan } from '../Typography';

const CategoryFilterCard = () => {
  return (
    <Card p="18px 27px" elevation={5}>
      <H6 mb="10px">Categories</H6>

      {categroyList.map((item) =>
        item.subCategories ? (
          <Accordion key={item.title} expanded>
            <AccordionHeader
              px="0px"
              py="6px"
              color="text.muted"
              // justifyContent="flex-start"
            >
              <SemiSpan className="cursor-pointer" mr="9px">
                {item.title}
              </SemiSpan>
            </AccordionHeader>
            {item.subCategories.map((name) => (
              <Paragraph
                className="cursor-pointer"
                fontSize="14px"
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
          <Paragraph
            className="cursor-pointer"
            fontSize="14px"
            color="text.muted"
            py="6px"
            key={item.title}
          >
            {item.title}
          </Paragraph>
        ),
      )}

      <Divider my="24px" />

      <H6 mb="16px">Stock Status</H6>
      {otherOptions.map((item) => (
        <CheckBox
          key={item}
          name={item}
          value={item}
          color="secondary"
          label={<SemiSpan color="inherit">{item}</SemiSpan>}
          my="10px"
          onChange={(e) => {
            console.log(e.target.value, e.target.checked);
          }}
        />
      ))}
    </Card>
  );
};

const categroyList = [
  {
    title: 'Bath Preparations',
    subCategories: ['Bubble Bath', 'Bath Capsules', 'Others'],
  },
  {
    title: 'Eye Makeup Preparations',
  },
  {
    title: 'Fragrance',
  },
  {
    title: 'Hair Preparations',
  },
];

const otherOptions = ['On Sale', 'In Stock', 'Featured'];

export default CategoryFilterCard;
