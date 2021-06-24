import React from 'react';

import Img from '../Img';
import { QuestionWrapper, ButtonsWrapper } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

export const Question: React.FC<QuestionProps> = ({
  content,
  author,
}: QuestionProps) => {
  return (
    <QuestionWrapper>
      <p>{content}</p>
      <footer>
        <div className={'user-info'}>
          <Img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <ButtonsWrapper></ButtonsWrapper>
      </footer>
    </QuestionWrapper>
  );
};
