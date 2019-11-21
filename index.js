function cellCompete(states, days) {
  while (days) {
    const newStates = [];

    for (let x = 0; x < states.length; x++) {
      let leftCellState;
      let rightCellState;

      if (x === 0) {
        leftCellState = 0;
        rightCellState = states[x + 1];
      } else if (x === states.length - 1) {
        leftCellState = states[x - 1];
        rightCellState = 0;
      } else {
        leftCellState = states[x - 1];
        rightCellState = states[x + 1];
      }

      if (leftCellState === rightCellState) {
        newStates.push(0);
      } else {
        newStates.push(1);
      }
    }

    days--;
    states = [...newStates];
  }

  return states;
}

// Testcase 1:

console.log(cellCompete([1, 0, 0, 0, 0, 1, 0, 0], 1)) // [0, 1, 0, 0, 1, 0, 1, 0]

// Testcase 2:

console.log(cellCompete([1, 1, 1, 0, 1, 1, 1, 1], 2)) // [0, 0, 0, 0, 0, 1, 1, 0]
