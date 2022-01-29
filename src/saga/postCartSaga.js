import { call, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { PUSH_TO_CART } from '../reducers/mainReducer';

function* pushToCart () {
    const cart = yield select((state) => state.main.cart);
    const formData = new FormData();
    cart.forEach(elem => {
        formData.append(`product[${elem.id}]`, Number(elem.qty))
    })
    axios({
        method: 'post',
        url: 'https://datainlife.ru/junior_task/add_basket.php',
        headers: {
            'Content-Type': 'multipart/form-data',
            "type": 'formData'
          },
        data: 
            formData                
    })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

function* pushToCartWorker() {
    yield call(pushToCart);
}

function* pushToCartWatcher() {
    yield takeEvery(PUSH_TO_CART, pushToCartWorker)
}
export default pushToCartWatcher;