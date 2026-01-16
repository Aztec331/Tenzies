import Die from "./Die";
import {useState} from "react";
import {nanoid} from "nanoid";

export default function App(){

    /**
     * Critical thinking time!
     * 
     * We want to indicate to the user that the game is over
     * if (1) all the dice are held, and (2) all the dice have
     * the same value.
     * 
     * How might we do this? Some questions to consider:
     * 
     * 1. Do we need to save a `gameWon` value in state? If so, why?
     *    If not, why not?
     * 
     * 
     * 
     * 2. Do we need to create a side effect to synchronize the `gameWon`
     *    value (whether it's in state or not) with the current state of 
     *    the dice?
     * 
     * 
     * Conclusion:
     * 
     * 
     * 
     */

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

    const [dice, setDice] = useState(generateAllNewDice())

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
