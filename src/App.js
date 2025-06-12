import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return <div className="App">Working with Telegram Web App</div>;
}

export default App;
