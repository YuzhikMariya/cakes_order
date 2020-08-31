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

function App() {
  let obj = [
    {
      title: "The best cake",
      ref: "#",
      count: 2
    },
    {
      title: "Jsjdf fkjh sksfl lf",
      ref: "#",
      count: 2
    },
    {
      title: "The sldfk lsf best cake",
      ref: "#",
      count: 2
    },
    {
      title: "p  oI jhsk dksd best cake",
      ref: "#",
      count: 2
    },
    {
      title: "The best cake",
      ref: "#",
      count: 12
    }
  ]

  let obj1=[
    {
      photo: "cake1.png",
      title: "Kkjsdfh  ksf kjdsfk h",
      price: 13,
      count: 4
    },
    {
      photo: "cake2.png",
      title: "Kkjsdfh  ksf  h",
      price: 13,
      count: 54
    },
    {
      photo: "cake3.png",
      title: "Ojn  ksf kjdsfk h",
      price: 13,
      count: 4
    },
    {
      photo: "cake4.png",
      title: "Lnsf f ksf kjdsfk h",
      price: 13,
      count: 4
    },
    {
      photo: "cake5.png",
      title: "Kkjsdfh  ksf kjdsfk h",
      price: 13,
      count: 4
    },
    {
      photo: "cake6.png",
      title: "Kkjsdfh  ksf kjdsfk h",
      price: 13,
      count: 4
    },
    {
      photo: "cake7.png",
      title: "Kkjsdfh  ksf kjdsfk h",
      price: 13,
      count: 4
    },
    {
      photo: "cake1.png",
      title: "Kkjsdfh  ksf kjdsfk h",
      price: 13,
      count: 4
    },
    {
      photo: "cake8.png",
      title: "Kkjsdfh  ksf kjdsfk h",
      price: 13,
      count: 4
    }
  ]

  let obj2 = [];

  let obj3=[
    {
      photo: "cake1.png",
      title: "Kkjsdfh  ksf kjdsfk h",
      price: 13,
      time: 4
    },
    {
      photo: "cake2.png",
      title: "Kkjsdfh  ksf  h",
      price: 13,
      time: 54
    },
    {
      photo: "cake3.png",
      title: "Ojn  ksf kjdsfk h",
      price: 13,
      time: 4
    },
    {
      photo: "cake4.png",
      title: "Lnsf f ksf kjdsfk h",
      price: 13,
      time: 4
    },
    {
      photo: "cake5.png",
      title: "Kkjsdfh  ksf kjdsfk h",
      price: 13,
      time: 4
    },
    {
      photo: "cake6.png",
      title: "Kkjsdfh  ksf kjdsfk h",
      price: 13,
      time: 4
    },
    {
      photo: "cake7.png",
      title: "Kkjsdfh  ksf kjdsfk h",
      price: 13,
      time: 4
    },
    {
      photo: "cake1.png",
      title: "Kkjsdfh  ksf kjdsfk h",
      price: 13,
      time: 4
    },
    {
      photo: "cake8.png",
      title: "Kkjsdfh  ksf kjdsfk h",
      price: 13,
      time: 4
    }
  ]

  return (
    <div className="wrapper">
      <Header />
      {/* <Registration />
      <Admin />
      <SignIn /> */}
      {/* <Cart items={obj2}/> */}
      <Catalog sort="sortByAll" list={obj3}/>
       
      {/* <Account surname="Yuzhyk" name="Maryia" email="mari.yuzhik@mail.ru" phone="+375296965625" history={obj}/>  */}
      <Footer />
    </div>


  );
}

export default App;
