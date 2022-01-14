export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

export interface UserState {
    users: any[];
    loading: boolean;
    error: string | null;
}

export type UserAction = FetchUserAction | FetchUserErrorAction | FetchUserSuccessAction

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}