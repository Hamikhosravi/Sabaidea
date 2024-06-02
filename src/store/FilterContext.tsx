import { createContext, ReactNode, useState } from 'react';
import classes from "./FilterContext.module.css";

type Props = {
    children: ReactNode;
};

type FilteredContextType = {
    categorySelectedOptions: string[];
    sortSelectedOptions: string[];
    handleCategoryCheckboxChange: (option: string) => void;
    handleSortCheckboxChange : (option:string) => void;
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
        <FilteredContext.Provider value={{ categorySelectedOptions, handleCategoryCheckboxChange, sortSelectedOptions, handleSortCheckboxChange}}>
            <section className={classes.wholePage}>
                {children}
            </section>
        </FilteredContext.Provider>
    );
};

export default FilteredContextComponent;
