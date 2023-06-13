'use client';
import useSWR from "swr";
import { Author } from "@/interfaces/interfaces";
import { fetchUsers } from "@/api/authors";
import styles from "./AuthorsPage.module.scss"
import { useRouter } from "next/navigation";
import AuthorCard from "@/components/AuthorCard/AuthorCard";
interface AuthorsSliceProps {

}

function AuthorsSlice () {
	const { data, isLoading, error } = useSWR<Author[]>([`users/`],
		([url]: [string]) => fetchUsers(url), { revalidateIfStale: false });

	const router = useRouter();

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
};

export default AuthorsSlice;
