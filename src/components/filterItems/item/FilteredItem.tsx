import React from "react";
import classes from "./FilteredItem.module.css"

type ItemProps = {
    image: string;
    title: string;
    rate: string;
}

const FilteredList = ({image, title, rate}: ItemProps) => {
    return (
        <li className={classes.item}>
            <img className={classes.image} src={image} alt={title}/>
            <div className={classes.description}>
                <span className={classes.title}>{title}</span>
                <span className={classes.rate}> امتیاز: {rate}</span>
            </div>
        </li>
    );
};
export default FilteredList;
