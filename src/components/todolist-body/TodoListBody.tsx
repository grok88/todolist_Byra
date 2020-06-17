import React from "react";
import {TaskType} from "../app/App";
import {IconButton, Grid} from "@material-ui/core";
import {Delete, PriorityHigh} from "@material-ui/icons";

export type TodoListPropsType = {
    tasks: Array<TaskType>,
    removeTask: (id: string) => void,
    toggleImportant: (id: string) => void
    toggleIsDone: (id: string) => void,

}

const TodoListBody = (props: TodoListPropsType) => {
    let {tasks, removeTask, toggleImportant, toggleIsDone} = props;
    return (
        <ul style={{listStyle: "none", paddingLeft: 0}}>
            <Grid container direction={"column"} spacing={1}>
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
                        return (
                            <Grid item key={task.id}>
                                <li style={{
                                    border: "1px solid #3F51B5",
                                    borderRadius: "5px",
                                    boxSizing: "border-box",
                                    padding: "0 10px 0  25px",
                                    display: "block"
                                }}>
                                    <Grid container justify={"space-between"} alignItems={"center"}>
                                        <Grid item>
                                         <span
                                             className={`${task.important ? "taskToggleImportant" : ""} ${task.isDone ? "taskToggleIsDone" : ""}`}
                                             onClick={onToggleIsDone}>{task.title}
                                          </span>
                                        </Grid>
                                        <Grid item>
                                            <IconButton onClick={onRemoveTask}>
                                                <Delete color={"secondary"}/>
                                            </IconButton>
                                            <IconButton onClick={onToggleImportant}>
                                                <PriorityHigh style={{color: "green"}}/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>

                                </li>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </ul>
    );
}

export default TodoListBody;