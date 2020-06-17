import React from "react";
import {TaskType} from "../app/App";
import {Container, Grid} from "@material-ui/core";

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
            <Grid container alignItems={"flex-end"} >
                <Grid item xs={6}>
                    <h1 style={{margin:"10px 0"}}>TodoList</h1>
                </Grid>
                <Grid item xs={6} >
                    <p style={{float:"right", margin:"10px 0"}}><span>{active}</span>more to do, <span>{isDone}</span>done</p>
                </Grid>
            </Grid>
        </header>
    );
}
export default Header;