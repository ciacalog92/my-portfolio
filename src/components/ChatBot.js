import React, { useState } from 'react';
import axios from 'axios';
import './ChatBot.css'; // Importa il file CSS

function ChatBot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [chatOpen, setChatOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await axios.post('/.netlify/functions/openai', { input }); // Chiamata alla funzione serverless
      setResponse(result.data.text);
    } catch (error) {
      console.error('Errore durante la chiamata API:', error);
      setError('Errore durante la chiamata API. Riprova.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-icon" onClick={() => setChatOpen(!chatOpen)}>
        <span role="img" aria-label="chat">💬</span>
      </div>

      <div className={`chatbot-chat ${chatOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h2>Chat con GPT</h2>
        </div>
        <div className="chatbot-body">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Chiedimi qualcosa..."
            />
            <button type="submit">Invia</button>
          </form>
          {loading && <p>Sto pensando...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {response && (
            <div>
              <h3>Risposta:</h3>
              <p>{response}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
