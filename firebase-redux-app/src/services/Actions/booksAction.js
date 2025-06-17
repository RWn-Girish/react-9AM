import axios from 'axios';
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const addNewBookSuc = () => {
    return {
        type: "ADD_BOOK_SUC",
    }
};
export const addNewBookRej = (err) => {
    return {
        type: "ADD_BOOK_REJ",
        payload: err
    }
};

export const getAllBooks = (data) => {
    return {
        type: "GET_ALL_BOOKS",
        payload: data
    }
};

export const deleteBookRej = (err) =>{
    return {
        type: "DELETE_BOOK_REJ",
        payload: err
    }
};

export const getBook = (data) =>{
    return {
        type: "GET_BOOK",
        payload: data
    }
};

export const updateBook = () => {
    return {
        type: "UPDATE_BOOK_SUC",
    }
};

export const loading = () => {
    return {
        type: "LOADING"
    }
}


export const getAllBooksAsync = () => {
    return async(dispatch) => {
        dispatch(loading());
        let data = [];
        let res = await getDocs(collection(db, "books"));
        res.forEach(rec =>{
                data.push(rec.data());
        })
        console.log(data);
        dispatch(getAllBooks(data));
    }
}

export const addNewBookAsync = (data) => {
    return async(dispatch) => {
        dispatch(loading());
        try{
            // await axios.post("http://localhost:3000/books", data);
            // dispatch(addNewBookSuc());

            // let res = await addDoc(collection(db, "books"), data);      // auto generate id
            await setDoc(doc(db, "books", data.id), data);      // manually set id
            dispatch(addNewBookSuc());
        }catch(err){
            console.log(err);
            dispatch(addNewBookRej(err.message));
        }
    }
}
export const deleteBookAsync = (id) => {
    return async(dispatch) => {
        dispatch(loading());
        try{
            await axios.delete(`http://localhost:3000/books/${id}`);
            dispatch(getAllBooksAsync());
        }catch(err){
            console.log(err);
            dispatch(deleteBookRej(err.message));
        }
    }
}

export const getBookAsync = (id) => {
    return async(dispatch) => {
        dispatch(loading());
        try{
            let res = await axios.get(`http://localhost:3000/books/${id}`);
            dispatch(getBook(res.data));
        }catch(err){
            console.log(err);
            dispatch(deleteBookRej(err.message));
        }
    }
}
export const updateBookAsync = (data) => {
    return async(dispatch) => {
        dispatch(loading());
        try{
            await axios.put(`http://localhost:3000/books/${data.id}`, data);
            dispatch(updateBook());
        }catch(err){
            console.log(err);
            dispatch(deleteBookRej(err.message));
        }
    }
}