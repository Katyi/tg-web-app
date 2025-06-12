import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return <div className="App">Working with Telegram Web App</div>;
}

export default App;
