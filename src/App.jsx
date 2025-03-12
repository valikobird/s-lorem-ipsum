import { useState } from 'react';
import text from './data';

const App = () => {
  const [textLines, setTextLines] = useState(text);
  const [counter, setCounter] = useState(1);
  const [textToShow, setTextToShow] = useState([]);

  const handleGenerate = (e) => {
    e.preventDefault();

    const newText = textLines.slice(0, counter);
    setTextToShow(newText);
  };

  return (
    <main>
      <form className='form'>
        <h2>tired of boring lorem ipsum?</h2>
        <div className='formRow'>
          <label htmlFor='count'>Paragraphs:</label>
          <input
            type='number'
            id='count'
            min={1}
            max={text.length}
            value={counter}
            onChange={(e) => setCounter(+e.target.value)}
          />
          <button type='submit' className='btn' onClick={handleGenerate}>
            generate
          </button>
        </div>
      </form>
      <section className='resultContainer'>
        {textToShow.map((line, index) => {
          return (
            <p className='textLine' key={index}>
              {line}
            </p>
          );
        })}
      </section>
    </main>
  );
};

export default App;
