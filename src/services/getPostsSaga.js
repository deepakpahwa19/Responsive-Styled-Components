import { takeLatest, put } from 'redux-saga/effects';

import { GET_POSTS } from '../utils/constants/sagaActionTypes';
import { axiosInstance } from '../utils/api/axiosInstance';
import { setCategories, setError } from '../store/actions/actions';


const getPostsSaga = function* () {
    yield takeLatest(GET_POSTS, getPosts);
}

const getPosts = function* () {
    // console.log('running getPosts saga');
    let response = null;
    try {
        response = yield axiosInstance.get();
        console.log(response.data);
        if (response && response.data) {
            yield put(setCategories(response.data))
        } else {
            yield put(setError('Seems to be an issue at our side'));
        }
    } catch (e) {
        yield put(setError('Could not fetch the data, Please refresh the page'));
    }


}

export default getPostsSaga;