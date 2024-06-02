import { Item } from "../../../interfaces/item";
import FilteredItem from "../item/FilteredItem";
import classes from "./FilteredList.module.css";

type FilteredListProps = {
    data: Item[] | undefined;
};

const FilteredList = ({ data }: FilteredListProps) => {
    if (!data) {
        return null;
    }

    return (
        <ul className={classes.itemsFrame}>
            {data.map((item: Item) => (
                <FilteredItem
                    key={item.id}
                    image={item.pic.movie_img_m}
                    title={item.movie_title}
                    rate={item.rate_avrage}
                    percentRate={item.avg_rate_label}
                    categories={item.categories}
                />
            ))}
        </ul>
    );
};

export default FilteredList;
