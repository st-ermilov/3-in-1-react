import React from 'react';
import {Link} from "react-router-dom";
import styles from '../styles/pages/main.module.scss'

const MainPage = () => {
    return (
        <div className={styles.container}>
            <h1 style={{margin: 0}}>Welcome</h1>
            <Link to='/todo' className={styles.link}>TODO</Link>
            <Link to='/weather' className={styles.link}>WEATHER</Link>
            <Link to='/exchange' className={styles.link}>EXCHANGE</Link>
        </div>
    );
};

export default MainPage;