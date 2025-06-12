import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <h1>Telegram Web App</h1>
    </div>
  );
}

export default App;
