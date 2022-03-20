import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { Card } from '../components/Card';

const Home: NextPage = () => {
    const pageTitle = process.env.NEXT_PUBLIC_SITE_NAME ? process.env.NEXT_PUBLIC_SITE_NAME : "";
    const description = `このサイトは、情報の授業で、生徒が作成した作品を公開している場所です。`;
    return (
        <Layout
            pageTitle={ pageTitle }
            description={ description }
        >
            <div 
                className="hero h-[700px]"
                style={{ backgroundImage: "url(" + process.env.NEXT_PUBLIC_BASE_PATH + "/img/hero-bg.jpeg);" }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{ pageTitle }</h1>
                    <p className="mb-5">{ description }</p>
                    </div>
                </div>
            </div>
            <div className='bg-base-300'>
                <div className='max-w-screen-xl m-auto p-1 py-8 md:p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                    <Card 
                        image={ `${process.env.NEXT_PUBLIC_BASE_PATH}/img/illust.webp` }
                        alt="card-image"
                        header="フリーイラスト2021"
                        paragraph='生徒が作成した発表のプレゼンなどいろいろな場所で活用できるフリーイラスト集。クリエイティブコモンズライセンスの範囲でご自由に使用してください。'
                        link='/pictogram2021'
                        linkTitle='開く'
                    />
                    <Card 
                        image={ `${process.env.NEXT_PUBLIC_BASE_PATH}/img/pictogram.png` }
                        alt="card-image"
                        header="Pictogram2021"
                        paragraph='天草高校の問題を解決するために生徒が作ったピクトグラム集。クリエイティブコモンズライセンスの範囲でご自由に使用してください。'
                        link='/pictogram2021'
                        linkTitle='開く'
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Home
