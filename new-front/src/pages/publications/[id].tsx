import React from "react";
import useSWR from "swr";
import Image from "next/image";
import quote from "public/citat.svg";
import download from "public/download.svg"
import shared from "public/shared.svg"
import styles from "./PublicationDetailPage.module.scss";
import { Author, PublicationDetail } from "@/components/shared/interfaces";
import { fetchPublicationDetail } from "@/api/publications";

function PublicationDetailPage({ query }: any) {
    const { data, isLoading, error } = useSWR<PublicationDetail>([`api/publications/${query.id.id}/`],
        ([url]: [string]) => fetchPublicationDetail(url), { revalidateIfStale: false });
    const excludedKeys = ["authors", "description", "id", "cat", "title", "abstract", "sources", "keywords"];
    const dateFields = ["publication_date", "time_create", "time_update", "date_publ", "qwart_izd"];

    function filterValue(value: any, key: string) {
        if(dateFields.includes(key)) {
            const date = new Date(value);
            // eslint-disable-next-line no-restricted-globals
            if (!isNaN(date.getTime())) {
                // Если да, то форматируем дату
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                return `${day}.${month}.${year}`;
            }
        } else {
            return value;
        }
        return ''
    }

    if (isLoading) return null;
    if (error) return null;
    if (data) return (
        <div className={styles.publicationPage}>
            <div className="container">
                <div className={`card ${styles.header}`}>
                    <div className={styles.title}>{data.title.value}</div>
                    <div className={styles.category}>{data.cat.value}</div>
                </div>
                <div className={styles.splitter}>
                    <div className={`${styles.MainInfo} card`}>
                        <div className={styles.infoItem}><span>Анотация: </span> {data.abstract.value}</div>
                        <div className={styles.infoItem}><span>Ключевые слова: </span> {data.keywords.value}</div>
                        <div className={styles.infoItem}><span>Источники: </span> {data.sources.value}</div>
                        <div className={styles.otherInfo}>
                            {/* eslint-disable-next-line camelcase */}
                            {Object.entries(data).map(([key, { verbose_name, value }]) => {
                                if (value !== null && !excludedKeys.includes(key) && value) {
                                    return (
                                        <div key={`${key}oi`}>
                                            {/* eslint-disable-next-line camelcase */}
                                            <strong>{verbose_name}:</strong> {filterValue(value, key)}
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <div className={`${styles.authors} card`}>
                            <p>Авторы</p>
                            {data.authors.value.map((author: Author) => <div className={styles.authorItem}>
                                {author.avatar_url ?
                                    <div className={styles.authorAvatar}>
                                        <Image src={author.avatar_url} alt="avatar" fill />
                                    </div>
                                    : <div className={styles.authorAvatar}>
                                        {author.fio[0]}
                                    </div>
                                }
                                <div>{author.fio}</div>
                            </div>)
                            }
                        </div>
                        <div className={styles.activeButtons}>
                            <button type="button">
                                <Image src={download} alt="Скачать"/>
                            </button>
                            <button type="button">
                                <Image src={quote} alt="Цитата"/>
                            </button>
                            <button type="button">
                                <Image src={shared} alt="Поделиться"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublicationDetailPage;

export async function getServerSideProps({ query }: any) {
    return { props: { query: { id: query } } };
}
