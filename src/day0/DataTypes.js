function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4

  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0

  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = 'HackerRank '

  // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
  const sumOfIntegers = firstInteger + Number(secondInteger)
  console.log(sumOfIntegers)

  // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
  const sumOfDecimals = firstDecimal + Number(secondDecimal)
  console.log(sumOfDecimals)

  // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
  const stringsConcat = firstString + secondString
  console.log(stringsConcat)
}
