import logo from "./images/logo.png"

export default function Cards() {
    const flashcards = [
        {title: "Pergunta 1", question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"}, 
        {title: "Pergunta 2", question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"}, 
        {title: "Pergunta 3", question: "Componentes devem iniciar com __", answer: "letra maiúscula"}, 
        {title: "Pergunta 4", question: "Podemos colocar __ dentro do JSX", answer: "expressões"}, 
        {title: "Pergunta 5", question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"}, 
        {title: "Pergunta 6", question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"}, 
        {title: "Pergunta 7", question: "Usamos props para __", answer: "passar diferentes informações para componentes"}, 
        {title: "Pergunta 8", question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]

    return (
        <>
            <div className="cards">
                <div className="header">
                    <img className="logoHeader" src={logo} alt="Logo"/>
                    <div className="titleHeader">ZapRecall</div>
                </div>
                <div className="content">
                    {flashcards.map(flashcard => <div className="flashcard">
                            {flashcard.title}
                            <ion-icon name="play-outline"></ion-icon>
                        </div>)
                    }
                </div>
                <div className="footer">
                    0/{flashcards.length} CONCLUÍDOS
                </div>
            </div>
        </>
    )
}