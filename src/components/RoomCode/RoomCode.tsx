import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import copyImg from '../../assets/icons/copy.svg';
import Img from '../Img';
import { ButtonRipple } from './styles';

interface RoomCodeProps {
  code: string;
}

export const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  const notify = () => toast.success('Código copiado.');

  function copyRoomCode() {
    navigator.clipboard.writeText(code);
    notify();
  }

  return (
    <>
      <Toaster />
      <ButtonRipple onClick={copyRoomCode}>
        <div>
          <Img src={copyImg} alt={'Copiar código'} />
        </div>
        <span>Sala #{code}</span>
      </ButtonRipple>
    </>
  );
};
