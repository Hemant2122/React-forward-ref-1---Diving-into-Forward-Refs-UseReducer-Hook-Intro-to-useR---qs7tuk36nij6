import React, { useRef, useState } from 'react';
import InputField from '../pages/components/InputField';

function Home() {
  const newRef = useRef("");
  const [values, setValues] = useState('');

  const focusInput = () => {
    newRef.current.focus();
  };
  const settingValue = () => {
    document.getElementById('textarea').value = values;
    
  };

  return (
    <div>
    <InputField  ref={newRef}  type="text" setValues={setValues}/>
    <br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea"></textarea>

    </div>
  );
}

export default Home;
