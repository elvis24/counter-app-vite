import PropTypes from 'prop-types';

const getDato = () => {
    return 'Chupapi XD'
}


export const FirstApp = ({titulo}, CounterApp) =>{
    return(
   <>
        <h1>Counter app</h1>
        <p>{titulo}</p>
    </>
    );
}

FirstApp.PropTypes = {
    titulo: PropTypes.string.isRequired
}