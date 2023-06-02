import React, { useState } from 'react';
import './App.css';
import {Container} from 'react-bootstrap'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Category from './components/Category';
import Cards from './components/Cards';
import {items} from './data';

const App = ()=> {
  const [itemsData, setItemData] = useState(items);
  
  // 1-filtrer avec les categories
  const filterCategory= (cat) => {
    if(cat=== 'Menu') 
    {
      //affiche le menu entier
      setItemData(items)
    }else{
      // affiche en fonction des catégories(dejeune , petit dejeune, dîner)
      const newArry = items.filter((item)=>item.category === cat)
      setItemData(newArry)
    }
  }

  //2- je veux recueprer dans mon tableau juste cle/valeur category
  // pour éviter la répitition sur la valeur de la clé category , je vais utilié le spreadOprateur pour les mettre dans un tableau et "new Set"
  const newArry1 = ["Menu",...new Set(items.map((i)=> i.category))]

  //3- fonction de recherche la le foom de Navbar
  const filterWordSearch = (word) => {
    //si l'utilisateur n'a pas mit de mot dans l'input
    if(word !== "")  
    {
      const newArry3 = ["Menu",...new Set(items.map((i)=> i.title))]
      console.log(newArry3)
      const newArry = items.filter((item)=>item.title === word)
      setItemData(newArry)
    }
  }

  return (
    <div className="App">
      <Navbar filterSearch ={filterWordSearch}/>
      <Container>
        <Header/>
        <Category filter= {filterCategory}  allCat={newArry1}/>
        <Cards donnees = {itemsData}/>
     </Container>
    </div>
  );
}
export default App;
