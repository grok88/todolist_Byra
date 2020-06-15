import React from "react";
import {filterType} from "../app/App";

export type SearchPanelPropsType = {
    changeFilter: (value: filterType) => void,
    filter:filterType
}
const SearchPanel = (props: SearchPanelPropsType) => {
    const {changeFilter,filter} = props;

    const onClickAllFilter = () => {
        changeFilter('all');
    }
    const onClickActiveFilter = () => {
        changeFilter('active');
    }
    const onClickCompletedFilter = () => {
        changeFilter('completed');
    }

    return (
        <div>
            <input type="text" placeholder={'Type to search'}/>
            <div>
                <button className={filter === "all" ? "activeButton" : ""}  onClick={onClickAllFilter}>All</button>
                <button className={filter === "active" ? "activeButton" : ""} onClick={onClickActiveFilter}>Active</button>
                <button className={filter === "completed" ? "activeButton" : ""} onClick={onClickCompletedFilter}>Done</button>
            </div>
        </div>
    );
}
export default SearchPanel;