import React, { useEffect } from "react";
import useSWR from "swr";
import { useAtom } from "jotai";
import styles from "./modules/Filters.module.scss";
import CharFilter from "@/components/Filters/CharFilter";
import { Filter, UserListItem } from "@/interfaces/interfaces";
import { fetchFilters } from "@/api/filters";
import { filtersAtom } from "@/store/filterAtoms";
import BooleanFilter from "@/components/Filters/BooleanFilter";
import MultiSelectFilter from "@/components/Filters/MultiSelectFilter";
import { fetchUsers } from "@/api/authors";
import { fetchCategories } from "@/api/categories";

function FilterItem({ filter }: { filter: Filter }) {

    if (filter.filter_name === "authors") {
        const { data: users } = useSWR("users/", fetchUsers);
        const publicationsAuthorsFilterArgs: any = [];
        if (users) {
            users.forEach((user: UserListItem) => publicationsAuthorsFilterArgs.push({ label: user.fio, value: user.id}));
        }
        return <MultiSelectFilter filterAtom={filtersAtom} options={publicationsAuthorsFilterArgs} filterName={filter.filter_name} filterClientName={filter.filter_client_name}/>
    }

    if (filter.filter_name === "cat") {
        const { data: categories } = useSWR("categories/", fetchCategories);
        const categoriesFilterArgs: any = [];
        if (categories) {
            categories.forEach((category: any) => categoriesFilterArgs.push({ label: category.name, value: category.id}));
        }
        return <MultiSelectFilter filterAtom={filtersAtom} options={categoriesFilterArgs} filterName={filter.filter_name} filterClientName={filter.filter_client_name}/>
    }

    if (filter.filter_type === "CustomCharFilter" || filter.filter_type === "NumberFilter") {
        return <CharFilter filter={filter} />;
    }
    if (filter.filter_type === 'BooleanFilter') {
        return <BooleanFilter filterAtom={filtersAtom} filter={filter} />;
    }
    return null;
}

const Filters = function () {
    const [filterStat] = useAtom(filtersAtom);
    const { data, isLoading, error } = useSWR<Filter[]>(
        ["filters_info/publications/"],
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
