import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Registration from './components/registration/registration';
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
        <Route path="/registration" render={() => <Registration />}/>
        <Route path="/signin" render={() => <SigninContainer />}/>
        <Route path="/admin" render={() => <AdminContainer />}/>

        <Route path="/acc" render={() => <AccountContainer state={props.state.accountPage}/> }/>
        <Route exact path="/" render={() => <Catalog catalog={props.state.catalogPage.catalog}/>}/>
        <Route path="/cart" render={() => <CartContainer />}/>
        <Route path="/cake/:id" render={({match}) => <CakeContainer match={match}/>}/>
        <Footer />
            
    </div>


  );
}

export default App;
