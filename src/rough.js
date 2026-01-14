type Die = {
    value: number;
    isHeld: boolean;
};

function generateAllNewDice(): Die[] {
    const diceSet: Die[] = [];

    for (let i = 0; i < 10; i++) {
        diceSet.push({
            value: Math.floor(Math.random() * 6) + 1,
            isHeld: false
        });
    }

    return diceSet;
}
