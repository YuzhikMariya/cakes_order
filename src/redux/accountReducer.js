const ADD_TO_HISTORY = 'ADD-TO-HISTORY';

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
}

export const accountReducer = (state = initialState, action) => {
    switch (action.type){
      case ADD_TO_HISTORY:
        let newState = {...state};
        action.history.forEach(element => {
          newState.history.push(element);
        });
        return newState;
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