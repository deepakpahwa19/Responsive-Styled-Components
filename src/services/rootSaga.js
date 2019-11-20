import { all, fork } from "@redux-saga/core/effects"

const rootSaga = function* () {

    yield all([
        fork['d']
    ])



}
export default rootSaga;