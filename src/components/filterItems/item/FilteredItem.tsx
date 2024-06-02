import React, { SyntheticEvent } from "react";
import classes from "./FilteredItem.module.css";

type Category = {
    title_en:  string;
    title:     string;
    link_type: "list";
    link_key:  string;
}
type ItemProps = {
    image: string;
    title: string;
    rate: string;
    percentRate: string;
    categories: Category[]
}

const FilteredList = ({ image, title, rate , percentRate, categories}: ItemProps) => {
    const defaultImage = "/images/noImage.jpg"; // Path to your default image

    const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src = defaultImage;
    };

    return (
        <li className={classes.item}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={image} alt={title} onError={handleImageError} />
                <div className={classes.overlay}>
                    <div className={classes.overlayText}>
                        <span className={classes.overlayRate}>{percentRate}</span>
                        <span className={classes.overlayTitle}>{title}</span>
                        <span className={classes.overlayTitle}>{categories[0].title} , {categories[1].title}</span>
                    </div>
                </div>
            </div>
            <div className={classes.description}>
                <span className={classes.title}>{title}</span>
                <span className={classes.rate}>امتیاز: {rate}</span>
            </div>
        </li>
    );
};

export default FilteredList;
