import React from 'react';
import {Link} from "react-router-dom";
import styles from '../styles/pages/main.module.scss'

const MainPage = () => {
    return (
        <div className={styles.container}>
            <h2 style={{margin: 0}}>Welcome, this is an alpha version of the application</h2>
            <Link to='/todo' className={styles.link}>TODO</Link>
            <Link to='/weather' className={styles.link}>WEATHER</Link>
            <Link to='/exchange' className={styles.link}>EXCHANGE</Link>
        </div>
    );
};

export default MainPage;