import { useState } from 'react'

import { ListItem, Search } from "../index";

import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { navLinksInfo } from "../../utils/index";

import styles from './Navigation.module.css';

const Navigation = ({ type }) => {

  const [ classToggle, setClassToggle ] = useState('hidden'); 

  const clickHandler = event => {
    console.log(styles)
    event.preventDefault();
    if(classToggle === 'hidden') {
      return setClassToggle('show');
    }
    return setClassToggle('hidden');
  }

  return (
    <>
      <nav className={ styles[`${type}-nav`] }>
        <ul className={ styles[ `list-container-${ classToggle }` ] }>
          {
            navLinksInfo.map((item) => {
              return <ListItem 
                      key={ item.id } 
                      title={ item.title } 
                      path={ item.path } 
                      type={ type }
                    />;
            })
          }
        </ul>
      </nav>
      <Search />
      <button 
        className={ styles[ 'header-button' ] } 
        onClick={ clickHandler } >
        { 
          classToggle === 'hidden' ? <FaAngleDoubleDown /> : <FaAngleDoubleUp />
        }
      </button>
    </>
  );
};

export default Navigation;
