import React, { useEffect, useState } from 'react';
import NavbarLayout from '@component/layout/NavbarLayout';
import Box from '@component/Box';
import { H1, H2, H4, Paragraph } from '@component/Typography';
import HoverBox from '@component/HoverBox';
import useAllFeaturedClients from '@hook/Home/useFeaturedClients';
import FlexBox from '@component/FlexBox';
import useAllClientsByCategory from '@hook/useAllClientsByCategory';

const categories = ['Agricultural & Food', 'BRANDS', 'Developer-Construction'];

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [allLoadedCategory, setAllLoadedCategory] = useState('');
  useEffect(() => {
    useAllClientsByCategory().then((data) => {
      setClients(data);
    });
  }, []);

  const loadMoreHandler = (id: string) => {
    if (allLoadedCategory === id) {
      setAllLoadedCategory('');
    } else {
      setAllLoadedCategory(id);
    }
  };
  console.log(allLoadedCategory);
  return (
    <Box py="4rem">
      <Box textAlign="center">
        <H1 fontSize="5rem" fontWeight="bold">
          Our Valuable Clients
        </H1>
        <Paragraph fontWeight="bold" fontSize="2rem" maxWidth="40rem" mx="auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </Paragraph>
      </Box>
      {clients.map((category) => {
        const length =
          allLoadedCategory === category.categoryName
            ? category.clients.length
            : 7;
        // console.log({ category, length });
        return (
          <Box mt="4rem">
            <H2 mb="2rem">{category.categoryName}</H2>
            <FlexBox flexWrap="wrap">
              {category.clients.slice(0, length).map((item, idx) => (
                <Box key={item.clientName + idx} className="client client_list">
                  <HoverBox borderRadius={5} className="client__body">
                    <img
                      src={item.logo}
                      style={{ width: '155px', height: '156px' }}
                    />
                  </HoverBox>
                  <H4
                    fontSize="1.4rem"
                    fontWeight="600"
                    className="client__title"
                  >
                    {item.clientName}
                  </H4>
                </Box>
              ))}
            </FlexBox>
            <Box textAlign="right">
              <button
                className="client_load-btn"
                disabled={category.clients.length < 7}
                onClick={() => loadMoreHandler(category.categoryName)}
              >
                {allLoadedCategory === category.categoryName
                  ? 'Show Less'
                  : 'Load More'}
              </button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

ClientsPage.layout = NavbarLayout;

export default ClientsPage;
