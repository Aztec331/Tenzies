import Die from "./Die";
import {useState} from "react";
import {nanoid} from "nanoid";

/**
* Challenge: Add conditional styling to the Die component
* so that if it's held (isHeld === true), its background color
* changes to a light green (#59E391)
* 
* Remember: currently the Die component has no way of knowing
* if it's "held" or not.
*/

export default function App(){

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
        isHeld: true, id: nanoid()})
    }

        return diceSet
    }

    const [dice, setDice] = useState(generateAllNewDice())


    //dice = [1,2,3,4,5,6,1,2,3,4]  // Example array for testing
    //obj means each object in the array
    const diceElements = dice.map((dieObj) => <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />)
    
    //to shuffle all the dice
    function rollDice(){
        setDice(generateAllNewDice())
    }

    return(

        <main>

        <div className="container">
        {diceElements}
        </div>

        <button className="Roll_button" onClick={rollDice}>Roll</button>

        </main>

    )
}
