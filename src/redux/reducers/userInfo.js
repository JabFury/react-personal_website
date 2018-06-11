import {USERMSG} from "../actions/userInfo";

const initState = {
    userInfo: {}
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case USERMSG:
            return {
                ...state,
                userInfo: action.userInfo
            };
        default:
            return state
    }
}