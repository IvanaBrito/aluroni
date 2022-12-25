import Styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';
import React from 'react';

export default function PaginaPadrao({children} : { children?: React.ReactNode}){
  return(
    <>
      <header className={Styles.header}>
        <div className={Styles.header__text}>
            A casa do código e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}