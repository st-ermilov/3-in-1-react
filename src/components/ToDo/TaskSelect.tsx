import React from 'react';
import Select from "react-select";
import {useAppDispatch, useAppSelector} from "../../hooks/rtk-hooks";
import {setSelect} from "../../redux/slices/taskSlice";
import styles from '../../styles/components/todo_select.module.scss'


export interface IOptions {
    value: string,
    label: string
}

const TaskSelect = () => {
    const options: IOptions[] = [
        {value: 'completed', label: 'Only completed'},
        {value: 'uncompleted', label: 'Only active'},
        {value: 'all', label: 'View all'},

    ]
    const dispatch = useAppDispatch()
    const select = useAppSelector(state => state.task.select)

    const onChange = (selected: IOptions | null) => {
        dispatch(setSelect(selected))
    }
    return (
        <div className={styles.select_container}>
            <Select value={select} options={options} onChange={onChange} placeholder='Filter by:'/>
        </div>
    )
};

export default TaskSelect;