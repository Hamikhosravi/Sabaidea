import React from "react";
import Item from "../../../interfaces/item";
import FilteredItem from "../item/FilteredItem";
import classes from "./FilteredList.module.css";

const FilteredList = ({data}: Item[]) => {
    return (
        <ul className={classes.itemsFrame}>
            {data.map(item => (
                <FilteredItem key={item.id} image={item.pic.movie_img_m} title={item.movie_title} rate={item.rate_avrage}/>
            ))}
        </ul>
    );
};

export default FilteredList;
