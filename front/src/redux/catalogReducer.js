const CHANGE_SORT_TYPE  = 'CHANGE-SORT-TYPE';
const ADD_TO_CATALOG = 'ADD-TO-CATALOG';
const SET_CATALOG = 'SET-CATALOG';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_PAGE_COUNT = 'SET-PAGE-COUNT';
const SET_POPUP = 'SET-POPUP';

let initialState = {
    catalog: [
        {
          id: "",
          photo: "",
          title: "",
          price: 0,
          time: 0,
          description: ""
        }
      ],
      sortType: 5,
      currentPage: 1,
      pageCount: 1,
      popup: false
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
            if(action.catalogArr != null){
                action.catalogArr.forEach(element => {
                    let tempObj = {
                        title: element.title,
                        id: element.id,
                        price: element.price,
                        time: element.time.hours + ":" + element.time.minutes,
                        description: element.description,
                        photo: element.photo
                    }
                    newState.catalog.push(tempObj);
                });
            }
            
            if(state.sortType == 1){
                newState.pageCount = 1;
            }else{
                newState.pageCount = Math.ceil(action.totalCount / state.sortType);
            }
          
            return newState;
        }
        case SET_CURRENT_PAGE:{
            let newState = {...state};
            newState.currentPage = action.current;
            return newState;
        }
        case SET_PAGE_COUNT:{
            let newState = {...state};
            newState.pageCount = action.count;
            return newState;
        }
        case SET_POPUP:{
            let newState = {...state};
            newState.popup = !state.popup;
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

export const setCatalogActionCreator = (obj) => {
  return {
      type: SET_CATALOG, 
      catalogArr: obj.catalog,
      totalCount: obj.totalCount
  }
}

export const setCurrentPageActionCreator = (current) => {
    return {
        type: SET_CURRENT_PAGE, 
        current: current
    }
}

export const setPageCountActionCreator = (count) => {
    return {
        type: SET_PAGE_COUNT, 
        count: count
    }
}

export const setPopupActionCreator = () => {
    return{
        type: SET_POPUP
    }
}