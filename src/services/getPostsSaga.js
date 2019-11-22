import { takeLatest, put } from 'redux-saga/effects';

import { GET_POSTS } from './actions/sagaActionTypes';
import { axiosInstance } from '../utils/api/axiosInstance';
import { setCategories, setError, setLoading } from '../store/actions/actions';


const getPostsSaga = function* () {
    yield takeLatest(GET_POSTS, getPosts);
}

const getPosts = function* () {
    yield put(setLoading(true));
    let response = null;

    try {
        response = yield axiosInstance.get();
    } catch (e) {
        yield put(setError('Could not fetch the data, Please refresh the page'));
        return;
    }

    if (response && response.data) {
        yield put(setCategories(response.data))
    } else {
        yield put(setError('Seems to be an issue at our side'));
    }


}

export default getPostsSaga;