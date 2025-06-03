const initalState = {
    books : JSON.parse(localStorage.getItem('books')) || [],
    book: null,
    isLoading: false
}

const bookReducer = (state = initalState, action) => {
    switch(action.type)
    {
        case "ADD_BOOK":
            let newBooks = [...state.books, action.payload];
            localStorage.setItem("books", JSON.stringify(newBooks));
            return {
                ...state,
                books: [...state.books, action.payload]
            }
        default:
            return state;
    }
}


export default bookReducer;