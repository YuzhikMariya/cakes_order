const INCREASE_COUNT = 'INCREASE-COUNT';
const DECREASE_COUNT = 'DECREASE-COUNT';
const DELETE_FROM_CART = 'DELETE-FROM-CART';
const ADD_TO_CART = 'ADD-TO-CART';
const BUY = 'BUY';
const SET_CART = 'SET-CART';

let initialState = {
    cart: [
        {
          id: "1", 
          photo: "cake1.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          count: 4
        },
        {
          id: "2", 
          photo: "cake2.png",
          title: "Kkjsdfh  ksf  h",
          price: 13,
          count: 54
        }
      ]
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREASE_COUNT:{
        let newState = {...state};
        newState.cart = [];
        state.cart.forEach((el) => {
          if(el.id == action.id){
            el.count++;
          }
          newState.cart.push(el);
        });
        return newState;
      }
      case DECREASE_COUNT:{
        let newState = {...state};
        newState.cart = [];
        state.cart.forEach((el) => {
          if(el.id == action.id){
            el.count--;
          }
          newState.cart.push(el);
        });
        return newState;
      }
      case DELETE_FROM_CART:{
        let newState = {...state};
        newState.cart = newState.cart.filter((el) => 
          el.id != action.id
        )
        return newState;}
      case BUY:{
        let newState = {...state};
        newState.cart = [];
        return newState;
      }
      case ADD_TO_CART:{
        let newState = {...state};
        newState.cart = [];
        state.cart.forEach((el) => {
          newState.cart.push(el);
        })
        newState.cart.push(action.addToCartItem);
        
        return newState;
      }
      case SET_CART:{
        let newState = {...state};
        newState.cart = [];
        action.cart.forEach(el => {
          newState.cart.push(el);
        });
        return newState;
      }
      default:
        return state;
    }
}

export const increaseCountActionCreator = (id) => {
    return {
      type: INCREASE_COUNT,
      id: id
    }
}

export const decreaseCountActionCreator = (id) => {
  return {
    type: DECREASE_COUNT,
    id: id
  }
}

export const deleteFromCartActionCreator = (id) => {
  return {
    type: DELETE_FROM_CART,
    id: id
  }
}

export const buyActionCreator = () => {
  return {
    type: BUY
  }
}

export const addToCartActionCreator = (id, photo, title, price) => {
  return {
    type: ADD_TO_CART,
    addToCartItem:{
      id: id,
      photo: photo,
      title: title,
      price: price,
      count: 1
    }
  }
}

export const setCartActionCreator = (obj) => {
  let cart = [];
  obj.forEach(element => {
    let tempCartItem = {
      id: element.cake.id,
      photo: element.cake.photo,
      title: element.cake.title,
      price: element.cake.price,
      count: element.count
    };
    cart.push(tempCartItem);
  });
  return {
    type: SET_CART,
    cart: cart
  }
}