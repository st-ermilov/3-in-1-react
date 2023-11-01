import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {IOptions} from "../../components/ToDo/TaskSelect";

export type typeTask = {
    id: string,
    title: string,
    completed: boolean,
    isEditing: boolean
}

type initialState = {
    taskList: typeTask[],
    task: typeTask,
    editedTask: string,
    select: IOptions | null,
    search: string
}


const initialState: initialState = {
    taskList: [],
    task: {
        id: new Date().toString(),
        title: '',
        completed: false,
        isEditing: false
    },
    editedTask: '',
    select: null,
    search: ''
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTask: (state, action: PayloadAction<typeTask>) => {
            state.task = action.payload
        },

        setEditedTask: (state, action: PayloadAction<string>) => {
            state.editedTask = action.payload
        },

        completeTask: (state, action: PayloadAction<string>) => {
            const findTask = state.taskList.find((item) => item.id === action.payload)
            if (findTask) {
                findTask.completed = !findTask.completed
            }
        },

        editTask: (state, action: PayloadAction<string>) => {
            const findTask = state.taskList.find((item) => item.id === action.payload)
            if (findTask) {
                findTask.isEditing = !findTask.isEditing
                state.editedTask = findTask.title
            }
        },

        submitEditingTask: (state, action: PayloadAction<string>) => {
            const findTask = state.taskList.find((item) => item.id === action.payload)
            if (findTask) {
                findTask.title = state.editedTask
            }

        },

        deleteTask: (state, action: PayloadAction<typeTask>) => {
            state.taskList = state.taskList.filter((item) => item.id !== action.payload.id)
        },

        setTaskList: (state, action: PayloadAction<typeTask[]>) => {
            state.taskList = action.payload
        },

        setSelect: (state, action: PayloadAction<IOptions | null>) => {
            state.select = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },

    }
})

export const selectFindItemById = (id: string) => (state: RootState) => state.task.taskList.find((item: typeTask) => item.id === id)

export const {
    setTask,
    setEditedTask,
    setTaskList,
    deleteTask,
    completeTask,
    editTask,
    submitEditingTask,
    setSelect,
    setSearch
} = taskSlice.actions
export default taskSlice.reducer

