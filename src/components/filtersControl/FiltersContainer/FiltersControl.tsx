import React from 'react';
import SortFilter from "../sortFilter/SortFilter";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import classes from "./FiltersControl.module.css"

const FiltersControl = () => {

    return (
        <section className={classes.filters}>
            <CategoryFilter />
            <SortFilter/>
        </section>
    );
};

export default FiltersControl;
