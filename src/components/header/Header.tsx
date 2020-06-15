import React from "react";
import {TaskType} from "../app/App";

export type HeaderPropsType = {
    tasks: Array<TaskType>,
}

export const Header = (props: HeaderPropsType) => {
    const {tasks} = props;
    let active = tasks.filter(task => task.isDone === false).length;
    let isDone = tasks.filter(task => task.isDone === true).length;
    ;
    return (
        <header>
            <h1>TodoList</h1>
            <p><span>{active}</span>more to do, <span>{isDone}</span>done</p>
        </header>
    );
}
export default Header;