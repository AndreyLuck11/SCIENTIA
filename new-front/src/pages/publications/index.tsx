import React from 'react';
import PublicationsList from "@/components/Publications/PublicationsList";
import Filters from "@/components/Filters/Filters";
import styles from "./PublicationsPage.module.scss"

function PublicationsPage() {

    return (
        <div className={styles.publicationPage}>
            <div className="container">
                <div className={styles.content}>
                    <Filters/>
                    <PublicationsList/>
                </div>
            </div>
        </div>
    );
}

export default PublicationsPage;
