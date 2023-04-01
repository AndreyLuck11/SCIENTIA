import { atom, useAtom } from 'jotai';

const filtersAtom = atom({});

const updateFilterAtom = atom(
    null,
    (get, set, { name, value }) => {
        const currentFilters = get(filtersAtom);
        set(filtersAtom, { ...currentFilters, [name]: value });
    }
);

export function useHandleFilterChange() {
    const [, updateFilter] = useAtom(updateFilterAtom);

    const handleFilterChange = (filterName: string, value: any) => {
        updateFilter({ name: filterName, value });
    };

    return handleFilterChange;
}

export { filtersAtom };
