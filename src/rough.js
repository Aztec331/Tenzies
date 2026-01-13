const diceSet = []

        for(let i = 0; i < 10; i++){
        diceSet.push({value: Math.floor(Math.random() * 6) + 1, 
            isHeld: false})
        }

console.log(diceSet)