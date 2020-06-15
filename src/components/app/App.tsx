import React, {useState} from 'react';
import './App.css';
import Header from "../header/Header";
import SearchPanel from "../search-panel/SearchPanel";
import TodoListBody from "../todolist-body/TodoListBody";
import AddTask from "../add-task/AddTask";
import {v1} from 'uuid';
import TodoList from "../todolist/TodoList";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
    important: boolean
}
export type filterType = 'all' | 'active' | 'completed';

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "Drink Coffee", isDone: false, important: false},
        {id: v1(), title: "Learn React", isDone: true, important: false},
        {id: v1(), title: "Learn JS", isDone: false, important: false},
    ]);
    let [filter, setFilter] = useState<filterType>('all');

    // Filter Tasks button
    let filteredTasks = tasks;
    if (filter === 'active') {
        filteredTasks = tasks.filter(task => task.isDone === false);
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isDone === true);
    }
    // changeFilter
    const changeFilter = (value: filterType) => {
        setFilter(value);
    }

    //add task to TodoList
    const addTask = (value: string) => {
        let newTask: TaskType = {
            id: v1(),
            title: value,
            isDone: false,
            important: false
        }
        setTasks([newTask, ...tasks]);
    }
    //removeTask from TodoList
    const removeTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    }
    //Toggle important
    const toggleImportant = (id: string) => {
        let task = tasks.find(task => task.id === id);
        if (task) {
            task.important = !task.important;
            setTasks([...tasks]);
        }
    }
    //Toggle isDone
    const toggleIsDone = (id: string) => {
        let task = tasks.find(task => task.id === id);
        if (task) {
            task.isDone = !task.isDone;
            setTasks([...tasks]);
        }
    }
    return (
        <TodoList tasks={filteredTasks}
                  addTask={addTask}
                  removeTask={removeTask}
                  toggleImportant={toggleImportant}
                  toggleIsDone={toggleIsDone}
                  changeFilter={changeFilter}
                  filter={filter}
        />
    );
}

export default App;
