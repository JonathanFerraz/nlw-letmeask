import React, { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

import enterRoom from '../../../assets/icons/enter-room.svg';
import googleIcon from '../../../assets/icons/google-icon.svg';
import illustrationSVG from '../../../assets/icons/illustration.svg';
import logoImg from '../../../assets/icons/logo.svg';
import { Button, Img } from '../../../components';
import { useAuth } from '../../../hooks/useAuth';
import useRedirect from '../../../hooks/useRedirect';
import { database } from '../../../services/firebase';
import { PageAuth, MainContent, Divider } from './styles';

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [roomCode, setRoomCode] = useState<string>('');
  const history = useHistory();
  const redirect = useRedirect();
  const { signInWithGoogle, user } = useAuth();

  const notify = () => toast.error('Sala inexistente.');

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      notify();
      return;
    }

    redirect(`/rooms/${roomCode}`);
  };

  return (
    <PageAuth>
      <Toaster />
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
          <Button variant={'google'} onClick={handleCreateRoom}>
            <Img src={googleIcon} alt={'Logo do Google'} />
            Crie sua sala com o Google
          </Button>
          <Divider>ou entre em uma sala</Divider>
          <form onSubmit={handleJoinRoom}>
            <input
              type={'text'}
              placeholder={'Digite o código da sala'}
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button
              type={'submit'}
              variant={'solid-icon'}
              loading={isLoading}
              loadingMessage={'Carregando...'}
            >
              <Img src={enterRoom} alt={'Entrar na sala ícone'} />
              Entrar na sala
            </Button>
          </form>
        </div>
      </MainContent>
    </PageAuth>
  );
};
