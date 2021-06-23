import React from 'react';
import { Link } from 'react-router-dom';

import illustrationSVG from '../../assets/icons/illustration.svg';
import logoImg from '../../assets/icons/logo.svg';
import { Button, Img } from '../../components';
import { PageAuth, MainContent } from '../Login/styles';
import { H2, P } from './styles';

export const NewRoom: React.FC = () => {
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
          <form>
            <input type={'text'} placeholder={'Nome da sala'} />
            <Button type={'submit'} variant={'solid'}>
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
