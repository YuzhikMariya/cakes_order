const SET_EMAIL = 'SET-EMAIL';
const SET_PASSWORD = 'SET-PASSWORD';
const SET_ROLE = 'SET-ROLE';

let initialState = {
    currentPassword: "",
    currentEmail: "",
    role: "admin"
}

export const registrationReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_EMAIL:{
            let newState = {...state};
            newState.currentEmail = action.email;
            return newState;
        }
        case SET_PASSWORD:{
            let newState = {...state};
            newState.currentPassword = action.password;
            return newState;
        }
        case SET_ROLE:{
            let newState = {...state};
            newState.role = action.role;
            return newState;
        }
        default: 
            return state;
    }
}

export const setEmailActionCreator = (email) => {
    return{
        type: SET_EMAIL,
        email: email
    }
}

export const setPasswordActionCreator = (password) => {
    return{
        type: SET_PASSWORD,
        password: password
    }
}

export const setRoleActionCreator = (role) => {
    return{
        type: SET_ROLE,
        role: role
    }
}