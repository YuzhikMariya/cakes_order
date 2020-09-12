const ADD_TO_HISTORY = 'ADD-TO-HISTORY';
const SET_ACCOUNT = 'SET-ACCOUNT';

let initialState = {
    personalInfo: {
        surname: "Yuzhyk",
        name: "Masha",
        email: "mari.yuzhik@mail.ru",
        phone: "+375296965625"
      },
      history: [
        {
          title: "The best cake",
          id: 1,
          count: 2
        },
        {
          title: "Jsjdf fkjh sksfl lf",
          id: 2,
          count: 2
        },
        {
          title: "The sldfk lsf best cake",
          id: 3,
          count: 2
        },
        {
          title: "p  oI jhsk dksd best cake",
          id: 4,
          count: 2
        },
        {
          title: "The best cake",
          id: 5,
          count: 12
        }
      ]
}

export const accountReducer = (state = initialState, action) => {
    switch (action.type){
      case ADD_TO_HISTORY:{
        let newState = {...state};
        action.history.forEach(element => {
          newState.history.push(element);
        });
        return newState;
      }
      case SET_ACCOUNT:{
        let newState = {...state};
        newState.personalInfo = action.personalInfo;
        action.history = [];
        action.history.forEach(element => {
          newState.history.push(element);
        });
        return newState;
      }
      default:
        return state;
    }
}

export const addToHistoryActionCreator = (list) => {
  let history = [];
  list.forEach((el) => {
    let tempObj = {
      title: el.title,
      count: el.count,
      ref: "#"
    };
    history.push(tempObj);
  })
  return {
    type: ADD_TO_HISTORY,
    history: history
  }
}

export const setAccountActionCreator = (user) => {
  return{
    type: SET_ACCOUNT,
    personalInfo: {
      name: user.name,
      surname: user.surname,
      email: user.email,
      phone: user.phone
    },
    history: user.history
  }
}