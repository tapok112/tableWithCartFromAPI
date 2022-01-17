import React, { useState } from 'react';

function TableRow(props) {

    const [qty , setQty] = useState(0);

    return (
        <tr key={props.elem.gid}>
            <td>{props.elem.gid}</td>
            <td>{props.elem.gname}</td>
            <td>{props.elem.gprice}</td>
            <td>
                <input 
                    type='number' 
                    placeholder='Введите количество' 
                    onChange={(e) => setQty(e.target.value)
                    }
                />
            </td>
            <td>{props.elem.gprice*qty}</td>
        </tr>

    );
}

export default TableRow;