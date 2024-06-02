import { createContext, ReactNode, useState, useEffect } from 'react';
import classes from "./FilterContext.module.css";
import { useLocation } from "react-router-dom";

type Props = {
    children: ReactNode;
};

type FilteredContextType = {
    categorySelectedOptions: string[];
    sortSelectedOptions: string[];
    handleCategoryCheckboxChange: (option: string) => void;
    handleSortCheckboxChange: (option: string) => void;
};

export const FilteredContext = createContext<FilteredContextType>({
    categorySelectedOptions: [],
    sortSelectedOptions: [],
    handleCategoryCheckboxChange: () => {},
    handleSortCheckboxChange: () => {},
});

const FilteredContextComponent = ({ children }: Props) => {
    const [categorySelectedOptions, setCategorySelectedOptions] = useState<string[]>(['درام', 'کمدی', 'علمی تخیلی', 'اکشن']);
    const [sortSelectedOptions, setSortSelectedOptions] = useState<string[]>(['بالاترین امتیاز']);

    const query = new URLSearchParams(useLocation().search);
    const category = query.get('category');
    const sort = query.get('sort');

    useEffect(() => {
        if (category) {
            console.log("cat",category)
            setCategorySelectedOptions(category.split(','));
        }
        if (sort) {
            setSortSelectedOptions(sort.split(','));
        }
    }, []);

    const handleCategoryCheckboxChange = (option: string) => {
        setCategorySelectedOptions((prevSelected) => {
            if (prevSelected.includes(option)) {
                return prevSelected.filter((item) => item !== option);
            } else {
                return [...prevSelected, option];
            }
        });
    };

    const handleSortCheckboxChange = (option: string) => {
        setSortSelectedOptions((prevSelected) => {
            if (prevSelected.includes(option)) {
                return prevSelected.filter((item) => item !== option);
            } else {
                return [option];
            }
        });
    };

    return (
        <FilteredContext.Provider
            value={{
                categorySelectedOptions,
                handleCategoryCheckboxChange,
                sortSelectedOptions,
                handleSortCheckboxChange
            }}
        >
            <section className={classes.wholePage}>
                {children}
            </section>
        </FilteredContext.Provider>
    );
};

export default FilteredContextComponent;
