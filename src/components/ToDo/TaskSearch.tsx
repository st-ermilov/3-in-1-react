import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/rtk-hooks";
import {setSearch} from "../../redux/slices/taskSlice";

const TaskSearch = () => {
    const dispatch = useAppDispatch()
    const search = useAppSelector(state => state.task.search)

    return (
        <form>
            <input type="text"
                   placeholder='Search task...'
                   value={search}
                   onChange={(e) => dispatch(setSearch(e.target.value))}/>
            <button type='submit' onClick={(e) => {
                e.preventDefault()
            }}>Search
            </button>
        </form>
    );
};

export default TaskSearch;