import type {AppProps} from 'next/app'
import Layout from "@/components/shared/Layout/Layout";
import '@/styles/globals.scss'

export default function App({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
        )
}
