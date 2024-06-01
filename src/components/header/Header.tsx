import React from "react";
import {useLocation, Link} from "react-router-dom";
import classes from "./Header.module.css"

export default function Header() {
    const location: string = useLocation();
    const showDatePicker: string = location.pathname;
    const mainPage = showDatePicker === "/";
    return (
        <header className={classes.header}>
            <nav>
                {mainPage && <Link to="/filtered-items">صفحه فیلتر</Link>}
                {!mainPage && <Link to="/">صفحه اصلی</Link>}
            </nav>
            <div className={classes.filtersSection}>{!mainPage && <div>Yes</div>}</div>
            {/*<div>{!mainPage && <FilterOptions />}</div>*/}

        </header>
    )
}
