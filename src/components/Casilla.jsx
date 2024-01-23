const Casilla = (props) => {
    return <div className="col">
        <button className="btn btn-light" 
            type="button"
            dangerouslySetInnerHTML={
                props.data.mostrandoSimbolo === true ? {__html: props.data.simbolo} : {__html: "UL"}
            }>
        </button>
    </div>
}

export default Casilla