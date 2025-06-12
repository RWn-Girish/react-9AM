import axios from 'axios';

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

export const getBook = (id) =>{
    return {
        type: "GET_BOOK",
        payload: id
    }
};

export const updateBook = (data) => {
    return {
        type: "UPDATE_BOOK",
        payload: data
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
        let res = await axios.get("http://localhost:3000/books");
        // console.log(res.data);
        dispatch(getAllBooks(res.data));
    }
}

export const addNewBookAsync = (data) => {
    return async(dispatch) => {
        dispatch(loading());
        try{
            await axios.post("http://localhost:3000/books", data);
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