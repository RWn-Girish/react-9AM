const initalState = {
    books : [],
    book: null,
    isLoading: false,
    isCreated: false,
    isUpdated: false,
    errorMsg: ""
}

const bookReducer = (state = initalState, action) => {
    switch(action.type)
    {
        case "ADD_BOOK_SUC":
            return {
                ...state,
                isCreated: true
            }
        case "ADD_BOOK_REJ":
            return {
                ...state,
                errorMsg: action.payload
            }
        case "GET_ALL_BOOKS": 
            return {
                ...state,
                books: action.payload,
                isLoading: false,
                isCreated: false,
                isUpdated: false
            }
        case "GET_BOOK": 
            return {
                ...state,
                book: action.payload
            }
        case "DELETE_BOOK_REJ":
            return {
                ...state,
                errorMsg: action.payload
            }
        case "UPDATE_BOOK_SUC":
            return {
                ...state,
                isUpdated: true,
                book: null
            }
        case "LOADING": 
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}


export default bookReducer;