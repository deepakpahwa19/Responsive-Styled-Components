import initialState from "../initialState";
import { SET_CATEGORIES, ERROR, LOADING } from '../actions/reducerActionTypes';


const updateState = (state, updatedState) => ({ ...state, ...updatedState });

const reducer = (state = initialState, action) => {
    let updatedState = {};
    switch (action.type) {
        case SET_CATEGORIES:
            updatedState = {
                categories: action.categories,
                loading: false,
                errorMessage: ''
            };
            return updateState(state, updatedState);
        case LOADING:
            updatedState = {
                errorMessage: '',
                loading: action.loading
            }
            return updateState(state, updatedState);
        case ERROR:
            updatedState = {
                loading: false,
                errorMessage: action.message
            }
            return updateState(state, updatedState);

        default:
            return { ...state };
    }
}

export default reducer;