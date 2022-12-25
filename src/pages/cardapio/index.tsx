import Styles from './Cardapio.module.scss';
import Buscador from './Buscador';
import {useState} from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import stylesTema from 'styles/Tema.module.scss';

export default function Cardapio(){
  const [busca, setBusca] = useState('');
  //como o estado inicial é null, precisa setar o tipo da const para aceitar algo além de null
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  return(
    <section className={Styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápio</h3>
      <Buscador 
        busca={busca} 
        setBusca={setBusca}/>
      <div className={Styles.cardapio__filtros}>
        <Filtros 
          filtro={filtro} 
          setFiltro={setFiltro}
        />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
    </section>
  );
}