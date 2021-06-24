import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import illustrationSVG from '../../assets/icons/illustration.svg';
import logoImg from '../../assets/icons/logo.svg';
import { Button, Img } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import useRedirect from '../../hooks/useRedirect';
import { database } from '../../services/firebase';
import { PageAuth, MainContent } from '../App/Login/styles';
import { H2, P } from './styles';

export const NewRoom: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newRoom, setNewRoom] = useState<string>('');
  const { user } = useAuth();
  const redirect = useRedirect();

  const delay = (amount = 750) =>
    new Promise(resolve => {
      setIsLoading(true);
      setTimeout(resolve, amount);
    });

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    await delay(750);
    redirect(`/rooms/${firebaseRoom.key}`);
  };

  return (
    <PageAuth>
      <aside>
        <Img
          src={illustrationSVG}
          alt={'Ilustração simbolizando perguntas e respostas'}
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiências em tempo-real</p>
      </aside>
      <MainContent>
        <div>
          <Img src={logoImg} alt={'Letmeask'} />
          <H2>Criar uma nova sala</H2>
          <form onSubmit={handleCreateRoom}>
            <input
              type={'text'}
              placeholder={'Nome da sala'}
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button
              type={'submit'}
              variant={'solid'}
              loading={isLoading}
              loadingMessage={'Carregando...'}
            >
              Criar sala
            </Button>
          </form>
          <P>
            Quer entrar em uma sala existente? <Link to={'/'}>Clique aqui</Link>
          </P>
        </div>
      </MainContent>
    </PageAuth>
  );
};
