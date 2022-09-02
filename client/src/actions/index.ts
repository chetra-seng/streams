import { Dispatch } from "redux";
import { actionTypes } from "redux-form";
import { Action } from "../action-types";
import { ActionType } from "../action-types/action-types";
import axios from "../api/stream";

export const signIn = (id: string): Action => {
    return {
        type: ActionType.SIGN_IN,
        payload: id
    };
};

export const signOut = (): Action => {
    return {
        type: ActionType.SIGN_OUT
    }
}

export const createStream = (formValues: any) => async (dispatch: Dispatch) => {
    const response = await axios.post("/streams", formValues);
    dispatch({type: 'CREATE_STREAM', payload: response.data});
}