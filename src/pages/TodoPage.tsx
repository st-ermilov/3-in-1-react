import React from 'react';
import styles from "../styles/pages/todo.module.scss";
import TaskInput from "../components/ToDo/TaskInput";
import TaskList from "../components/ToDo/TaskList";
import BackButton from "../components/Common/BackButton";
import TaskSelect from "../components/ToDo/TaskSelect";
import TaskSearch from "../components/ToDo/TaskSearch";

const TodoPage: React.FC = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <BackButton/>
                    <h1>My business list</h1>
                </div>

                <TaskInput/>
                <TaskSearch/>
                <TaskSelect/>
                <TaskList/>
            </div>
        </>
    );
};
export default TodoPage;


