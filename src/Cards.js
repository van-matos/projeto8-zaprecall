import logo from "./images/logo.png"

export default function Cards() {
    return (
        <>
            <div class="cards">
                <div class="header">
                    <img class="logoHeader" src={logo} alt="Logo"/>
                    <div class="titleHeader">ZapRecall</div>
                </div>
                <div class="content">
                    <div class="pergunta">
                        Pergunta 1
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div class="pergunta">
                        Pergunta 2
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div class="pergunta">
                        Pergunta 3
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div class="pergunta">
                        Pergunta 4
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
                <div class="footer">
                    0/4 CONCLUÍDOS
                </div>
            </div>
        </>
    )
}