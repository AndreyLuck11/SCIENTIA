import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import styles from './modules/CharFilter.module.scss';
import { useHandleFilterChange , filtersAtom } from '@/store/filterAtoms';
import { Filter } from "@/interfaces/interfaces";


interface CharFilterProps {
  filter: Filter;
}

function CharFilter({ filter }: CharFilterProps) {
    const handleFilterChange = useHandleFilterChange();
    const [filters] = useAtom<Record<string, any>>(filtersAtom);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (Object.prototype.hasOwnProperty.call(filters, filter.filter_name)) {
            setInputValue(filters[filter.filter_name]);
        }
    }, [filters, filter.filter_name]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        handleFilterChange(filter.filter_name, newValue);
    };

    return (
        <div className={styles.filtersInput}>
            <input
                type={
                    filter.filter_type === 'NumberFilter' && filter.filter_name !== 'cat'
                        ? 'number'
                        : 'text'
                }
                placeholder={filter.filter_client_name}
                onChange={handleChange}
                value={inputValue}
            />
        </div>
    );
}

export default CharFilter;
