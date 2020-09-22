import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {RegistrationContainer} from './components/registration/registrationContainer';
import Catalog from './components/catalog/catalog';
import { Route} from 'react-router-dom';
import { CartContainer } from './components/cart/cartContainer';
import { CakeContainer } from './components/cake/cakeContainer';
import { AccountContainer } from './components/account/accountContainer';
import { AdminContainer } from './components/admin/adminContainer';
import { SigninContainer } from './components/signin/signinContainer';

function App(props) {
  return (
    <div className="wrapper">
        <Header />
        <Route path="/registration" render={() => <RegistrationContainer />}/>
        <Route path="/signin" render={() => <SigninContainer />}/>
        <Route path="/admin" render={() => <AdminContainer />}/>

        <Route path="/acc" render={() => <AccountContainer /> }/>
        <Route exact path="/" render={() => <Catalog catalogLength={props.state.catalogPage.catalog.length}/>}/>
        <Route path="/cart" render={() => <CartContainer />}/>
        <Route path="/cake/:id" render={({match}) => <CakeContainer match={match}/>}/>
        <Footer />
            
    </div>


  );
}

export default App;
