// ============================================================================================
//                                        INSTRUCTIONS
// ============================================================================================
// Each square on the grid is allocated in a spiral pattern starting at a location marked 1 and then counting up while spiraling outward. For example, the first few squares are allocated like this:
//
// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...
//
// While this is very space-efficient (no squares are skipped), requested data must be carried back to square 1 (the location of the only access port for this memory system) by programs that can only move up, down, left, or right. They always take the shortest path: the Manhattan Distance between the location of the data and square 1.
//
// For example:
//
// Data from square 1 is carried 0 steps, since it's at the access port.
// Data from square 12 is carried 3 steps, such as: down, left, left.
// Data from square 23 is carried only 2 steps: up twice.
// Data from square 1024 must be carried 31 steps.
//
// How many steps are required to carry the data from the square identified in your puzzle input all the way to the access port?
//
// Puzzle input: 325489
// **********************************************************************************************



// ============================================================================================
//                                        LOGIC FOR CODE
// ============================================================================================
// - Create a variables, example: "steps" = 0, "counter" = 0, "BreackPoints" = [] .....
// - Load array "BreackPoints" with values [1, 9, 25, 49, ...]
// - Load array "Corner-Vales" with values from last "BreackPoint" 49 = [49, 43, 37, 31]
// - Identify "Corner-Value" that is greather or equal to "Given-Number".
// - Calculate "Midle-Value" of chosen "Corner-Value" range.
// - Calculate the proximyty "Given-Number" to "Midle-Value" of its "Corner-Value", and save it on "steps"
// - Add to steps 1 for each remaining "BreackPoints"
// - Return steps
// **********************************************************************************************



// ============================================================================================
//                                             CODE
// ============================================================================================
// Giving an input of 325489 the nesesary steps are: 552

const grid = (num) => {

  // Create a variables
  let steps = 0
  let counter = 0
  let middleValue = 0
  let breakPoints = []
  let cornerValues = []
  // -----------------------------------------------------------------------------------------

  // Load array "BreackPoints" with values, example: [1, 9, 25, 49, ...]
  do {
      breakPoints.push( (2 * counter +1)**2 )
      counter += 1
  }while (breakPoints[breakPoints.length -1] <= num)
  if(breakPoints[breakPoints.length -2] === num){ breakPoints.pop() }
  // -----------------------------------------------------------------------------------------


  // Load array "Corner-Vales" with values from last "BreackPoint" example: 49 = [49, 43, 37, 31]
  counter = breakPoints[breakPoints.length -1]
  for(let x = 0; x < 4; x++){
    cornerValues.push(counter)
    counter = counter - (Math.sqrt( breakPoints[breakPoints.length -1] ) - 1)
  }
  // -----------------------------------------------------------------------------------------


  // Identify "Corner-Value" that is greather or equal to "Given-Number".
  cornerValues.forEach((x) => {
    if(num <= x){ counter = x }
  })
  // -----------------------------------------------------------------------------------------


  // Calculate "Midle-Value" of chosen "Corner-Value" range.
  middleValue = counter - Math.floor( Math.sqrt( breakPoints[breakPoints.length -1] ) / 2 )
  // -----------------------------------------------------------------------------------------


  // Calculate the proximyty "Given-Number" to "Midle-Value" of its "Corner-Value", and save it on "steps"
  if(num < middleValue){ steps = middleValue - num }
  if(num > middleValue){ steps = num - middleValue }
  // -----------------------------------------------------------------------------------------


  // Add to steps 1 for each remaining "BreackPoints".
  steps += ( breakPoints.length -1 )
  // -----------------------------------------------------------------------------------------


  // Return steps
  return steps
}


// *************** Input & Calling the Function ***************
console.log( grid(325489) )
// **********************************************************************************************
