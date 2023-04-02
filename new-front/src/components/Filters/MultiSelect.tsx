import React, { useState, ChangeEvent } from 'react';
import styles from './modules/MultiSelectFilter.module.scss';


interface Option {
  label: string;
  value: number;
}

const options: Option[] = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
];

function MultiSelect() {
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const [filterValue, setFilterValue] = useState<string>('');

    const handleOptionClick = (option: Option) => {
        setSelectedOptions([...selectedOptions, option]);
    };

    const handleChipRemove = (optionToRemove: Option) => {
        setSelectedOptions(selectedOptions.filter((option) => option !== optionToRemove));
    };

    const filteredOptions = options.filter(
        (option) => !selectedOptions.includes(option) && option.label.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div className={styles.multiSelect}>
            <div className={styles.chips}>
                {selectedOptions.map((option) => (
                    <div key={option.value} className={styles.chip}>
                        {option.label}
                        <button className={styles.removeBtn} onClick={() => handleChipRemove(option)}>
                  &times;
                        </button>
                    </div>
                ))}
            </div>
            <input
                className={styles.filterInput}
                value={filterValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
                placeholder="Filter options"
            />
            <div className={styles.options}>
                {filteredOptions.map((option) => (
                    <div
                        key={option.value}
                        className={styles.option}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MultiSelect;
