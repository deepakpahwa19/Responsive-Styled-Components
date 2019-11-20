import { takeLatest } from 'styled-components';
import { GET_POSTS } from '../utils/constants/sagaActionTypes';


const getPostsSaga = function* () {
    yield takeLatest(GET_POSTS, getPosts);

}

const getPosts = function* () {


}

export default getPostsSaga;