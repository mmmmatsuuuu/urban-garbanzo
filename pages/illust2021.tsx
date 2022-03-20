import { NextPage, GetStaticProps } from "next";
import Layout from "../components/Layout";
import { PictogramCard} from "../components/Card";


/** 
 * 生徒の作った作品 ------------------------------------------  
 * - 作品名　: ピクトグラム
 * - 年度　　: 2021
 * - 学年　　: １年生
 * - データ元: GoogleSpreadsheet
 */
export type Production = {
    title: string;
    description: string;
    img :string;
    license: string;
};

type PictProps = {
    shapedData: Production[]
};

const PictogramPage:NextPage<PictProps> = ({shapedData}) => {
    const pageTitle = "ピクトグラム2021";
    const description = "天草高校の問題を解決するために生徒が作ったピクトグラム集。クリエイティブコモンズライセンスの範囲でご自由に使用してください。";

    return (
        <Layout
            pageTitle={ pageTitle }
            description={ description }
        >
            <div 
                className="hero h-[500px]"
                style={{ backgroundImage: "url(" + process.env.NEXT_PUBLIC_BASE_PATH + "/img/pictogram.png);" }}
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
                    { shapedData.map(d => {
                        return (
                            <PictogramCard
                                key={ d.title }
                                title={ d.title }
                                img={ d.img }
                                description={ d.description }
                                license={ d.license }
                            />
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps:GetStaticProps = async() => {
    // 変数定義 ============================================
    // 
    // ====================================================
    const URL:string = "https://script.google.com/macros/s/AKfycbzWI6_zEsqcqI4hlvuew3cDTukeA8Tt59kP45lPQiVUZ7mSTaBLa8tyTKcjwsCmM0Ah/exec";
    let response:any;                 // フェッチデータ
    let shapedData:Production[] = []; // 整形済みデータ

    // データの取得 =========================================
    // google spreadsheetから
    // ====================================================
    response = await fetch(URL)
    .then(res => res.json())
    .then(data => {
        return data;
    });

    // 取得データの検証と整形 =================================
    // 
    // ====================================================
    if (response.datas) {
        for (let i=0; i< response.datas.length; i++) {
            var d = response.datas[i];
            var p:Production = {
                title: d.title,
                description: d.description,
                img: d.img,
                license: d.license
            }
            shapedData.push(p);
        }
    }

    // データの返却 =========================================
    // 
    // ====================================================
    return {
        props: {
            shapedData: shapedData,
        }
    }
}

export default PictogramPage;