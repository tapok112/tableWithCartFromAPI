import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styles from './style.module.css';
import TableRow from './TableRow';
import { setData } from '../reducers';

function Table () {

    const dispatch = useDispatch();

    const data = useSelector(state => state.main.data)
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async() => {
        try {
            const response = await axios.get('https://datainlife.ru/junior_task/get_products.php')
            dispatch(setData(response.data))
            setIsLoading(true);
        } catch (error) {
            setIsLoading(true);
            alert('Не удалось загрузить данные');
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <div className={styles.container}>
            {!isLoading&&<div>Loading...</div>}
            <header className={styles['container__header']}>
                <h1>Test from DataInLife </h1>
            </header>
            <aside>
                <ul>
                    {data.map((item, index) => 
                    <li key={index}>{item.rname?item.rname:'Прочее'}</li>)}
                </ul>
            </aside>
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
        </div>
    );
}

export default Table;