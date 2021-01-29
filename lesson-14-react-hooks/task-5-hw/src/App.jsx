import React, { useEffect, useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [status, setState] = useState(true);


  const handleClick = () => {
    setState(!status);
  }

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      <div>
        {status && <Clock location="New York" offset={-5} />}
      </div>
      <div>
        {status && <Clock location="London" offset={0} />}
      </div>
      <div>
        {status && <Clock location="Kyiv" offset={2} />}
      </div>
    </div>
  );
}

export default App;