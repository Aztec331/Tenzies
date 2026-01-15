import Die from "./Die";
import {useState} from "react";
import {nanoid} from "nanoid";

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
    const diceElements = dice.map((dieObj) => <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} hold={()=> hold(dieObj.id)}    />)
    
    //to shuffle all the dice
    function rollDice(){
        setDice(generateAllNewDice())
    }

    function hold(id: string){
        console.log(id)
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
