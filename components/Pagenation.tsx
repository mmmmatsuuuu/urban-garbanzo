type pagenateProps = {
    num: number;
    active: number;
}

const Pagenation:React.FC<pagenateProps> = ({
    num, active
}) => {
    const pageArr:number[] = [];
    
    for (let i=1; i<=num; i++) {
        pageArr.push(i);
    }
    return (
        <div className="btn-group">
            { pageArr.map(p => {
                if (p == active) {
                    return (
                        <button key={ p } className="btn btn-active">{ p }</button>
                    )
                } else {
                    return (
                        <button className="btn">{ p }</button>
                    )
                }
            })}
        </div>
    )
}

export default Pagenation;