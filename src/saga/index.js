import { all } from 'redux-saga/effects';
import dataWatcher from './fetchDataSaga';
import pushToCartWatcher from './postCartSaga';

export function* rootWatcher() {
    yield all([dataWatcher(), pushToCartWatcher()])
}