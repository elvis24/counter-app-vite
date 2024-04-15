
import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({torre}) => {

    const [ counter, setCounter] = useState(torre)
  
  const handleAdd = ( ) =>{
    // console.log(event)
    setCounter(counter +1)
    // setCounter(counter -1)
  }
  
  const handDec = () =>{
    setCounter(counter -1)
  }

  const handIni = () =>{
    setCounter (torre);
  }

    return(
   <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>
    <button onClick={handleAdd}> +1 </button>
    <button onClick={handDec}> -1 </button>
    <button onClick={ handIni }> Reset </button>
    </>
    );
}


CounterApp.propTypes ={
     torre: PropTypes.number.isRequired
}