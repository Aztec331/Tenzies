import Die from "./Die";
import {useState} from "react";

export default function App(){


    /**
     * Challenge: Update the array of numbers in state to be
     * an array of objects instead. Each object should look like:
     * { value: <random number>, isHeld: false }
     * 
     * Making this change will break parts of our code, so make
     * sure to update things so we're back to a working state
     */

    type DiceSetType = {
        value: number,
        isHeld: boolean
    } 


    //Generates an array of 10 random dice values
    function generateAllNewDice(){
        const diceSet = []

        for(let i = 0; i < 10; i++){
        diceSet.push({value: Math.floor(Math.random() * 6) + 1, 
            isHeld: false})
        }

        return diceSet
    }

    const [dice, setDice] = useState(generateAllNewDice())

    //dice = [1,2,3,4,5,6,1,2,3,4]  // Example array for testing

    const diceElements = dice.map((num) => <Die value={num} />)
    
    //to shuffle all the dice
    function shuffle(){
        setDice(generateAllNewDice())
    }


    return(

        

        <main>

        <div className="container">
        {diceElements}
        </div>

        <button className="Roll_button" onClick={shuffle}>Roll</button>

        
        </main>

       
    )
}
