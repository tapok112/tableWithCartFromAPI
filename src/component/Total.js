import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushToCart } from '../reducers';
import styles from './style.module.css';

function Total(props) {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.main.cart);
    const cartCost = cart.reduce((sum, elem) => 
        sum + elem.price*elem.qty, 0
    )
    const cartQty = cart.reduce((sum, elem) => 
        sum + Number(elem.qty), 0
    )
    
    const handleClick = () => {
        dispatch(pushToCart())
    }

    return (
        <div className={styles['container__fix-line']}>
            <ul>
                <li>Сумма: {cartCost}</li>
                <li>Количество: {cartQty}</li>
            </ul>
            <button className={styles['container__button']}
                onClick={handleClick}>
                Добавить в корзину
            </button>
        </div>
    );
}

export default Total;