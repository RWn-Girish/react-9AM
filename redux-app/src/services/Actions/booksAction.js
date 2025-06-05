
export const addNewBook = (data) => {
    return {
        type: "ADD_BOOK",
        payload: data
    }
};

export const getAllBooks = () => {
    return {
        type: "GET_ALL_BOOKS"
    }
};

export const deleteBook = (id) =>{
    return {
        type: "DELETE_BOOK",
        payload: id
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
    return (dispatch) => {
        dispatch(loading());    //

        setTimeout(()=> {
            dispatch(getAllBooks());    // get all book
        }, 3000);
    
    }
}