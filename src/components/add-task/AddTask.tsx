import React, {useState, ChangeEvent, KeyboardEvent} from "react";
import {Button, Grid, TextField} from "@material-ui/core";

export type AddTaskPropsType = {
    addTask: (value: string) => void;
}

const AddTask = (props: AddTaskPropsType) => {
    let [value, setValue] = useState<string>('');

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        setValue(value);
    }
    const onPressChangeValue = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            if (value.trim() !== '') {
                props.addTask(value);
                setValue('');
            }
        }
    }
    const onAddTask = () => {
        if (value.trim() !== '') {
            props.addTask(value);
            setValue('');
        }
    }

    return (
        <div>
            <Grid container justify={"space-between"} alignItems={"flex-end"}>
                <Grid item xs={10}>
                    <TextField style={{width:"100%"}}  value={value} onChange={onChangeValue}
                               onKeyPress={onPressChangeValue}  label={'Add new Task'}/>
                </Grid>
                <Grid item>
                    <Button className={`button`} style={{ float:"right"}} variant={"outlined"} color={"primary"} onClick={onAddTask} >Add</Button>
                </Grid>
            </Grid>
        </div>
    );
}
export default AddTask;