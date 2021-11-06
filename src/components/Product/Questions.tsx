import Accordian from '@component/accordion/Accordian';
import Button from '@component/buttons/Button';
import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import { H2 } from '@component/Typography';
import useWindowSize from '@hook/useWindowSize';
import React from 'react';

const Questions = ({ questions }) => {
  const width = useWindowSize();

  return (
    <Card
      mb="2em"
      px={width < 600 ? '1.5em' : '2em'}
      py={width < 600 ? '1.5em' : '3em'}
    >
      <FlexBox
        alignItems="center"
        justifyContent="space-between"
        mt={width < 600 ? '2rem' : '0'}
        mb="3rem"
        flexDirection={width < 600 ? 'column' : 'row'}
      >
        <H2
          fontWeight="bold"
          textAlign="center"
          lineHeight="1"
          color="#e94560"
          mb={width < 600 ? '1em' : '0'}
        >
          Frequently asked questions and Answers
        </H2>
        <Button variant="contained" color="primary">
          Ask A Question
        </Button>
      </FlexBox>

      {questions &&
        questions?.map((question, idx) => (
          <Accordian
            label={`${idx.toString().length === 1 && '0'}${idx + 1}.	${
              question.title ? question.title : `Question - ${idx + 1}`
            }`}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: question?.question,
              }}
            ></div>
          </Accordian>
        ))}
    </Card>
  );
};

export default Questions;
