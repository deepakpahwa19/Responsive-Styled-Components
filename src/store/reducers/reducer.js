import initialState from "../initialState";
import { SET_CATEGORIES, ERROR , LOADING} from '../actions/reducerActionTypes';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            // console.log(action.categories);
            return {
                ...state,
                categories: action.categories,
                loading: false,
                errorMessage: ''
            };
        case LOADING:
            return {
                ...state,
                errorMessage: '',
                loading: action.loading
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.message
            }

        default:
            return { ...state };
    }
}

export default reducer;