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
        <Header role={props.state.role}/>
        <Route path="/registration" render={() => <Registration />}/>
        <Route path="/signin" render={() => <SignIn />}/>
        <Route path="/admin" render={() => <Admin />}/>

        <Route path="/acc" render={() => <Account state={props.state.accountPage}/> }/>
        <Route path="/catalog" render={() => <Catalog state={props.state.catalogPage} dispatch={props.dispatch}/>}/>
        <Route path="/cart" render={() => <Cart state={props.state.cartPage}/>}/>
        <Footer />
      </BrowserRouter>
        
      
    </div>


  );
}

export default App;
