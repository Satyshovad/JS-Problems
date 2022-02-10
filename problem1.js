//Problem 1
function colorPatternTimes(cols) {
    let switchCount = 0;
    let colorTotal = cols.length * 2;

    let comparePencil = cols[0];

    for (let i = 1; i < cols.length; i++){
        if (comparePencil === cols[i]) {
            comparePencil = cols[i];
        } else {
            switchCount++;
            comparePencil = cols[i];
        }
    }

    console.log(switchCount + colorTotal)
    return switchCount + colorTotal
}

colorPatternTimes(["Blue"])
colorPatternTimes(["Red", "Yellow", "Green", "Blue"])
colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])
