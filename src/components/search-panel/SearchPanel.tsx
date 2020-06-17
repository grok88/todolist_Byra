import React, {ChangeEvent, useState} from "react";
import {filterType} from "../app/App";
import {Button, Grid, TextField} from "@material-ui/core";

export type SearchPanelPropsType = {
    changeFilter: (value: filterType) => void,
    filter: filterType,
    searchTasks: (value: string) => void,
    onChangeFilterValue: (value: string) => void,
    searchValue: string
}
const SearchPanel = (props: SearchPanelPropsType) => {
    const {changeFilter, filter, searchTasks, onChangeFilterValue, searchValue} = props;

    //let [value, setValue] = useState<string>("");

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
        //setValue(value);
        // searchTasks(value);
        onChangeFilterValue(value);
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <TextField style={{width: "100%"}} value={searchValue} onChange={onChangeValue}
                               label={'Type to search'}/>
                </Grid>
                <Grid item xs={5} container alignItems="flex-end">
                    <Grid item xs={4}>
                        <Button className={`button`} onClick={onClickAllFilter}
                                variant={filter === "all" ? "contained" : "outlined"} color={"primary"}>All
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button className={`button`}
                                onClick={onClickActiveFilter} variant={filter === "active" ? "contained" : "outlined"}
                                color={"primary"}>Active
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button className={`button`}
                                onClick={onClickCompletedFilter}
                                variant={filter === "completed" ? "contained" : "outlined"} color={"primary"}>Done
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default SearchPanel;