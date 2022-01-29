import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setData, setIsLoading } from '../reducers';
import { FETCH_DATA } from '../reducers/mainReducer';

function fetchData() {
    try {
       const response = axios.get('https://datainlife.ru/junior_task/get_products.php');
       return response;
    } catch (error) {
        alert('Не удалось загрузить данные');
    }
}

function* fetchDataWorker() {
    const response = yield call(fetchData);
    yield put(setData(response.data));
    yield put(setIsLoading(true));
}

function* dataWatcher() {
    yield takeEvery(FETCH_DATA, fetchDataWorker)
}
export default dataWatcher;