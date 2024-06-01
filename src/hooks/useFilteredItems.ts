import { useQuery, UseQueryResult } from 'react-query';
import { Item } from '../interfaces/item';
import { itemRequest } from "../utils/axios-utils";
import { useMemo } from 'react';

const fetchItems = async (): Promise<Item[]> => {
    return await itemRequest<Item[]>({ url: '/data.json' });
};

export const useFilteredItems = (): UseQueryResult<Item[], Error> => {
    const fetchItemsMemoized = useMemo(() => fetchItems, []);

    return useQuery<Item[], Error>({
        queryKey: ['items'],
        queryFn: fetchItemsMemoized,
    });
};
