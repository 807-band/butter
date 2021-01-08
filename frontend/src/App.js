import { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  fetch('/.netlify/functions/ping/')
  .then(res => res.json())
  .then(json => setMessage(json.text));

  return (
    <>
      <h1>Hi 807.band!</h1>
      <p>ping? {message}</p>
    </>
  );
};

export default App;
