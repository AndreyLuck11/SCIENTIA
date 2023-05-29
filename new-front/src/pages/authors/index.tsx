import React from "react";
import useSWR from "swr";
import router from "next/router";
import { Author} from "@/components/shared/interfaces";
import { fetchUsers } from "@/api/authors";
import AuthorCard from "@/components/AuthorCard/AuthorCard";
import styles from "./AuthorsPage.module.scss"


function AuthorsPage() {
    const { data, isLoading, error } = useSWR<Author[]>([`api/users/`],
        ([url]: [string]) => fetchUsers(url), { revalidateIfStale: false });
    
    if(isLoading) return null
    if(error) return null
  
    return (
        <div className="container">
            <div className={styles.AuthorsPage}>
                <div className={styles.AuthorsList}>
                    {data?.map((item) => <AuthorCard props={{ onClick: () => {router.push(`/authors/${item.id}`)}}}  key={item.id} author={item}/>)}
                </div>
            </div>
        </div>
    );
}

export default AuthorsPage;
