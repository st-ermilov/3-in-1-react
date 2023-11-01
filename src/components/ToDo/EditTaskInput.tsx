import React, {useRef} from 'react';
import styles from "../../styles/components/task_input.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/rtk-hooks";
import {editTask, setEditedTask, submitEditingTask, typeTask} from "../../redux/slices/taskSlice";


const EditTaskInput: React.FC<typeTask> = (task) => {
    const dispatch = useAppDispatch()
    const inputRef = useRef<HTMLInputElement>(null)
    const editedTask = useAppSelector(state => state.task.editedTask)


    return (
        <form className={styles.form}>
            <input className={styles.input} ref={inputRef} type="text" placeholder={task.title}
                   onChange={(e) => dispatch(setEditedTask(e.target.value))}
                   value={editedTask}
            />
            <button className={styles.button} type='submit'
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(submitEditingTask(task.id))
                        dispatch(editTask(task.id))
                    }}>Edit
            </button>
            <button className={styles.button} type='button' onClick={() => {
                dispatch(setEditedTask(''))
            }}>Clear
            </button>
        </form>
    );
};

export default EditTaskInput;