import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { qtyChange, setCart } from '../reducers';

function TableRow(props) {

    const [qty, setQty] = useState(0);
    const cart = useSelector(state => state.main.cart);
    const dispatch = useDispatch();    

    return (
        <tr key={props.elem.gid}>
            <td>{props.elem.gid}</td>
            <td>{props.elem.gname}</td>
            <td>{props.elem.gprice}</td>
            <td>
                <input 
                    type='number' 
                    placeholder='Введите количество' 
                    onChange={(e) => {
                        setQty(e.target.value);
                        if(cart.find((elem) => elem.id === props.elem.gid)){
                            return (
                                dispatch(qtyChange({id: props.elem.gid, qty: e.target.value, price: props.elem.gprice}))
                            )
                        } return (
                            dispatch(setCart({id: props.elem.gid, qty: e.target.value, price: props.elem.gprice}))
                        )                       
                    }}
                />
            </td>
            <td>{qty*props.elem.gprice}</td>
        </tr>

    );
}

export default TableRow;