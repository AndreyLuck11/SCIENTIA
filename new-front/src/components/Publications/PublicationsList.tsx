import React from "react";
import useSWR from "swr";
import { useAtom } from "jotai";
import { fetchPublications } from "@/api/publications";
import { Publication } from "@/components/shared/interfaces";
import PublicationCard from "@/components/Publications/PublicationCard";
import { filtersAtom } from "@/store/filterAtoms";
import { useDebounce } from "@/hooks/useDebounce";

function PublicationsList() {

    const [filterStat] = useAtom(filtersAtom);
    const publicationsFiltersParams = useDebounce(filterStat, 1000);

    const { data, isLoading, error } = useSWR<Publication[]>(
        ["api/publications/", publicationsFiltersParams],
        ([url, params]: [string, any]) => fetchPublications(url, params),
        { revalidateIfStale: false }
    );

    if (isLoading) return null;
    if (error) return null;
    return (
        <div className="publication__list">
            {data?.map((item) => <PublicationCard key={item.id} publication={item} />)
            }
        </div>
    );
}

export default PublicationsList;
