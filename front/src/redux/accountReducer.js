const SET_ACCOUNT = 'SET-ACCOUNT';

let initialState = {
    personalInfo: {
        surname: "",
        name: "",
        email: "",
        phone: ""
      },
      history: [
        {
          title: "",
          id: "",
          count: 0
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
  let {name, surname, email, phone} = user.user;
  return{
    type: SET_ACCOUNT,
    personalInfo: {
      name: name,
      surname: surname,
      email: email,
      phone: phone
    },
    history: user.history
  }
}