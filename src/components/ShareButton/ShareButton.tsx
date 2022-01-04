import React, { useState, useRef, useEffect } from 'react';
import IconButton from '@component/buttons/IconButton';
import Card from '@component/Card';
import Carousel from '@component/carousel/Carousel';
import Icon from '@component/icon/Icon';
import Modal from '@component/modal/Modal';
import Typography, { H3 } from '@component/Typography';
import {
  FacebookShareButton,
  FacebookIcon,
  LineIcon,
  LineShareButton,
  TelegramIcon,
  EmailShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
  PinterestIcon,
  EmailIcon,
} from 'react-share';
import Box from '@component/Box';
import FlexBox from '@component/FlexBox';
import Button from '@component/buttons/Button';
import useWindowSize from '@hook/useWindowSize';

interface ShareButtonProps {
  title: string;
  description: string;
  featured: string;
  hashtags: string[];
}
const ShareButton = (props: ShareButtonProps) => {
  const { title, description, featured, hashtags } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [url, setUrl] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const width = useWindowSize();

  useEffect(() => {
    setUrl(window.location.href);
  });

  const clipboardHandler = (e) => {
    const copyText = inputRef?.current;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    setIsCopied(true);
  };

  return (
    <>
      <button className="share" onClick={() => setModalOpen(true)}>
        <Icon size="1.78rem" mr="1rem">
          share-solid
        </Icon>
        <Typography fontSize="20px" fontWeight="400">
          Share
        </Typography>
      </button>
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setIsCopied(false);
        }}
      >
        <Card px="2rem" py="2rem" position="relative" className="share__modal">
          <IconButton
            className="product__review_image-close"
            onClick={() => {
              setModalOpen(false);
              setIsCopied(false);
            }}
          >
            <Icon>close</Icon>
          </IconButton>
          <H3 fontFamily="inherit">Share</H3>
          <Box py="2rem" mt="1rem" px="1rem">
            <Carousel
              totalSlides={9}
              visibleSlides={width < 500 ? 4 : 5}
              arrowButtonClass="collection-arrow"
            >
              <FacebookShareButton
                url={url}
                quote={description}
                hashtag={`#${hashtags && hashtags[0]}`}
              >
                <FacebookIcon />
              </FacebookShareButton>
              <FacebookMessengerShareButton appId="637786157664267" url={url}>
                <FacebookMessengerIcon />
              </FacebookMessengerShareButton>
              <LineShareButton url={url} title={title}>
                <LineIcon />
              </LineShareButton>
              <TelegramShareButton url={url} title={title}>
                <TelegramIcon />
              </TelegramShareButton>
              <TwitterShareButton url={url} title={title} hashtags={hashtags}>
                <TwitterIcon />
              </TwitterShareButton>
              <ViberShareButton url={url} title={title}>
                <ViberIcon />
              </ViberShareButton>
              <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon />
              </WhatsappShareButton>
              <PinterestShareButton
                media={featured}
                description={description}
                url={url}
              >
                <PinterestIcon />
              </PinterestShareButton>
              <EmailShareButton url={url} subject={title} body={description}>
                <EmailIcon />
              </EmailShareButton>
            </Carousel>
          </Box>
          <FlexBox onClick={clipboardHandler}>
            <input
              ref={inputRef}
              disabled
              defaultValue={url}
              className="share__clipboard"
            />
            <Button color="error">{isCopied ? 'Copied' : 'Copy'}</Button>
          </FlexBox>
        </Card>
      </Modal>
    </>
  );
};

export default ShareButton;