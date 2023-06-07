import React from "react";
import useSWR from "swr";
import { useAtom } from "jotai";
import { fetchPublications } from "@/api/publications";
import PublicationCard from "@/components/Publications/PublicationCard";
import { filtersAtom } from "@/store/filterAtoms";
import { useDebounce } from "@/hooks/useDebounce";
import styles from './PublicationList.module.scss'
import { Publication } from "@/interfaces/interfaces";

function PublicationsList() {

    const [filterStat] = useAtom(filtersAtom);
    const publicationsFiltersParams = useDebounce(filterStat, 1000);

    const { data, isLoading, error } = useSWR<Publication[]>(
        ["publications/", publicationsFiltersParams],
        ([url, params]: [string, any]) => fetchPublications(url, params),
        { revalidateIfStale: false }
    );

    if (isLoading && !data) return null;
    if (error && !data) return null;
    return (
        <div className={styles.publication__list}>
            {data?.map((item) => <PublicationCard key={item.id} publication={item} />)
            }
        </div>
    );
}

export default PublicationsList;
