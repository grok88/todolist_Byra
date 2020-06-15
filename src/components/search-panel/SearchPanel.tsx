import React, {ChangeEvent, useState} from "react";
import {filterType} from "../app/App";

export type SearchPanelPropsType = {
    changeFilter: (value: filterType) => void,
    filter: filterType,
    searchTasks: (value: string) => void,
    onChangeFilterValue: (value: string) => void,
}
const SearchPanel = (props: SearchPanelPropsType) => {
    const {changeFilter, filter, searchTasks,onChangeFilterValue} = props;

    let [value, setValue] = useState<string>("");

    const onClickAllFilter = () => {
        changeFilter('all');
    }
    const onClickActiveFilter = () => {
        changeFilter('active');
    }
    const onClickCompletedFilter = () => {
        changeFilter('completed');
    }
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        setValue(value);
        searchTasks(value);
        onChangeFilterValue(value);
    }

    return (
        <div>
            <input type="text" placeholder={'Type to search'} value={value} onChange={onChangeValue}/>
            <div>
                <button className={filter === "all" ? "activeButton" : ""} onClick={onClickAllFilter}>All</button>
                <button className={filter === "active" ? "activeButton" : ""} onClick={onClickActiveFilter}>Active
                </button>
                <button className={filter === "completed" ? "activeButton" : ""} onClick={onClickCompletedFilter}>Done
                </button>
            </div>
        </div>
    );
}
export default SearchPanel;