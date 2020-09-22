const SET_EMAIL = 'SET-EMAIL';
const SET_PASSWORD = 'SET-PASSWORD';
const SET_ROLE = 'SET-ROLE';
const SET_REG_EMAIL = 'SET-REG-EMAIL';
const SET_REG_PASSWORD = 'SET-REG-PASSWORD';
const SET_REG_NAME = 'SET-REG-NAME';
const SET_REG_SURNAME = 'SET-REG-SURNAME';
const SET_REG_PHONE = 'SET-REG-PHONE';

let initialState = {
    currentPassword: "",
    currentEmail: "",
    role: "",
    registration: {
        password: "", 
        email: "",
        name: "",
        surname: "",
        phone: ""
    }
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
        case SET_REG_EMAIL:{
            let newState = {...state};
            newState.registration.email = action.email;
            return newState;
        }
        case SET_REG_PASSWORD:{
            let newState = {...state};
            newState.registration.password = action.password;
            return newState;
        }
        case SET_REG_PHONE:{
            let newState = {...state};
            newState.registration.phone = action.phone;
            return newState;
        }
        case SET_REG_NAME:{
            let newState = {...state};
            newState.registration.name = action.name;
            return newState;
        }
        case SET_REG_SURNAME:{
            let newState = {...state};
            newState.registration.surname = action.surname;
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

export const setRegNameActionCreator = (name) => {
    return{
        type: SET_REG_NAME,
        name: name
    }
}

export const setRegSurnameActionCreator = (surname) => {
    return{
        type: SET_REG_SURNAME,
        surname: surname
    }
}

export const setRegPhoneActionCreator = (phone) => {
    return{
        type: SET_REG_PHONE,
        phone: phone
    }
}

export const setRegEmailActionCreator = (email) => {
    return{
        type: SET_REG_EMAIL,
        email: email
    }
}

export const setRegPasswordActionCreator = (password) => {
    return{
        type: SET_REG_PASSWORD,
        password: password
    }
}

