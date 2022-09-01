import axios from "../api/stream";

export const signIn = (id: string) => {
    console.log('sign in');
    return {
        type: 'SIGN_IN',
        payload: id
    };
};

export const signOut = () => {
    console.log('sign out');
    return {
        type: 'SIGN_OUT'
    }
}

export const createStream = (formValues: any) => async () => axios.post("streams", formValues);