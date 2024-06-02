import {useFilteredItems} from "../../../hooks/useFilteredItems";
import LoadingSpin from "../../loading/LoadingSpin";
import FilteredList from "../list/FilteredList";
import classes from "./FilterItems.module.css";
import {useLocation} from 'react-router-dom';

const FilterItems = () => {
    const query = new URLSearchParams(useLocation().search);
    const category = query.get('category') || '';
    const sort = query.get('sort') || '';

    const {data, isLoading, error} = useFilteredItems(category, sort);

    if (error) {
        return (<div>Error on fetching data</div>);
    }

    if (isLoading) {
        return (<LoadingSpin/>);
    }

    return (
        <>
            <h1 className={classes.title}>لیست تمامی فیلم و سریال ها</h1>
            <FilteredList data={data}/>
        </>
    );
};

export default FilterItems;
