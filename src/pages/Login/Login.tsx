import React from 'react';
import { useHistory } from 'react-router-dom';

import enterRoom from '../../assets/icons/enter-room.svg';
import googleIcon from '../../assets/icons/google-icon.svg';
import illustrationSVG from '../../assets/icons/illustration.svg';
import logoImg from '../../assets/icons/logo.svg';
import { Button, Img } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import { PageAuth, MainContent, Divider } from './styles';

export const Login: React.FC = () => {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
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
          <Button variant={'google'} onClick={handleCreateRoom}>
            <Img src={googleIcon} alt={'Logo do Google'} />
            Crie sua sala com o Google
          </Button>
          <Divider>ou entre em uma sala</Divider>
          <form>
            <input type={'text'} placeholder={'Digite o código da sala'} />
            <Button type={'submit'} variant={'solid-icon'}>
              <Img src={enterRoom} alt={'Entrar na sala ícone'} />
              Entrar na sala
            </Button>
          </form>
        </div>
      </MainContent>
    </PageAuth>
  );
};
