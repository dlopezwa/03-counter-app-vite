import { useState } from 'react';
import PropTypes from 'prop-types';

function CounterApp({valor}) {
console.log('render component CounterApp')
  const [ counter, setCounter] = useState( valor );


  const handleOnclick1 = () => {
    setCounter(counter+1);
  };
  const handleOnclick2 = () => {
    setCounter(counter-1);
  };
  const handleReset = () => {
    setCounter(valor);
  };

  return (
    <>
        <h1>Counter App</h1>
        <h2>{ counter }</h2>

        <button onClick={ handleOnclick1 }>+1</button>
        <button onClick={ handleOnclick2 }>-1</button>
        <button onClick={ handleReset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
    valor: PropTypes.number.isRequired,
};

export default CounterApp;

