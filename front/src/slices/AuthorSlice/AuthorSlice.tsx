'use client';
import useSWR from "swr";
import Image from "next/image";
import { AuthorDetail } from "@/interfaces/interfaces";
import { fetchUser } from "@/api/authors";
import styles from "./AuthorDetailPage.module.scss"

interface AuthorSliceProps {
    id: string | number;
}


function AuthorSlice ({id}: AuthorSliceProps) {
    const { data, isLoading, error } = useSWR<AuthorDetail>([`users/${id}/`],
        ([url]: [string]) => fetchUser(url), { revalidateIfStale: false });

    if (!data) return null;

    return (
        <div className="container">
            <div className={styles.AuthorDetailPage}>
                <div className="card">
                    <div className={styles.MainInfo}>
                        {data.avatar_url ?
                            <div className={styles.Avatar} style={{ position: "relative" }}>
                                <Image src={data.avatar_url} fill alt=" " />
                            </div>
                            : null
                        }
                        <div>
                            <div className={styles.FIO}>{data.last_name} {data.first_name} {data.patronymic}</div>
                            <div>{data.position}</div>
                        </div>
                    </div>
                    <div className={styles.otherInfo}>
                        <div className={styles.infoItem}><span >Идентификатор в Web of Science: </span>{data.wos_id}</div>
                        <div className={styles.infoItem}><span >Идентификатор в SCORPUS: </span>{data.scorpus_auth_id}</div>
                        <div className={styles.infoItem}><span >Идентификатор ORCID: </span>{data.orcid}</div>
                        <div className={styles.infoItem}><span >SPIN-код: </span>{data.spin_kod}</div>
                        <div className={styles.infoItem}><span >Идентификатор в РИНЦ: </span>{data.rinc_auth_id}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorSlice;
