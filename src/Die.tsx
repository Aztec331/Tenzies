type DieProps ={
    value: number,
    isHeld: boolean,
    hold: () => void
}

export default function Die(props: DieProps){

return(

    <button 
    className={`die ${props.isHeld ? "die-held" : ""}`}
    onClick={props.hold}
    aria-pressed={props.isHeld}
    aria-label={`Die with value ${props.value},
    ${props.isHeld ? "held" : "not held"}`}
    >{props.value}
    </button>

)
}