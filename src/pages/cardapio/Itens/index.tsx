import styles from './Itens.module.scss';
import cardapio from 'data/cardapio.json';
import Item from './Item';
import { useEffect, useState } from 'react';
import { Cardapio } from 'types/Prato';

interface Props{
    busca: string,
    filtro: number | null,
    ordenador: string;
}

export default function Itens(props: Props){
  const [lista, setLista] = useState(cardapio);
  const {busca, filtro, ordenador} = props;

  function testaBusca(title: string){
    //o RegExp facilita a busca. transforma a string em um conjunto de caracteres
    //com ele é possível comprar as palavras não completas. ex: busca = mass e o titulo = massa
    //ele dá como true
    //o 'i' é para ignorar minusculo e maisculo
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number){
    if(filtro !== null) return filtro === id;
    return true;
  }
  function ordenar(novaLista: Cardapio){
    switch(ordenador){
    case 'porcao':
      return novaLista.sort((a, b) => a.size > b.size? 1 : -1);
    case 'qtd_pessoas':
      return novaLista.sort((a, b) => a.serving > b.serving? 1 : -1);
    case 'preco':
      return novaLista.sort((a, b) => a.price > b.price? 1 : -1);
    default:
      return novaLista;
    }
  }

  useEffect(()=>{
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);
  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item 
          {...item}
          key={item.id}
        />
      ))}
    </div>
  );
}