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