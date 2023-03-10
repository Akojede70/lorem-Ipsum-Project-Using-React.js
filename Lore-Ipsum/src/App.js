import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  // text is the array, check the data file they also use text

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    // parseInt integer that is number, count set it to zero as declare in the variable.
    if (count <= 0) {
      amount = 1;
      // less than or equal to zero show one paragraph
    }
    if (count > 8) {
      amount = 8;
      // greater than 8 show 8 paragraph
    }
    setText(data.slice(0, amount));
    // slice will return a new copy of array and then we select item from start to the amount
  };
  return (
    <section className="section-center">
      {/* <h3>tired of boring lorem ipsum?</h3> */}
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          // this will get the value of the number
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
