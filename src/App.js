import './index.css';
import { useState } from 'react';

function App() {
  const validator = require('validator')
  const [message, setMessage] = useState("")
  const validate = (value) => {
    if (validator.isStrongPassword(value, {minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setMessage('Is Strong Password')
    } else {
      setMessage('Is Not Strong Password')
    }
  }
  

  return (
    <div className="App">
      <h2>Checking Password Strength in ReactJS</h2>
      Enter Password: 
      <input className="input"
      type='text'
      placeholder='Enter Password'
      onChange={(e) =>
        validate(e.target.value)
      }/><br />
      {!message ? null : 
      <span style={{fontWeight: 'bold', color: 'red'}}>{message}</span>}
      <br />
      <text>
        Minimum Requirements: length: 8, lowercase: 1,
        uppercase: 1, numbers: 1, symbols: 1
      </text>
    </div>
  );
}

export default App;
