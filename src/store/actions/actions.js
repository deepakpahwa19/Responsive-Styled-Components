
import { SET_CATEGORIES, ERROR, LOADING } from "./reducerActionTypes";

export const setCategories = (data) => {
    return { type: SET_CATEGORIES, categories: data }
}

export const setError = (error) => {
    return { type: ERROR, message: error }
}

export const setLoading = (loading) => {
    return { type: LOADING, loading: loading }
}