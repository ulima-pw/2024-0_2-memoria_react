import { useState } from "react"
import Tablero from "./components/Tablero"

const simbolosDisponibles = ["&#128151;", "&#128525;", "&#128516;"]

const MemoriaPage = () => {
    const [listaCasillas, setListaCasillas] = useState([])

    /*
    listaCasillas = [
        [C1, C2, C3],
        [C4, C5, C6]
    ]
    */

    // logica de creacion de casillas
    for (let i =0 ; i < 2; i++) {
        const fila = []
        for (let j = 0; j < 3; j++ ) {
            fila.push({
                simbolo : simbolosDisponibles[j],
                mostrandoSimbolo : true
            })
        }
        listaCasillas.push(fila)
    }


    return <div>
        <h1>Juego de Memoria</h1>
        <Tablero rows={2} cols={3} listaCasillas={ listaCasillas }/>
    </div>
}

export default MemoriaPage