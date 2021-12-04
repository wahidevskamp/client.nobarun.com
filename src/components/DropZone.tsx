import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from './Box';
import Button from './buttons/Button';
import Divider from './Divider';
import FlexBox from './FlexBox';
import Typography, { H5, Small } from './Typography';

export interface DropZoneProps {
  label?: string;
  images?: string[];
  onChange?: (files: []) => void;
}

const DropZone: React.FC<DropZoneProps> = ({ label, images, onChange }) => {
  // const [images, setImages] = useState<string[]>([]);

  // useEffect(() => {
  //   const images = JSON.parse(sessionStorage.getItem('reviewImage'));
  //   setImages(images);
  // }, []);

  // useEffect(() => {
  //   const images = JSON.parse(sessionStorage.getItem('reviewImage'));
  //   setImages(images);
  // }, [state]);

  const onDrop = useCallback((acceptedFiles) => {
    if (onChange) onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: '.jpeg,.jpg,.png,.gif',
    maxFiles: 10,
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="200px"
      border="1px dashed"
      borderColor="gray.400"
      borderRadius="10px"
      bg={isDragActive && 'gray.200'}
      transition="all 250ms ease-in-out"
      py="2rem"
      style={{ outline: 'none' }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {images?.length === 0 ? (
        <>
          <H5 mb="18px" color="text.muted">
            {label || 'Drag & drop image here'}
          </H5>

          <Divider width="200px" mx="auto" />
          <Typography
            color="text.muted"
            bg={isDragActive ? 'gray.200' : 'body.paper'}
            lineHeight="1"
            px="1rem"
            mt="-10px"
            mb="18px"
          >
            on
          </Typography>
        </>
      ) : (
        <FlexBox>
          {images?.map((image) => (
            <Box mr="1rem" mb="1rem">
              <img src={image} height="100px" width="100px" />
            </Box>
          ))}
        </FlexBox>
      )}
      <Button
        color="primary"
        bg="primary.light"
        px="2rem"
        mb="22px"
        type="button"
      >
        Select files
      </Button>

      <Small color="text.muted">
        Allowed file types: jpg, gif, png,mp4,avi max total size of files:
        100MB, max number of files: 8!
      </Small>
    </Box>
  );
};

export default DropZone;
