import { useState } from 'react'
import './App.css'


function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItems = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };
  
  return (
    <div className='list-manager'>
      <div>
      <h1>Dynamic List Manager</h1>
      </div>
      
      
      <div>
    <div className='input-secxtion'>

    <input type='text' className='input-cont' 
        value={inputValue}
        placeholder='Enter an item'
        onChange={(e) => setInputValue (e.target.value)}
        />
    
        <button onClick={handleAddItems}>
          Add Item
        </button>

    </div>
       
        <div className='items-map'>
          <ul>
            {items.map((item, index) =>(
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
    </div>
    </div>
  );
}

export default App
