import React, { useEffect } from "react";
import useSWR from "swr";
import { useAtom } from "jotai";
import styles from "./modules/Filters.module.scss";
import CharFilter from "@/components/Filters/CharFilter";
import Search from "@/components/Filters/Search";
import { Filter } from "@/components/shared/interfaces";
import { fetchFilters } from "@/api/filters";
import { filtersAtom } from "@/store/filterAtoms";

function FilterItem({ filter }: { filter: Filter }) {
    if (filter.filter_name === "title") return <Search />;
    if (filter.filter_type === "CharFilter" || filter.filter_type === "NumberFilter") {
        return <CharFilter filter={filter} />;
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
        </div>
    );
};

export default Filters;
