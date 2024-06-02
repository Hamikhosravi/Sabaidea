import React from "react";
import classes from "./ListBoxInput.module.css"

type ListBoxInputProps = {
    label: string;
    isOpen: boolean;
    setModal: () =>{}
}


const ListBoxInput = ({label, isOpen, setModal}:ListBoxInputProps) => {

    const toggleList = () => {
        setModal();
    };
    return (
        <div className={classes.input} onClick={toggleList}>
            <span className={classes.label}>{label}</span>
            <span className={classes.arrow}>{isOpen ? '▲' : '▼'}</span>
        </div>
    )
};
export default ListBoxInput
