import Casilla from "./Casilla"

const Fila = (props) => {
    return <div className="row">
        <Casilla data={ props.casillas[0] }/>
        <Casilla data={ props.casillas[1] }/>
        <Casilla data={ props.casillas[2] }/>
    </div>
}

export default Fila