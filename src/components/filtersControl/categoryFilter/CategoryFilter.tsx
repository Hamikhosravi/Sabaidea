import { useState, useContext, useEffect } from 'react';
import ListBoxModal from '../listBox/ListBoxModal';
import { FilteredContext } from '../../../store/FilterContext';
import { useLocation, useNavigate } from 'react-router-dom';
import ListBoxInput from "../listBox/ListBoxInput";
import classes from "./CategoryFilter.module.css"

const options = ['درام', 'کمدی', 'علمی تخیلی', 'اکشن'];

const CategoryFilter = () => {
    const { categorySelectedOptions, handleCategoryCheckboxChange } = useContext(FilteredContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        if (categorySelectedOptions.length > 0) {
            queryParams.set('category', categorySelectedOptions.join(','));
        } else {
            queryParams.delete('category');
        }
        const queryString = queryParams.toString().replace(/%2C/g, ',');
        navigate(`?${queryString}`);
    }, [categorySelectedOptions, navigate, location.search]);


    return (
        <div className={classes.container}>
            <ListBoxInput label="ژانر" setModal={()=> setIsOpen(!isOpen)} isOpen={isOpen}/>
            {isOpen && (
                <ListBoxModal
                    options={options}
                    selectedOptions={categorySelectedOptions}
                    handleCheckboxChange={handleCategoryCheckboxChange}
                />
            )}
        </div>
    );
};

export default CategoryFilter;
