import React, {useState, ChangeEvent, KeyboardEvent} from "react";

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
            <input type="text" placeholder={'Add new Task'} value={value} onChange={onChangeValue}
                   onKeyPress={onPressChangeValue}/>
            <button onClick={onAddTask}>Add</button>
        </div>
    );
}
export default AddTask;