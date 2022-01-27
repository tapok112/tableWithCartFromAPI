import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Total(props) {

    const cart = useSelector(state => state.main.cart);
    const cartCost = cart.reduce((sum, elem) => 
        sum + elem.price*elem.qty, 0
    )
    const cartQty = cart.reduce((sum, elem) => 
        sum + Number(elem.qty), 0
    )
    const product = Object.fromEntries(cart.map(elem => [elem.id, elem.qty]))

    const handleClick = async () => {
            
            await axios({
                method: 'post',
                url: 'https://datainlife.ru/junior_task/add_basket.php',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "type": 'formData'
                  },
                data: 
                    {product}                 
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
    }

    return (
        <div>
            <ul>
                <li>Сумма {cartCost}</li>
                <li>Количество {cartQty}</li>
            </ul>
            <button 
                onClick={handleClick}>
                Добавить в корзину
            </button>
        </div>
    );
}

export default Total;