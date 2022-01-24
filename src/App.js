import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Productos/ItemListContainer';
import CategoriaListContainer from './Components/Categorias/CategoriaListContainer';
import ItemDetailConteiner from './Components/DetalleProductos/ItemDetailConteiner';

//<ItemListContainer />
function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>

          {/* ruta home */}
          <Route exact path="/">

          </Route>


          <Route path="/categorias/:categoriasId">
            <ItemListContainer />
          </Route>

          <Route exact path="/productos">
            <CategoriaListContainer />
          </Route>

          <Route path="/item/:itemId">
            <ItemDetailConteiner />
          </Route>


        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
