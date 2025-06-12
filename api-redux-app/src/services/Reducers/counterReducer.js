const initalState = {
    count: 100,
    name: "John Peter"
}

const counterReducer = (state = initalState, action) => {
    switch(action.type){
        default:
            return state;
    }
};


export default counterReducer;