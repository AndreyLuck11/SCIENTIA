import React, { useEffect, useState } from 'react';
import { useAtom, Atom } from 'jotai';
import {FiltersAtomInterface, useHandleFilterChange } from "@/store/filterAtoms";
import styles from './modules/BooleanField.module.scss'

interface BooleanFilterProps {
    filter: {
        filter_name: string;
        filter_client_name: string;
    };
    filterAtom?: Atom<FiltersAtomInterface>;
    onFilterChange?: (filterName: string, newValue: boolean) => void;
}

function BooleanFilter({ filter, filterAtom, onFilterChange }: BooleanFilterProps) {
    const handleFilterChange = useHandleFilterChange();
    const [filters, setFilters] =
        filterAtom ? useAtom<FiltersAtomInterface>(filterAtom) : useState<FiltersAtomInterface>({});
    const [filterValue, setFilterValue] = useState(false);

    useEffect(() => {
        if (Object.prototype.hasOwnProperty.call(filters, filter.filter_name)) {
            setFilterValue(!!filters[filter.filter_name]);
        }
    }, [filters, filter.filter_name]);

    const handleClick = () => {
        const newValue = !filterValue;
        setFilterValue(newValue);
        if (filterAtom) {
            handleFilterChange(filter.filter_name, newValue);
        } else {
            setFilters((prevFilters) => ({ ...prevFilters, [filter.filter_name]: newValue }));
            if (onFilterChange) {
                onFilterChange(filter.filter_name, newValue);
            }
        }
    };

    return (
        <div className={styles.booleanFilter} role="button" tabIndex={0} onClick={handleClick}>
            <div
                className={`${styles.booleanFilterBox} ${
                    filterValue ? styles.booleanFilterBoxActive : ''
                }`}
            />
            <div style={{flex: "1"}}>{filter.filter_client_name}</div>
        </div>
    );
}

export default BooleanFilter;
