import Die from "./Die";
import {useState} from "react";
import {nanoid} from "nanoid";

export default function App(){

    const [dice, setDice] = useState(generateAllNewDice())

    /**
     * Challenge:
     * Log "Game won!" to the console only if the 2 winning
     * conditions are met.
     * 
     * 1. all the dice are being held, and
     * 2. all the dice have the same value
     * 
     * For now, no need to even save a variable!
     */

    //first condition: all dice have same value as first die
    //second condition: all dice are held (isHeld = true)
    if( dice.every( diceObj => 
        dice[0].value===diceObj.value) 
        &&
        dice.every(diceObj => 
        diceObj.isHeld === true))
    {
        console.log("Game won!")
    }


    type DiceSetType = {
        value: number,
        isHeld: boolean,
        id: string
    } 

    //Generates an array of 10 random dice values
    function generateAllNewDice(): DiceSetType[]{
        const diceSet: DiceSetType[] = []

    for(let i = 0; i < 10; i++){
    diceSet.push({value: Math.floor(Math.random() * 6) + 1, 
        isHeld: false, id: nanoid()})
    }

        return diceSet
    }

    //dice = [1,2,3,4,5,6,1,2,3,4]  // Example array for testing
    //obj means each object in the array
    const diceElements = dice.map((dieObj) => <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} hold={()=> hold(dieObj.id)}    />)
    

    //Shuffle dice values that are not held
    //or dice whose isHeld is false
    function rollDice(){
        setDice( prev => prev.map( dieObj =>
            dieObj.isHeld ? 
            dieObj : {...dieObj, value: Math.floor(Math.random() * 6) + 1}

        )
    )
}

    //flips the isHeld property of the die that was clicked
    //by matching the id
    function hold(id: string){

        setDice( prev => prev.map( dieObj => 
            dieObj.id === id ?
            {...dieObj, isHeld: !dieObj.isHeld} : dieObj
        )
    )

}





    return(

        <main>

        <h1 className="title">Tenzies</h1>

        <p className="instructions">
        Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>



        <div className="dice-container">
        {diceElements}
        </div>

        <button className="Roll_button" onClick={rollDice}>Roll</button>

        </main>

    )
}
