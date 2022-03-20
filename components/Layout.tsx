import type { NextPage } from 'next';
import Head from "next/head";
import Footer from "./Footer";
type headProps = {
    children: React.ReactNode;
    pageTitle: string;
    description: string;
}

const Layout:NextPage<headProps> = ({ children, pageTitle, description }) => {
    return (
        <>
            <Head>
                <title>{ process.env.NEXT_PUBLIC_SITE_NAME } | { pageTitle }</title>
                <meta name="description" content={ description } />
                <link rel="icon" href={ `${ process.env.NEXT_PUBLIC_BASE_PATH }/favicon.ico`} />
            </Head>
            <div data-theme="cupcake">
                { children }
            </div>
            <Footer />
        </>
    )
}

export default Layout;