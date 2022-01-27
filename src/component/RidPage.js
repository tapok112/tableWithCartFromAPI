import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function RidPage(props) {
    const { rid } = useParams();
    const data = useSelector(state => state.main.data)
    const filteredData = data.find(section => section.rid === rid);
    return (
        <table className={styles['container__table']}>
            {data.map((item, index) => (
                <tbody key={index}>
                    <tr>
                        <th colSpan='5'>{item.rname?item.rname:'Прочее'}</th>
                    </tr>
                    <tr>                    
                        <th>id</th>
                        <th>Название товара</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Сумма</th>
                    </tr>
                    {item.goods.map((elem) => (
                        <TableRow key={elem.gid} elem={elem}/>
                        ))
                    }
                </tbody>
            ))}
        </table>
    );
}

export default RidPage;