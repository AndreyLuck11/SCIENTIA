import React, { ChangeEvent, useEffect, useState } from "react";
import { useAtom } from "jotai";
import styles from "./modules/MultiSelectFilter.module.scss";
import checkBoxStyles from "./modules/BooleanField.module.scss";
import { MultSelectFilterOption } from "@/components/shared/interfaces";
import { filtersAtom, FiltersAtomInterface, useHandleFilterChange } from "@/store/filterAtoms";

interface MultiSelectFilterProps {
    options: MultSelectFilterOption[];
    filterName: string;
    filterClientName: string;
}

function MultiSelectFilter({ options, filterName, filterClientName}: MultiSelectFilterProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<MultSelectFilterOption[]>([]);
    const [filterValue, setFilterValue] = useState<string>("");
    const handleFilterChange = useHandleFilterChange();
    const [filters] = useAtom<FiltersAtomInterface>(filtersAtom);

    useEffect(() => {
        if (Object.prototype.hasOwnProperty.call(filters, filterName)) {
            // @ts-ignore
            setSelectedOptions(filters[filterName]);
        }
    }, []);

    const handleOptionClick = (option: MultSelectFilterOption) => {
        let updatedSelectedOptions;
        if (selectedOptions.some((item) => item === option.value)) {
            updatedSelectedOptions = selectedOptions.filter((item) => item !== option.value);
        } else {
            updatedSelectedOptions = [...selectedOptions, option.value];
        }
        setSelectedOptions(updatedSelectedOptions);
        handleFilterChange(filterName, updatedSelectedOptions.toString());
    };

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div className={styles.MultiSelectFilter}>
            <div className={styles.MultiSelectFilterButton} onClick={() => setIsOpen(!isOpen)}>
                {filterClientName}
            </div>
            {isOpen ? (
                <div className={styles.multiSelect}>
                    <input
                        className={styles.filterInput}
                        value={filterValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
                        placeholder="Поиск"
                    />
                    <div className={styles.options}>
                        {filteredOptions.map((option) => (
                            <div
                                key={option.value}
                                className={styles.option}
                                onClick={() => handleOptionClick(option)}
                            >
                                <div
                                    className={`${checkBoxStyles.booleanFilterBox} ${
                                        selectedOptions.includes(option.value)
                                            ? checkBoxStyles.booleanFilterBoxActive
                                            : ""
                                    }`}
                                />
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default MultiSelectFilter;
