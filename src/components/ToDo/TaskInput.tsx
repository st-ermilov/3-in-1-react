import React, {useRef} from 'react';
import styles from '../../styles/components/task_input.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/rtk-hooks";
import {setTask, setTaskList} from "../../redux/slices/taskSlice";

const TaskInput: React.FC = () => {
    const dispatch = useAppDispatch()
    const taskList = useAppSelector(state => state.task.taskList)
    const task = useAppSelector(state => state.task.task)


    const inputRef = useRef<HTMLInputElement>(null)
    const addCase = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newTask = {...task, id: new Date().getTime().toString()}
        dispatch(setTaskList([...taskList, newTask]))
        clearInput()
        inputRef.current?.focus()
    }
    const clearInput = () => {
        dispatch(setTask({...task, title: ''}))
        inputRef.current?.focus()
    }
    return (
        <form className={styles.form}>
            <input className={styles.input} ref={inputRef} type="text" placeholder='Add a task...' value={task.title}
                   onChange={(e) => {
                       dispatch(setTask({...task, title: e.target.value}))
                   }}/>
            <button className={styles.button} type="submit" onClick={(e) => addCase(e)}>Add</button>
            <button className={styles.button} type='button' onClick={clearInput}>Clear</button>
        </form>
    );
};

export default TaskInput;