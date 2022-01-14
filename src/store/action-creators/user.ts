import axios from "axios";
import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";

export const fetchUsers = () => {

    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})

        } catch (e) {
            dispatch({
                    type: UserActionTypes.FETCH_USERS_ERROR,
                    payload: "Exrror fetching users"
                }
            )
        }
    }
}