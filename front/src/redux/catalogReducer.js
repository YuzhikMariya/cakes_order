const CHANGE_SORT_TYPE  = 'CHANGE-SORT-TYPE';
const DECREASE_TIME = 'SET-TIME';
const SET_CATALOG = 'SET-CATALOG';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_PAGE_COUNT = 'SET-PAGE-COUNT';
const SET_POPUP = 'SET-POPUP';

let initialState = {
    catalog: [
        {
        }
      ],
      sortType: 5,
      currentPage: 1,
      pageCount: 1,
      popup: false
}

function getTime(time){
    if(parseInt(time) > 9){
        return time;
    }else{
        return `0${time}`;
    }
}

export const catalogReducer = (state = initialState, action) => {


    switch (action.type){
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
                    let hours = getTime(element.timeWithCookingAll.hours), 
                        minutes = getTime(element.timeWithCookingAll.minutes);
                    let tempObj = {
                        title: element.cakeInfo.title,
                        id: element.cakeInfo.id,
                        price: element.cakeInfo.price,
                        time: element.cakeInfo.time.hours + ":" + element.cakeInfo.time.minutes,
                        description: element.cakeInfo.description,
                        photo: element.cakeInfo.photo,
                        isCooking: element.isCooking,
                        timeWithCookingAll: hours + ":" + minutes
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
        case DECREASE_TIME:{
            const MS_PER_MINUTE = 60000;
            let newState = {...state};
            newState.catalog = [];
            state.catalog.forEach(element => {
                let tempTimeForOne = new Date(),  tempTimeForAll = new Date();
                let timeHours = element.time.substring(0, element.time.indexOf(":")),
                    timeMinutes = element.time.substring(element.time.indexOf(":")+1);
                tempTimeForOne.setHours(parseInt(timeHours));
                tempTimeForOne.setMinutes(parseInt(timeMinutes));
                timeHours = element.timeWithCookingAll.substring(0, element.timeWithCookingAll.indexOf(":")),
                timeMinutes = element.timeWithCookingAll.substring(element.timeWithCookingAll.indexOf(":")+1);
                tempTimeForAll.setHours(parseInt(timeHours));
                tempTimeForAll.setMinutes(parseInt(timeMinutes));
                if(element.isCooking && (tempTimeForAll - tempTimeForOne >= MS_PER_MINUTE)){
                    let newTime = new Date(tempTimeForAll - MS_PER_MINUTE);
                    element.timeWithCookingAll = getTime(newTime.getHours()) + ":" + getTime(newTime.getMinutes());
                }
                newState.catalog.push(element);
            });
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

export const decreaseTimeActionCreator = () => {
    return{
        type: DECREASE_TIME
    }
}