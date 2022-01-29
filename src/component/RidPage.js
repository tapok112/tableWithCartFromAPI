import React from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.css'
import { useParams } from 'react-router';
import TableRow from './TableRow';
import Layout from './Layout';

function RidPage() {
    const { rid } = useParams();
    const data = useSelector(state => state.main.data);

    const filteredByRid = rid !== 'goods' ? data.filter(section => section.rid === rid) : data.filter(section => !section.rid);
    return (
        <Layout>
            <table className={styles['container__table']}>
                {filteredByRid.map((item, index) => (
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
        </Layout>
    );
}

export default RidPage;