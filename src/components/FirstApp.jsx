import PropTypes from 'prop-types';

const mensaje = 'Hola, soy Goku';
const arreglo = [1,2,3,4,5,6];

const objeto = {
    nombre: 'David',
    apellido: 'Lopez',
}

const parImpar = (numero)=>
    ((numero%2)===0)?`El numero ${numero} es par`:`El numero ${numero} es impar`;


export default function FirstApp( {titulo, subtitulo} ) {


  return (
    <>
    <h1>First App</h1>
    <p> {mensaje} </p>
    <p> {arreglo} </p>
    <code> {JSON.stringify(objeto)} </code>
    <h2>{parImpar(4)}</h2>
    <h3>{titulo}</h3>
    <h3>{subtitulo}</h3>
    </>
  )
}

FirstApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string,
};
