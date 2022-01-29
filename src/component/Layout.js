import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.css';
import { fetchData } from '../reducers';
import { NavLink } from 'react-router-dom';
import Total from './Total';

function Layout ({children}) {

    const dispatch = useDispatch();
    const data = useSelector(state => state.main.data);
    const cart = useSelector(state => state.main.cart);
    const isLoading = useSelector(state => state.main.isLoading);

    useEffect(() => {
        dispatch(fetchData());
    },[])

    return (
        <div className={styles.container}>
            {!isLoading&&<div>Loading...</div>}
            <header className={styles['container__header']}>
                <NavLink to='/'><img src='/img/Dta.png' alt='ЛОГОТИП'></img></NavLink>
                <h1 className={styles['container__header_h1']} >Test from DataInLife</h1>
            </header>

            <main className={styles['container__main']}>                
                <aside className={styles['container__aside']}>
                    <ul className={styles['container__aside_ul']}>
                        {data.map((item, index) => 
                            <li className={styles['container__aside_li']} key={index}>
                                <NavLink className={styles['container__aside_link']} to={`/${item.rid?item.rid:'goods'}`}>
                                    {item.rname?item.rname:'Прочее'}
                                </NavLink>
                            </li>)}
                    </ul>
                </aside>                
                {children}
                {cart.length > 0 && <Total />}
            </main>
        </div>
    );
}

export default Layout;