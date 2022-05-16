import logo from "./images/logo.png"

export default function Home() {
    return (
        <>
            <div class="main">
                <img class="logo" src={logo} alt="Logo"/>
                <div class="title">
                    ZapRecall
                </div>
                <div class="launch">
                    Iniciar Recall!
                </div>
            </div>
        </>
    )
}