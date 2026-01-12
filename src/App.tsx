/**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `generateAllNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */


import Die from "./Die"

export default function App(){

    function generateAllNewDice(){
        const DiceSet = []

        for(let i = 0; i < 10; i++){
        DiceSet.push(Math.floor(Math.random() * 6) + 1)

        }
        
        return DiceSet
    }

    console.log(generateAllNewDice())


    return(

        

        <main>

        <div className="container">

         <Die value={1} />
         <Die value={2} />
         <Die value={3} />
         <Die value={4} />
         <Die value={5} />
         <Die value={1} />
         <Die value={1} />
         <Die value={1} />
         <Die value={1} />
         <Die value={1} />

        </div>

        
        </main>

       
    )
}
