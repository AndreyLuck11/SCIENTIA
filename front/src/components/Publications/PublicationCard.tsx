import Link from "next/link";
import styles from './PublicationCard.module.scss'
import { useRouter } from "next/navigation";
import { Publication } from "@/interfaces/interfaces";

interface PublicationCardProps {
    publication: Publication
}
const PublicationCard = ({publication}: PublicationCardProps) => {

    const router = useRouter();

    return (
        <div className={styles.publication_card} onClick={() => {router.push(`/publications/${publication.id}`)}}>
            <div className={styles.topContent}>
                <div className={styles.title}>{publication.title}</div>
                <div className={styles.download}>
                    <img src="/download.svg" />
                </div>
            </div>
            <div className={styles.bottomContent}>
                <div className={styles.authors}>
                    {
                        publication.authors.map(author => {
                            return <Link key={author.id} href={`/authors/${author.id}`}>{author.fio}</Link>
                        })
                    }
                </div>
                <div className={styles.otherInfo}>
                    <div className={styles.type}>{publication.cat}</div>
                    <div className={styles.year}>{publication.publication_year}</div>
                </div>
            </div>
        </div>
    );
};

export default PublicationCard;

