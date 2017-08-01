import {SIGNED_IN } from '../constants'; 

export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }
    console.log('User was logged: ' , action); 
    return action; 
}