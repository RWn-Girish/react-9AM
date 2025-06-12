const initalState = {
    books : [],
    book: null,
    isLoading: false,
    isCreated: false,
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
            }
        case "GET_BOOK": 
            let getbooks = JSON.parse(localStorage.getItem("books"));
            let singleBook = getbooks.find(book => book.id == action.payload)
            return {
                ...state,
                book: singleBook
            }
        case "DELETE_BOOK_REJ":
            return {
                ...state,
                errorMsg: action.payload
            }
        case "UPDATE_BOOK":
            let getBooks = JSON.parse(localStorage.getItem("books"))
            let updatedBooks = getBooks.map(book => {
                if(book.id == action.payload.id){
                    return action.payload;
                }else{
                    return book;
                }
            });
            localStorage.setItem("books", JSON.stringify(updatedBooks));
            return {
                ...state,
                books: updatedBooks,
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