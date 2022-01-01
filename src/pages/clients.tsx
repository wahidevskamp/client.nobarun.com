import React, { useEffect, useState } from 'react';
import NavbarLayout from '@component/layout/NavbarLayout';
import Box from '@component/Box';
import { H1, H2, H4, Paragraph } from '@component/Typography';
import HoverBox from '@component/HoverBox';
import useAllClientsByCategory from '@hook/useAllClientsByCategory';
import useWindowSize from '@hook/useWindowSize';

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

  const width = useWindowSize();
  let noOfClients = 7;
  if (width < 1250) noOfClients = 6;
  if (width < 1170) noOfClients = 5;
  if (width < 1153) noOfClients = 6;
  if (width < 1053) noOfClients = 5;
  if (width < 1041) noOfClients = 6;
  if (width < 936) noOfClients = 5;
  if (width < 880) noOfClients = 7;
  if (width < 710) noOfClients = 6;
  return (
    <Box py="4rem">
      <div className="hero">
        <h1 className="hero__title">Our Valuable Clients</h1>
        <p className="hero__content">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      {clients.map((category) => {
        const length =
          allLoadedCategory === category.categoryName
            ? category.clients.length
            : noOfClients;
        return (
          <Box mt="4rem">
            <H2 mb="2rem">{category.categoryName}</H2>
            <div className="clients-list_wrapper">
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
            </div>
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
