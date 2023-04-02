import React, { useState } from "react";
import styles from './modules/MultiSelectFilter.module.scss'

function MultiSelectFilter() {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
        <div className={styles.MultiSelectFilter} />
    );
}

export default MultiSelectFilter;
