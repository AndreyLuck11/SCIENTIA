import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { useAtom, Atom } from "jotai";
import styles from "./modules/MultiSelectFilter.module.scss";
import checkBoxStyles from "./modules/BooleanField.module.scss";

import { filtersAtom, FiltersAtomInterface, useHandleFilterChange } from "@/store/filterAtoms";
import { MultSelectFilterOption } from "@/interfaces/interfaces";

interface MultiSelectFilterProps {
    options: MultSelectFilterOption[];
    filterName: string;
    filterClientName: string;
    filterAtom?: Atom<FiltersAtomInterface>;
    onFilterChange?: (filterName: string, newValue: MultSelectFilterOption[]) => void;
    singleSelect?: boolean;
    noBorder?: boolean;
}

function MultiSelectFilter({ options, filterName, filterClientName, filterAtom, onFilterChange, singleSelect, noBorder}: MultiSelectFilterProps) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<MultSelectFilterOption[]>([]);
    const [filterValue, setFilterValue] = useState<string>("");
    const handleFilterChange = useHandleFilterChange();
    const [filters, setFilters] =
        filterAtom ? useAtom<FiltersAtomInterface>(filterAtom) : useState<FiltersAtomInterface>({});

    useEffect(() => {
        if (Object.prototype.hasOwnProperty.call(filters, filterName)) {
            // @ts-ignore
            setSelectedOptions(filters[filterName]);
        }
    }, []);

    const handleOptionClick = (option: MultSelectFilterOption) => {
        let updatedSelectedOptions: any;

        if (singleSelect) {
            updatedSelectedOptions = option.value;
        } else {
            if (selectedOptions.some((item) => item === option.value)) {
                updatedSelectedOptions = selectedOptions.filter((item) => item !== option.value);
            } else {
                updatedSelectedOptions = [...selectedOptions, option.value];
            }
        }

        setSelectedOptions(singleSelect ? [updatedSelectedOptions] : updatedSelectedOptions);

        if (filterAtom) {
            handleFilterChange(filterName, updatedSelectedOptions.toString());
        } else {
            setFilters((prevFilters) => ({ ...prevFilters, [filterName]: updatedSelectedOptions.toString() }));
            if (onFilterChange) {
                onFilterChange(filterName, singleSelect ? updatedSelectedOptions : updatedSelectedOptions);
            }
        }
    };

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div className={noBorder ? styles.MultiSelectFilter_nb : styles.MultiSelectFilter}>
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
                                        (singleSelect ? selectedOptions[0] === option.value : selectedOptions.includes(option.value))
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
