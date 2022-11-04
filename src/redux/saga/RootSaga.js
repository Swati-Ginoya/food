import { call, put, takeEvery, takeLatest ,all} from 'redux-saga/effects'

import { AuthSaga } from './AuthSaga'

export function* RootSaga() {
    yield all([
        AuthSaga()
    ])
}