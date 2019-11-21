import { all, fork } from "@redux-saga/core/effects"
import getPostsSaga from './getPostsSaga';

const rootSaga = function* () {
    yield all([
        fork(getPostsSaga)
    ])
}
export default rootSaga;