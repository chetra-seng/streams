export const signIn = () => {
    console.log('sign in');
    return {
        type: 'SIGN_IN'
    };
};

export const signOut = () => {
    console.log('sign out');
    return {
        type: 'SIGN_OUT'
    }
}