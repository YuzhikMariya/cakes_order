const CHANGE_SORT_TYPE  = 'CHANGE-SORT-TYPE';
const ADD_TO_CATALOG = 'ADD-TO-CATALOG';
const SET_CATALOG = 'SET-CATALOG';

let initialState = {
    catalog: [
        {
          id: "1",
          photo: "cake1.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb qkwehkmnfd j lkjfh glkjsbgflvj sb qkwehkmnfd j lkjfh glkjsbgflvj sb qkwehkmnfd j lkjfh glkjsbgflvj sb qkwehkmnfd j lkjfh glkjsbgflvj sb qkwehkmnfd j lkjfh glkjsbgflvj sb qkwehkmnfd j lkjfh glkjsbgflvj sbqkwehkmnfd j lkjfh glkjsbgflvj sb"
        }
      ],
      sortType: "sortBy50"
}

export const catalogReducer = (state = initialState, action) => {


    switch (action.type){
        case ADD_TO_CATALOG:{
            let cake = {
                photo: action.photo,
                title: action.title,
                price: action.price,
                time: action.time,
                description: action.description
            }
            let newState = {...state};
            newState.catalog.push(cake);
            return newState;
        }
        case CHANGE_SORT_TYPE:{
            let newState = {...state};
            newState.sortType = action.newType;
            return newState;
        }
        case SET_CATALOG:{
          let newState = {...state};
          newState.catalog = [];
          action.catalogArr.forEach(element => {
              let tempObj = {
                title: element.title,
                id: element.id,
                price: element.price,
                time: 7,
                description: element.description,
                photo: element.photo
              }
              newState.catalog.push(tempObj);
          });
          
          return newState;
        }
        default: 
            return state;
    }
}

export const changeSortTypeActionCreator = (newType) => {
    return {
        type: CHANGE_SORT_TYPE, 
        newType: newType
    }
}

export const setCatalogActionCreator = (arr) => {
  return {
      type: SET_CATALOG, 
      catalogArr: arr
  }
}