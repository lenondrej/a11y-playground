import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className="form" role="application">
      <h3>Form:</h3>
      <form>
        <label htmlFor="name">Name</label>
        <input id="name"></input>
        <label htmlFor="surname">Surname</label>
        <input id="surname"></input>
      </form>
    </div>
  );
}

export default Form;
