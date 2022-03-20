import Link from "next/link";
import { Production as Pictogram } from "../pages/pictogram2021"
export type CardProps = {
    image: string;
    alt: string;
    header: string;
    paragraph: string;
    link: string;
    linkTitle: string;
}

export const Card:React.FC<CardProps> = ({
    image, alt, header, paragraph, link, linkTitle
}) => {
    if (link.includes("http")) {
        return (
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={ image } alt={ alt } /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ header }</h2>
                    <p>{ paragraph }</p>
                    <div className="card-actions justify-end">
                    <a
                        href={ link }
                        className="btn btn-primary"
                    >
                        { linkTitle }
                    </a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
            <figure><img src={ image } alt={ alt } /></figure>
            <div className="card-body">
                <h2 className="card-title">{ header }</h2>
                <p>{ paragraph }</p>
                <div className="card-actions justify-end">
                <Link
                    href={ link }
                >
                <a
                    className="btn btn-primary w-1/2"
                >
                    { linkTitle }
                </a>
                </Link>
                </div>
            </div>
        </div>
    )
}

export const PictogramCard:React.FC<Pictogram> = ({
    title, description, img, license
}) => {

    function createMarkup(h:string) {
        return {__html: h};
    }

    return (
        <div>
        <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure><img src={ img } alt={ title }/></figure>
            <div className="card-body">
                <h2 className="card-title">{ title }</h2>
                <p></p>
                <div className="card-actions justify-end">
                <label htmlFor={`modal-${ title }`} className="btn btn-primary w-1/2 modal-button">
                    開く
                </label>
                </div>
            </div>
        </div>
        

        <input type="checkbox" id={`modal-${ title }`} className="modal-toggle"/>
        <div className="modal">
            <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
                <label htmlFor={`modal-${ title }`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <figure><img src={ img } alt={ title } /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ title }</h2>
                    <p>{ description }</p>
                    <div className="card-actions">
                        <div dangerouslySetInnerHTML={ createMarkup(license) }></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}