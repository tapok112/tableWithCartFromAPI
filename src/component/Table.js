import React from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.css';
import TableRow from './TableRow';
import Layout from './Layout';

function Table () {

    const data = useSelector(state => state.main.data);

    return (
        <Layout>
            <table className={styles['container__table']}>
                    
                {data.map((item, index) => (
                    <tbody key={index}>
                        <tr>
                            <th className={styles['container__table_th']} colSpan='5'>{item.rname?item.rname:'Прочее'}</th>
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
        </Layout>
    )
 }
export default Table;