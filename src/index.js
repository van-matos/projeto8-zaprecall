import ReactDOM from 'react-dom';
import "./reset.css";
import "./style.css";

import logo from "./images/logo.png"

function Home() {
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

ReactDOM.render(<Home />, document.querySelector('.root'));