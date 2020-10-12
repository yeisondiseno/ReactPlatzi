const reducer = (state, action) => {
    // return state;

    switch (action.type){
        case 'SET_FAVORITE':
            if (state.mylist.filter( e => e.id === action.payload.id).length !== 0) {
                return state;
            }
            return {
                ...state,
                mylist: [
                    ...state.mylist,
                    action.payload
                ]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                mylist: state.mylist.filter( e => e.id !== action.payload )
            }

        default:
            return state;
    }

}

export default reducer;