import React, { useState, useRef, useEffect } from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';
import { Chip } from '@component/Chip';
import Button from '@component/buttons/Button';
import Link from 'next/link';

const NO_OF_LINES = 4;
const LINE_HEIGHT = 55;

const Tags = ({ chips }) => {
  const [showAll, setShowAll] = useState(false);
  const [canExpanded, setCanExpanded] = useState(false);
  const tagsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const maxHeight = LINE_HEIGHT * NO_OF_LINES;
    if (tagsRef.current.offsetHeight > maxHeight) {
      setCanExpanded(true);
      tagsRef.current.style.height = `${maxHeight}px`;
    }
  }, []);
  return (
    <ProductCard12 title="Product Tags">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          overflow: 'hidden',
        }}
        ref={tagsRef}
      >
        {chips?.map((chip) => (
          <Link href={`/product/tags/${chip.replace(' ', '-')}`}>
            <a>
              <Chip
                bg="#eee"
                p="5px 10px"
                mr="10px"
                mb="15px"
                boxShadow="0px 1px 3px rgba(3, 0, 71, 0.09)"
                fontSize="2rem"
              >
                {chip}
              </Chip>
            </a>
          </Link>
        ))}
      </div>
      {canExpanded && (
        <Button
          style={{ margin: 'auto' }}
          onClick={() => {
            setShowAll((show) => !show);
            if (showAll)
              tagsRef.current.style.height = `${LINE_HEIGHT * NO_OF_LINES}px`;
            else tagsRef.current.style.height = 'auto';
          }}
        >
          {showAll ? 'Show Less' : 'Load More'}
        </Button>
      )}
    </ProductCard12>
  );
};

export default Tags;
