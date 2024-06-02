import React, {useContext} from "react";
import {useLocation, Link} from "react-router-dom";
import FiltersControl from "../filtersControl/FiltersContainer/FiltersControl"
import classes from "./Header.module.css"
import {FilteredContext} from "../../store/FilterContext";

export default function Header() {
    const { categorySelectedOptions, sortSelectedOptions } = useContext(FilteredContext);
    const location: string = useLocation();
    const showDatePicker: string = location.pathname;
    const mainPage = showDatePicker === "/";
    return (
        <header className={classes.header}>
            <nav>
                {mainPage && <Link to={`/filtered-items?category=${categorySelectedOptions}&sort=${sortSelectedOptions}`} >صفحه فیلتر</Link>}
                {!mainPage && <Link to="/">صفحه اصلی</Link>}
            </nav>
            <div className={classes.filtersSection}>{!mainPage && <FiltersControl />}</div>
        </header>
    )
}
