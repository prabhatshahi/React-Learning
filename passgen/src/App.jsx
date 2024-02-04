import React, { useState, useCallback, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+=[]~`';

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyToClipboard = () => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-400'>
      <label>
        Password Length:
        <input
          type='number'
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </label>
      <br />
      <label>
        Include Numbers:
        <input
          type='checkbox'
          checked={numAllowed}
          onChange={() => setNumAllowed(!numAllowed)}
        />
      </label>
      <br />
      <label>
        Include Special Characters:
        <input
          type='checkbox'
          checked={charAllowed}
          onChange={() => setCharAllowed(!charAllowed)}
        />
      </label>
      <br />
      <button onClick={passwordGenerator}>Generate Password</button>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
      <br />
      <div>
        <strong>Generated Password:</strong>{' '}
        <input
          type='text'
          value={password}
          ref={passwordRef}
          readOnly
        />
      </div>
    </div>
  );
}

export default App;
