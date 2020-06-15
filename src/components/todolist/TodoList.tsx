import Header from "../header/Header";
import SearchPanel from "../search-panel/SearchPanel";
import TodoListBody from "../todolist-body/TodoListBody";
import AddTask from "../add-task/AddTask";
import React from "react";
import {filterType, TaskType} from "../app/App";

export type TodoListPropsType = {
    addTask: (value: string) => void,
    tasks: Array<TaskType>,
    removeTask: (id: string) => void,
    toggleImportant: (id: string) => void
    toggleIsDone: (id: string) => void
    changeFilter: (value: filterType) => void
    filter: filterType,
    searchTasks: (value: string) => void,
    onChangeFilterValue: (value: string) => void,
    searchValue:string
}

const TodoList = (props: TodoListPropsType) => {
    let {tasks, addTask, removeTask, toggleImportant, toggleIsDone, changeFilter, filter, searchTasks, onChangeFilterValue,searchValue} = props;
    return (
        <div>
            <Header tasks={tasks}/>
            <SearchPanel changeFilter={changeFilter}
                         filter={filter}
                         searchTasks={searchTasks}
                         onChangeFilterValue={onChangeFilterValue}
                         searchValue={searchValue}
            />
            <TodoListBody tasks={tasks}
                          removeTask={removeTask}
                          toggleImportant={toggleImportant}
                          toggleIsDone={toggleIsDone}

            />
            <AddTask addTask={addTask}/>
        </div>
    );
}

export default TodoList;