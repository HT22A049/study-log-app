import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

async function PostResponse(message) {
  const response = await fetch('http://localhost:3000/logs', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify({
      message: message,
    }),
  })
}

function App() {
  const [message, setMessage] = useState('');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const response = await fetch('http://localhost:3000/logs');
      const date = await response.json();
      setLogs(date);
      console.log(date);
    };

    fetchLogs();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <input type="text" name="text[]" className="text" onChange={(e) => 
            setMessage(e.target.value)}>
          </input> 
          <button type="button" onClick={() => 
            PostResponse(message)}> 送信
          </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        {logs.map((log) => (
          <p key={log.id}>{log.message}</p>
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
