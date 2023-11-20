import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/rtk-hooks";
import {setSearch} from "../../redux/slices/taskSlice";
import styles from '../../styles/components/task_input.module.scss'

const TaskSearch = () => {
    const dispatch = useAppDispatch()
    const search = useAppSelector(state => state.task.search)

    return (
        <form className={styles.form}>
            <input className={styles.input}
                   type="text"
                   placeholder='Search task...'
                   value={search}
                   onChange={(e) => dispatch(setSearch(e.target.value))}/>
            <button className={styles.button} type='submit' onClick={(e) => {
                e.preventDefault()
                dispatch(setSearch(''))
            }}>Clear
            </button>
        </form>
    );
};

export default TaskSearch;