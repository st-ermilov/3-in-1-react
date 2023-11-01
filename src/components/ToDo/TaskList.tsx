import React from 'react';
import done from "../../assets/images/done.svg";
import edit from "../../assets/images/edit.svg";
import del from "../../assets/images/del.svg";
import styles from '../../styles/components/task_list.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/rtk-hooks";
import {completeTask, deleteTask, editTask, typeTask} from "../../redux/slices/taskSlice";
import EditTaskInput from "./EditTaskInput";


const TaskList: React.FC = () => {
    const dispatch = useAppDispatch()
    const taskList = useAppSelector(state => state.task.taskList)
    const select = useAppSelector(state => state.task.select)
    const search = useAppSelector(state => state.task.search)

    return (
        <>
            <ul className={styles.task_container}>
                {taskList.filter((item) => {
                    if (item.title.includes(search)) {
                        return item
                    }
                }).filter((item) => {
                    if (select && select.value === 'uncompleted') {
                        return item.completed === false
                    }
                    if (select && select.value === 'completed') {
                        return item.completed === true
                    } else {
                        return item
                    }
                }).map((item: typeTask) =>
                    item.isEditing ? (<EditTaskInput key={item.id} {...item}/>) :
                        (<li className={styles.task} key={item.id}>
                            <div
                                className={!item.completed ? styles.task_text : styles.task_text_done}>{item.title}</div>
                            <div className={styles.task_buttons}>
                                <img
                                    src={done}
                                    alt=""
                                    onClick={() => {
                                        dispatch(completeTask(item.id))
                                        console.log(item.completed)
                                    }}/>
                                <img
                                    src={edit} alt=""
                                    onClick={() => {
                                        dispatch(editTask(item.id))
                                        console.log(item.isEditing)
                                    }}
                                />
                                <img
                                    src={del} alt="" onClick={() => {
                                    dispatch(deleteTask(item))
                                }}/>
                            </div>
                        </li>))}
            </ul>

        </>
    );
};

export default TaskList;