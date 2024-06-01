import React from "react";
import {useFilteredItems} from "../../../hooks/useFilteredItems";
import LoadingSpin from "../../loading/LoadingSpin";
import FilteredList from "../list/FilteredList";
import classes from "./FilterItems.module.css"

const FilterItems = () => {
    const {data, isLoading, error} = useFilteredItems();
    if (error) {
        return (<div>Error on fetching data</div>)
    }
    if (isLoading) {
        return (<LoadingSpin/>)
    }
    return (
        <>
            <h1 className={classes.title}>لیست تمامی فیلم و سریال ها</h1>
            <FilteredList data={data}/>
        </>
    )
};

export default FilterItems;
