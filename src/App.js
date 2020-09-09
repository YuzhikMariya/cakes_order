import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Registration from './components/registration/registration';
import Admin from './components/admin/admin';
import SignIn from './components/signin/signin';
import Catalog from './components/catalog/catalog';
import Account from './components/account/account';
import { Route } from 'react-router-dom';
import { CartContainer } from './components/cart/cartContainer';
import { CakeContainer } from './components/cake/cakeContainer';

function App(props) {
  return (
    <div className="wrapper">
        <Header role={props.state.role}/>
        <Route path="/registration" render={() => <Registration />}/>
        <Route path="/signin" render={() => <SignIn />}/>
        <Route path="/admin" render={() => <Admin />}/>

        <Route path="/acc" render={() => <Account state={props.state.accountPage}/> }/>
        <Route path="/catalog" render={() => <Catalog catalog={props.state.catalogPage.catalog}/>}/>
        <Route path="/cart" render={() => <CartContainer />}/>
        <Route path="/cake/:id" render={({match}) => <CakeContainer match={match}/>}/>
        <Footer />
          
    </div>


  );
}

export default App;
