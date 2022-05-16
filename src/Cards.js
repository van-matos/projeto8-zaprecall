import logo from "./images/logo.png"

export default function Cards() {
    const perguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4"]
    
    return (
        <>
            <div class="cards">
                <div class="header">
                    <img class="logoHeader" src={logo} alt="Logo"/>
                    <div class="titleHeader">ZapRecall</div>
                </div>
                <div class="content">
                    {perguntas.map(pergunta => <div class="pergunta">
                            {pergunta}
                            <ion-icon name="play-outline"></ion-icon>
                        </div>)
                    }
                </div>
                <div class="footer">
                    0/4 CONCLUÍDOS
                </div>
            </div>
        </>
    )
}