type DieProps ={
    value: number,
    isHeld: boolean
}

export default function Die(props: DieProps){

return(

    <div className={`die ${props.isHeld ? "die-held" : ""}`} >{props.value} {props.isHeld}</div>

)
}