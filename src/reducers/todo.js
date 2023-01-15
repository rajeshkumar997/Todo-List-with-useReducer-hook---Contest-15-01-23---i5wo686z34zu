const todoReducer = (state, action) => {
    switch (action.type) {
        CASE "ADD":
        return [...state,action.payload];
        return state;
            
        CASE "DELETE":
        return state.filter((item) =>{
            if(item.id != action.payload.id){
                return state;
            }
        });
        default:return state;
    }
}

export { todoReducer }
