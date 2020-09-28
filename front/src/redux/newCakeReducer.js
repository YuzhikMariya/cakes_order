import Axios from "axios";

const CHANGE_TITLE = 'CHANGE-TITLE';
const CHANGE_TIME = 'CHANGE-TIME';
const CHANGE_PRICE = 'CHANGE-PRICE';
const CHANGE_DESCRIPTION = 'CHANGE-DESCRIPTION';
const CHANGE_PHOTO = 'CHANGE-PHOTO';
const POST = 'POST';

const initialState = {
    title: "",
    time: "",
    price: 0.00,
    photo: null,
    description: ""
}

export const newCakeReducer = (state = initialState, action) => {

    switch(action.type){
        case POST:{
            const postData = new FormData();
        
            
            postData.append("title", state.title);
            postData.append("time", state.time);
            postData.append("price", state.price);
            postData.append("description", state.description);
            postData.append("img", state.photo);

            Axios.post("https://localhost:44340/api/admin", postData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            return state;

        }
        case CHANGE_TITLE:{
            state.title = action.text;
            return state;
        }
        case CHANGE_TIME:{
            state.time = action.time;
            return state;
        }
        case CHANGE_PRICE:{
            state.price = action.price;
            return state;
        }
        case CHANGE_PHOTO:{
            state.photo = action.photo;
            return state;
        }
        case CHANGE_DESCRIPTION:{
            state.description = action.text;
            return state;
        }
        default:
            return state;
    }


}

export const changeTitleActionCreator = (text) => {
    return{
        type: CHANGE_TITLE,
        text: text
    }
}

export const changeTimeActionCreator = (time) => {
    return{
        type: CHANGE_TIME,
        time: time
    }
}

export const changePriceActionCreator = (price) => {
    return{
        type: CHANGE_PRICE,
        price: price
    }
}

export const changeDescriptionActionCreator = (text) => {
    return{
        type: CHANGE_DESCRIPTION,
        text: text
    }
}

export const changePhotoActionCreator = (photo) => {
    return{
        type: CHANGE_PHOTO,
        photo: photo
    }
}

export const postDataActionCreator = () => {
    return{
        type: POST
    }
}