import Die from "./Die";
import {useState} from "react";
import {nanoid} from "nanoid";
import Confetti from "react-confetti";
import { useWindowSize } from 'react-use';

export default function App(){

    const [dice, setDice] = useState(()=> generateAllNewDice())

    const { width, height } = useWindowSize();



    //Check if all dice's isHeld is true and have the same value
    //store the boolean result in gameWon
    const gameWon = dice.every( diceObj => 
        dice[0].value===diceObj.value) 
        &&
        dice.every(diceObj => 
        diceObj.isHeld === true)
    
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

    /**
     * Challenge: Allow the user to play a new game when the
     * button is clicked
    */

    //dice = [1,2,3,4,5,6,1,2,3,4]  // Example array for testing
    //obj means each object in the array
    const diceElements = dice.map((dieObj) => <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} hold={()=> hold(dieObj.id)}    />)
    

    //Shuffle dice values that are not held
    //or dice whose isHeld is false
    function rollDice(){
      if(gameWon===true){
        setDice( generateAllNewDice() )
      }

      else {setDice( prev => prev.map( dieObj =>
            dieObj.isHeld ? 
            dieObj : {...dieObj, value: Math.floor(Math.random() * 6) + 1}

        )
    )}

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
        
        {gameWon && (<Confetti width={width} height={height}/>)}
        <div aria-live="polite" className="sr-only">
            {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
        </div>
        <h1 className="title">Tenzies</h1>

        <p className="instructions">
        Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>


        <div className="dice-container">
        {diceElements}
        </div>

        <button className="Roll_button" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>

        </main>

    )
}
