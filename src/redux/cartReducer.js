const INCREASE_COUNT = 'INCREASE-COUNT';
const DECREASE_COUNT = 'DECREASE-COUNT';
const DELETE_FROM_CART = 'DELETE-FROM-CART';
const ADD_TO_CART = 'ADD-TO-CART';
const BUY = 'BUY';

let initialState = {
    cart: [
        {
          id: 1, 
          photo: "cake1.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          count: 4
        },
        {
          id: 2, 
          photo: "cake2.png",
          title: "Kkjsdfh  ksf  h",
          price: 13,
          count: 54
        },
        {
          id: 3,
          photo: "cake3.png",
          title: "Ojn  ksf kjdsfk h",
          price: 13,
          count: 4
        },
        {
          id: 4,
          photo: "cake4.png",
          title: "Lnsf f ksf kjdsfk h",
          price: 13,
          count: 4
        },
        {
          id: 5,
          photo: "cake5.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          count: 4
        },
        {
          id: 6,
          photo: "cake6.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          count: 4
        },
        {
          id: 7,
          photo: "cake7.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          count: 4
        },
        {
          id: 8,
          photo: "cake1.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          count: 4
        },
        {
          id: 9,
          photo: "cake8.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          count: 4
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
          if((el.id == action.id) && (el.count > 1)){
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