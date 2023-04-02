import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { filtersAtom, FiltersAtomInterface, useHandleFilterChange } from "@/store/filterAtoms";
import styles from './modules/BooleanField.module.scss'


interface BooleanFilterProps {
    filter: {
        filter_name: string;
        filter_client_name: string;
    };
}

function BooleanFilter({ filter }: BooleanFilterProps) {
    const handleFilterChange = useHandleFilterChange();
    const [filters] = useAtom<FiltersAtomInterface>(filtersAtom);
    const [filterValue, setFilterValue] = useState(false);

    useEffect(() => {
        setFilterValue(!!filters[filter.filter_name]);
    }, [filters, filter.filter_name, handleFilterChange]);

    const handleClick = () => {
        const newValue = !filterValue;
        setFilterValue(newValue);
        handleFilterChange(filter.filter_name, newValue);
    };

    return (
        <div className={styles.booleanFilter} role="button" tabIndex={0} onClick={handleClick}>
            <div
                className={`${styles.booleanFilterBox} ${
                    filterValue ? styles.booleanFilterBoxActive : ''
                }`}
            />
            <div>{filter.filter_client_name}</div>
        </div>
    );
}

export default BooleanFilter;
