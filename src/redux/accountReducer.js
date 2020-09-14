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
          id: "1",
          count: 2
        }
      ]
}

export const accountReducer = (state = initialState, action) => {
    switch (action.type){
      case SET_ACCOUNT:{
        let newState = {...state};
        newState.personalInfo = action.personalInfo;
        newState.history = [];
        action.history.forEach(element => {
          let tempObj = {
            title: element.cake.title,
            id: element.cake.id,
            count: element.count
          }
          newState.history.push(tempObj);
        });
        return newState;
      }
      default:
        return state;
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