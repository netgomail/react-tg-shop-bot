import React, { useEffect } from 'react';
import './App.css';

// @ts-ignore
const tg = window.Telegram.WebApp;
function App() {
    useEffect(()=> {
        tg.ready();
    },[])
    const onClose = () => {
        tg.close();
    }
    return (
        <div className="App">
            Work
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
}

export default App;
