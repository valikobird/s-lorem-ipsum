import { useState } from 'react';
import { nanoid } from 'nanoid';
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
      <form className='form' onSubmit={handleGenerate}>
        <h2>tired of boring lorem ipsum?</h2>
        <div className='formRow'>
          <label htmlFor='count'>paragraphs:</label>
          <input
            type='number'
            id='count'
            min={1}
            max={text.length}
            value={counter}
            onChange={(e) => setCounter(+e.target.value)}
          />
          <button type='submit' className='btn'>
            generate
          </button>
        </div>
      </form>
      <section className='resultContainer'>
        {textToShow.map((line) => {
          const id = nanoid();

          return (
            <p className='textLine' key={id}>
              {line}
            </p>
          );
        })}
      </section>
    </main>
  );
};

export default App;
