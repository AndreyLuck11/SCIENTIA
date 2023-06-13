import React from "react";
import Image from "next/image"
import styles from  "./AuthorCard.module.scss"
import { Author } from "@/interfaces/interfaces";

interface AuthorCardProps {
  author: Author
  props?: any
}

function AuthorCard({author, props}: AuthorCardProps) {

    return (
        <div className={styles.AuthorCard} style={{justifyContent: author.avatar_url ? "initial" : "center"}} {...props}>
            {author.avatar_url ?
                <div className={styles.AuthorCardImg}>
                    <Image src={author.avatar_url} fill alt=" "/>
                </div>
                : null
            }
            <div>
                <div>{author.last_name} {author.first_name} {author.patronymic}</div>
                <div>{author.position}</div>
            </div>
        </div>
    );
}

export default AuthorCard;
