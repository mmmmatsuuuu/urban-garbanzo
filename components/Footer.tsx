const Footer:React.FC = () => {
    return (
        <footer className="bg-neutral text-neutral-content">
            <div className="max-w-screen-xl m-auto footer p-10">
                <div>
                    <span className="footer-title">Company</span> 
                    <p>
                        <a className="hover:underline" href="http://sh.higo.ed.jp/amakusa/">熊本県立天草高等学校</a>
                        　情報科
                    </p>
                    <p>〒863-0003　熊本県天草市本渡町本渡557</p>
                    <p>TEL 0969-23-5533  FAX 0969-25-1168</p>
                    <p>情報科職員Email: matsumura-t-mi@g.bears.ed.jp</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;