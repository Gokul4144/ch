import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Chat with AI</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Ask me anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />
      <br />
      <button onClick={handleSubmit}>Send</button>
      <div style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}
