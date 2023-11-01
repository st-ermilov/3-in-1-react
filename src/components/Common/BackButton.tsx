import React from 'react';
import {Link} from "react-router-dom";
import styles from '../../styles/components/back_button.module.scss'

const BackButton: React.FC = () => {
    return (
        <Link to='/' className={styles.back_btn}>Back</Link>
    );
};

export default BackButton;