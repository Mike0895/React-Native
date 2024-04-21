import { useState } from 'react';

const App = () => {
  const [inputText, setInputText ] = useState('');
  const [inputChecked, setEstaMarcado ] = useState('');

    return (
      <div>
        <input type="text" onChange={e => setInputText(e.target.value)} />
        <input type="checkbox" onClick={e=> setEstaMarcado(e.target.checked)}/>
        <div>{ inputText }</div>
        <div>{ inputChecked }</div>
      </div>
    );
}

export default App;