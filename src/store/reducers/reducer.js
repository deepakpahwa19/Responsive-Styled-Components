import initialState from "../initialState";


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'value':
            return { ...state };
        default:
            return { ...state };
    }
}

export default reducer;