type DieProps ={
    value: number,
}

export default function Die(props: DieProps){


return(
    <>
    
    <div className="die">{props.value}</div>

    </>
)
}