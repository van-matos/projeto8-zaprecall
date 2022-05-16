import logo from "./images/logo.png"

export default function Home() {
    return (
        <>
            <div className="main">
                <img className="logo" src={logo} alt="Logo"/>
                <div className="title">
                    ZapRecall
                </div>
                <div className="launch">
                    Iniciar Recall!
                </div>
            </div>
        </>
    )
}