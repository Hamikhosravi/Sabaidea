import { useQuery, UseQueryResult } from 'react-query';
import { Item } from '../interfaces/item';
import { itemRequest } from "../utils/axios-utils";
import { useMemo } from 'react';

const fetchItems = async (): Promise<Item[]> => {
    return await itemRequest<Item[]>({ url: '/data.json' });
};

export const useFilteredItems = (category: string, sort: string): UseQueryResult<Item[], Error> => {
    const fetchItemsMemoized = useMemo(() => fetchItems, []);

    return useQuery<Item[], Error>({
        queryKey: ['items', category, sort],
        queryFn: fetchItemsMemoized,
        select: (items) => {
            // Filter items based on category
            let filteredItems = items;
            if (category) {
                const categoriesToFilter = category.split(',');
                filteredItems = items.filter(item => {
                    for (const cat of categoriesToFilter) {
                        if (item.categories.some(category => category.title === cat)) {
                            return true;
                        }
                    }
                    return false;
                });
            }

            // Sort items based on rate_average
            if (sort === 'پایین ترین امتیاز') {
                filteredItems.sort((a, b) => +a.rate_avrage - +b.rate_avrage);
            } else if (sort === 'بالاترین امتیاز') {
                filteredItems.sort((a, b) => +b.rate_avrage - +a.rate_avrage);
            }

            return filteredItems;
        }
    });
};
