import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../../firebase"


const signUpSuc = () => {
    return {
        type: "SIGN_UP_SUC",

    }
}

const signINSuc = (user) => {
    return {
        type: "SIGN_IN_SUC",
        payload: user
    }
}

const signOUTSUC = () => {
    return {
        type: "SIGN_OUT_SUC",
    }
}
const errorMsg = (err) => {
    return {
        type: "ERROR",
        payload: err
    }
}

export const signUpAsync = (data) => {
    return async (dispatch) => {
        try {
            let userCred = await createUserWithEmailAndPassword(auth, data.email, data.password)
            // console.log(userCred.user);
            if(userCred.user){
                dispatch(signUpSuc());
            }
        } catch (error) {
            console.log(error);
            dispatch(errorMsg(error.message));
        }
    }
}

export const signINAsync = (data) => {
    return async (dispatch) => {
        try {
            let userCred = await signInWithEmailAndPassword(auth, data.email, data.password)
            // console.log(userCred.user);
            if(userCred.user){
                dispatch(signINSuc(userCred.user));
            }
        } catch (error) {
            console.log(error);
            dispatch(errorMsg(error.message));
        }
    }
}
export const signOutAsync = () => {
    return async (dispatch) => {
        try {
             await signOut(auth);
                dispatch(signOUTSUC());
        } catch (error) {
            console.log(error);
            dispatch(errorMsg(error.message));
        }
    }
}