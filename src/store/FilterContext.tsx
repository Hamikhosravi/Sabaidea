import React, {ReactNode} from 'react';
import classes from "./FilterContext.module.css"

type ChildrenProps = {
    children: ReactNode;
};

const FilteredContext = ({children}: ChildrenProps) => {
    return (
        <section className={classes.wholePage}>{children}</section>
    );
};

export default FilteredContext;
