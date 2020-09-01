import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Registration from './components/registration/registration';
import Admin from './components/admin/admin';
import SignIn from './components/signin/signin';
import Cart from './components/cart/cart';
import Catalog from './components/catalog/catalog';
import Account from './components/account/account';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {

  return (
    <div className="wrapper">
      <BrowserRouter >
        <Header role={props.role}/>
        <Route path="/registration" render={() => <Registration />}/>
        <Route path="/signin" render={() => <SignIn />}/>
        <Route path="/admin" render={() => <Admin />}/>

        <Route path="/acc" render={() => <Account personalInfo={props.state.personalInfo} history={props.state.history}/> }/>
        <Route path="/catalog" render={() => <Catalog sort={props.state.sortType} list={props.state.catalog}/>}/>
        <Route path="/cart" render={() => <Cart items={props.state.cart}/>}/>
        <Footer />
      </BrowserRouter>
        
      
    </div>


  );
}

export default App;
