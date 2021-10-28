import Accordian from '@component/accordion/Accordian';
import Button from '@component/buttons/Button';
import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import { H2 } from '@component/Typography';
import React from 'react';

const Questions = () => {
  return (
    <Card px="2em" py="3em" mb="2em">
      <FlexBox alignItems="center" justifyContent="space-between" mb="3rem">
        <H2 fontWeight="bold" textAlign="center" lineHeight="1" color="#e94560">
          Frequently asked questions and Answers
        </H2>
        <Button variant="contained" color="primary">
          Ask A Question
        </Button>
      </FlexBox>

      {[1, 2, 3].map((question, idx) => (
        <Accordian label={idx + 1 + '.	What is a Bone Saw Machine?'}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          repellendus harum dicta sequi fugiat expedita recusandae blanditiis id
          vitae non{question}!
        </Accordian>
      ))}
    </Card>
  );
};

export default Questions;
