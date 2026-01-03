// let p = [1, 2, 5, 6];
// let w = [2, 3, 4, 5];
// let capacity = 8;

// function knapsackSet(p, w, capacity) {
//   // Each state is encoded as "weight,value"
//   let states = new Set();
//   states.add("0,0");

//   for (let i = 0; i < p.length; i++) {
//     let newStates = new Set(states);

//     for (let state of states) {
//       let [currW, currV] = state.split(",").map(Number);

//       let nextW = currW + w[i];
//       let nextV = currV + p[i];

//       if (nextW <= capacity) {
//         newStates.add(`${nextW},${nextV}`);
//       }
//     }

//     states = newStates;
//   }

//   // Find max value within capacity
//   let maxValue = 0;
//   for (let state of states) {let p = [1, 2, 5, 6];
// let w = [2, 3, 4, 5];
// let capacity = 8;

// function knapsackSet(p, w, capacity) {
//   // Each state is encoded as "weight,value"
//   let states = new Set();
//   states.add("0,0");

//   for (let i = 0; i < p.length; i++) {
//     let newStates = new Set(states);

//     for (let state of states) {
//       let [currW, currV] = state.split(",").map(Number);

//       let nextW = currW + w[i];
//       let nextV = currV + p[i];

//       if (nextW <= capacity) {
//         newStates.add(`${nextW},${nextV}`);
//       }
//     }

//     states = newStates;
//   }

//   // Find max value within capacity
//   let maxValue = 0;
//   for (let state of states) {
//     let [_, value] = state.split(",").map(Number);
//     maxValue = Math.max(maxValue, value);
//   }

//   return maxValue;
// }

// // Run
// console.log(knapsackSet(p, w, capacity)); // 8

//     let [_, value] = state.split(",").map(Number);
//     maxValue = Math.max(maxValue, value);
//   }

//   return maxValue;
// }

// // Run
// console.log(knapsackSet(p, w, capacity)); // 8

let p = [1, 2, 5, 6];
let w = [2, 3, 4, 5];
let capacity = 8;

function knapsackSet(p, w, capacity) {
  // state format: "weight,value,items"
  // items = indices of chosen items
  let states = new Set();
  states.add("0,0,");

  for (let i = 0; i < p.length; i++) {
    let newStates = new Set(states);

    for (let state of states) {
      let [currW, currV, items] = state.split(",");
      currW = Number(currW);
      currV = Number(currV);

      let nextW = currW + w[i];
      let nextV = currV + p[i];

      if (nextW <= capacity) {
        let nextItems = items ? `${items}${i}` : `${i}`;
        newStates.add(`${nextW},${nextV},${nextItems}`);
      }
    }

    states = newStates;
  }

  // Find best state
  let bestValue = 0;
  let bestState = null;

  for (let state of states) {
    let [, value] = state.split(",");
    value = Number(value);

    if (value > bestValue) {
      bestValue = value;
      bestState = state;
    }
  }

  // Decode best state
  let [bestW, bestV, bestItems] = bestState.split(",");
  let chosenItems = bestItems ? bestItems.split("").map(Number) : [];

  return {
    maxValue: bestV,
    totalWeight: bestW,
    chosenItems,
  };
}

// Run
let result = knapsackSet(p, w, capacity);
console.log(result);
