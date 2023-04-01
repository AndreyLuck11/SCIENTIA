import React from "react";
import styles from './modules/CharFilter.module.scss';
import { useHandleFilterChange } from "@/store/filterAtoms";
import { Filter } from "@/components/shared/interfaces";

interface CharFilterProps {
  filter: Filter;
}

function CharFilter({filter}: CharFilterProps) {

    const handleFilterChange = useHandleFilterChange();

    const handleChange = (event: any) => {
        handleFilterChange(filter.filter_name, event.target.value);
    };

    return (
        <div>
            <input type={filter.filter_type === 'NumberFilter' ? "number" : "text"} placeholder={filter.filter_client_name} className={styles.filtersInput} onChange={handleChange}/>
        </div>
    );
}

export default CharFilter;
