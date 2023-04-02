import React, { useEffect } from "react";
import useSWR from "swr";
import { useAtom } from "jotai";
import styles from "./modules/Filters.module.scss";
import CharFilter from "@/components/Filters/CharFilter";
import { Filter } from "@/components/shared/interfaces";
import { fetchFilters } from "@/api/filters";
import { filtersAtom } from "@/store/filterAtoms";
import BooleanFilter from "@/components/Filters/BooleanFilter";
import MultiSelectFilter from "@/components/Filters/MultiSelect";

function FilterItem({ filter }: { filter: Filter }) {
    if (filter.filter_type === "CustomCharFilter" || filter.filter_type === "NumberFilter") {
        return <CharFilter filter={filter} />;
    }
    if (filter.filter_type === 'BooleanFilter') {
        return <BooleanFilter filter={filter} />;
    }
    return null;
}

const Filters = function () {
    const [filterStat] = useAtom(filtersAtom);
    const { data, isLoading, error } = useSWR<Filter[]>(
        ["api/filters_info/publications/"],
        ([url]: [string]) => fetchFilters(url),
        { revalidateIfStale: false }
    );

    useEffect(() => {
        console.log(filterStat)
    }, [filterStat])

    if (isLoading || error) return null;

    return (
        <div className={styles.filters}>
            {data &&
            data.map((filter: Filter) => <FilterItem key={filter.filter_name} filter={filter} />)}
            <MultiSelectFilter/>
        </div>
    );
};

export default Filters;
