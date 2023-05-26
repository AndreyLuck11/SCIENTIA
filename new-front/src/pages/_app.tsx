import useSWR from "swr";
import type { AppProps } from "next/app";
import Layout from "@/components/shared/Layout/Layout";
import "@/styles/globals.scss";
import { fetchUsers } from "@/api/authors";
import { fetchCategories } from "@/api/categories";


export default function App({ Component, pageProps }: AppProps) {
    useSWR("api/users/", fetchUsers);
    useSWR("api/categories/", fetchCategories);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
