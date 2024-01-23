import Fila from "./Fila"

const Tablero = (props) => {
    return <div>
        <Fila casillas={ props.listaCasillas[0] }/>
        <Fila casillas={ props.listaCasillas[1] }/>
    </div>
}

export default Tablero