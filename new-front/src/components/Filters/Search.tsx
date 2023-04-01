import React from "react";
import styles from "@/components/Filters/modules/CharFilter.module.scss";
import { useHandleFilterChange } from "@/store/filterAtoms";

function Search() {

    const handleFilterChange = useHandleFilterChange();

    const handleChange = (event: any) => {
        handleFilterChange("title", event.target.value);
    };

    return (
        <div className={styles.search}>
            <input type="text" placeholder="Поиск" className={styles.filtersInput} onChange={handleChange} />
            <div className={styles.searchButton}>
                <img src="/search.svg" alt="search" />
            </div>
        </div>
    );
}

export default Search;
