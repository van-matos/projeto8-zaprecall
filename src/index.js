import ReactDOM from 'react-dom';
import Home from './Home';
import Cards from './Cards';

import "./reset.css";
import "./style.css";

function App() {
    return (
        <> 
            <Home />
            <Cards />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'));