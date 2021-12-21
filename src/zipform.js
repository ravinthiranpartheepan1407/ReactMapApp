import React, { useState } from 'react';
import axios from 'axios';


const ZipForm = () => {
  const [state, setState] = useState({
    name: ''
  });

  const [result, setResult] = useState(null);

  const sendEmail = event => {
    event.preventDefault();
    axios
      .post('http://localhost:4000/send', { ...state })
      .then(response => {
        setResult(response.data);
        setState({
          name: ''
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      });
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <div>
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <form onSubmit={sendEmail}>

        <group controlId="name">
          <label>Zip Code</label>
          <input
            type="text"
            name="name"
            class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            value={state.name}
            placeholder="Enter ZipCode"
            onChange={onInputChange}
          />
        </group>

        <button class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none" variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ZipForm;
