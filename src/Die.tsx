type DieProps ={
    value: number,
    isHeld: boolean,
    hold: () => void
}

export default function Die(props: DieProps){

return(

    <div className={`die ${props.isHeld ? "die-held" : ""}`} onClick={props.hold}>
    {props.value} {props.isHeld}</div>

)
}