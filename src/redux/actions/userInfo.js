export const USERMSG = "USERMSG";

export function showUserMsg(userInfo) {
    return {
        type:USERMSG,
        userInfo:userInfo
    }
}

export function fetchUserMsg() {
    return function (dispatch) {
        return fetch('http://localhost:8080/api/user.json')
            .then(response =>{
                return response.json()
            })
            .then(data =>{
                dispatch(showUserMsg(data))
            })
            .catch((e)=>{console.log(e)})
    }
}