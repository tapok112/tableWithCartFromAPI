import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style.module.css';
import TableRow from './TableRow';

function Table () {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async() => {
        try {
            const response = await axios.get('https://datainlife.ru/junior_task/get_products.php')
            setData((response.data).filter(elem => {
                if(elem.rid) {
                    return elem;
                }
            }));
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
            <table className={styles['container__table']}>
                {data.map((item) => (
                    <tbody key={item.rid}>
                        <tr>
                            <th colSpan='5'>{item.rname}</th>
                        </tr>
                        <tr>                    
                            <th>id</th>
                            <th>Название товара</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Сумма</th>
                        </tr>
                        {item.goods.map((elem) => (
                            <TableRow elem={elem}/>
                            ))
                        }
                    </tbody>
                ))}
            </table>
        </div>
    );
}

export default Table;