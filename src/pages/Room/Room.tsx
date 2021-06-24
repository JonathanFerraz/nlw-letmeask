import React, { FormEvent, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import logoImg from '../../assets/icons/logo.svg';
import { Button, Img, RoomCode } from '../../components';
import Question from '../../components/Question';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { PageRoom, Main, RoomTitle } from './styles';

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  }
>;

type QuestionProps = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

type RoomParams = {
  id: string;
};

export const Room: React.FC = () => {
  const [newQuestion, setNewQuestion] = useState<string>('');
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState();
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const notify = () => toast.success('Pergunta cadastrada com sucesso.');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
          };
        },
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [roomId]);

  const delay = (amount = 750) =>
    new Promise(resolve => {
      setIsLoading(true);
      setTimeout(resolve, amount);
    });

  const handleCreateNewQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await delay(750);
    await database.ref(`rooms/${roomId}/questions`).push(question);
    setIsLoading(false);
    notify();
    setNewQuestion('');
  };

  return (
    <PageRoom>
      <Toaster />
      <header>
        <div>
          <Img src={logoImg} alt={'Logotipo da aplicação'} />
          <RoomCode code={roomId} />
        </div>
      </header>

      <Main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length}{' '}
              {questions.length >= 2 ? 'perguntas' : 'pergunta'}
            </span>
          )}
        </RoomTitle>
        <form onSubmit={handleCreateNewQuestion}>
          <textarea
            placeholder={'O que você quer perguntar?'}
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <div>
            {user ? (
              <div className="user-info">
                <Img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login</button>.
              </span>
            )}
            <Button
              variant={'solid'}
              type={'submit'}
              style={{ padding: '0 3rem' }}
              disabled={!user}
              loading={isLoading}
              loadingMessage={'Enviando pergunta...'}
            >
              Enviar Pergunta
            </Button>
          </div>
        </form>
        {questions.map(question => {
          return (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            />
          );
        })}
      </Main>
    </PageRoom>
  );
};
