import React, { useState, useContext, useEffect } from 'react';
import ListBoxModal from '../listBox/ListBoxModal';
import { FilteredContext } from '../../../store/FilterContext';
import { useLocation, useNavigate } from 'react-router-dom';
import ListBoxInput from "../listBox/ListBoxInput";
import classes from "./SortFilter.module.css";

const options = ['بالاترین امتیاز', 'پایین ترین امتیاز'];

const SortFilter = () => {
    const { sortSelectedOptions, handleSortCheckboxChange } = useContext(FilteredContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        if (sortSelectedOptions.length > 0) {
            queryParams.set('sort', sortSelectedOptions);
        } else {
            queryParams.delete('sort');
        }
        const queryString = queryParams.toString().replace(/%2C/g, ',');
        navigate(`?${queryString}`);
    }, [sortSelectedOptions, navigate, location.search]);


    return (
        <div className={classes.container}>
            <ListBoxInput label="امتیاز فیلم" setModal={()=> setIsOpen(!isOpen)} isOpen={isOpen}/>
            {isOpen && (
                <ListBoxModal
                    options={options}
                    selectedOptions={sortSelectedOptions}
                    handleCheckboxChange={handleSortCheckboxChange}
                />
            )}
        </div>
    );
};

export default SortFilter;
