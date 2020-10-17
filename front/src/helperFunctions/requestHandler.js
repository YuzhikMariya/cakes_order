import Axios from "axios";

export function GetRequestHandler(queryStr, resolve, reject){
    Axios.get(queryStr).then(res =>
        resolve(res)
    ).catch(() =>
        reject()
    );
}

export function PostRequestHandler(queryStr, postData, resolve, reject){
    Axios.post(queryStr, postData).then(res =>
        resolve(res)
    ).catch(() =>
        reject()
    );
}

export function DeleteRequestHandler(queryStr, configObj, resolve, reject){
    Axios.delete(queryStr, configObj).then(res =>
        resolve()
    ).catch(() =>
        reject()
    );
}