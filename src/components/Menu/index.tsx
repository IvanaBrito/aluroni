import Styles from './Menu.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Menu(){
  const rotas = [{
    label: 'Inicio',
    to: '/'
  },
  {
    label: 'Cardápio',
    to: '/cardapio'
  },
  {
    label: 'Sobre',
    to: '/sobre'
  }
  ];
  return(
    <nav className={Styles.menu}>
      <Logo />
      <ul className={Styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={Styles.menu__link}>
            <Link to={rota.to}> {rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}