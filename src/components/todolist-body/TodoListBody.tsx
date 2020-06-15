import React from "react";
import {filterType, TaskType} from "../app/App";

export type TodoListPropsType = {
    tasks: Array<TaskType>,
    removeTask: (id: string) => void,
    toggleImportant: (id: string) => void
    toggleIsDone: (id: string) => void,

}

const TodoListBody = (props: TodoListPropsType) => {
    let {tasks, removeTask, toggleImportant, toggleIsDone} = props;
    return (
        <ul>
            {
                tasks.map(task => {
                    const onRemoveTask = () => {
                        removeTask(task.id);
                    }
                    const onToggleImportant = () => {
                        toggleImportant(task.id);
                    }
                    const onToggleIsDone = () => {
                        toggleIsDone(task.id);
                    }
                    return <li key={task.id}>
                        <span className={`${task.important ? "taskToggleImportant" : ""} ${task.isDone ? "taskToggleIsDone" : ""}`}
                              onClick={onToggleIsDone}>{task.title}</span>
                        <button onClick={onRemoveTask}>x</button>
                        <button onClick={onToggleImportant}>!</button>
                    </li>
                })
            }
        </ul>
    );
}

export default TodoListBody;