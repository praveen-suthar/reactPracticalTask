import { useState } from 'react';
import styles from '../styles/Tab3.module.scss';

const Tab3 = () => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState([]);

  const handleRecursivePrint = (num, count = 1) => {
    if (count <= num) {
      setOutput((prevOutput) => [...prevOutput, `Hello Task ${count}`]);
      setTimeout(() => handleRecursivePrint(num, count + 1), 500); // Recursive call with a delay
    } else {
      setOutput((prevOutput) => [...prevOutput, 'STOP']); // Display stop text 
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setInputValue(value);
    if (value && value > 0) {
      setOutput([]); // Clear previous output data
      handleRecursivePrint(value);
    }
  };

  return (
    <div className={styles['tab3-container']}>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
        className={styles['input-field']}
      />
      <div className={styles['output-messages']}>
        {output.map((message, index) => (
          <p key={index} className={styles['output-message']}>{message}</p>
        ))}
      </div>
    </div>
  );
};

export default Tab3;
