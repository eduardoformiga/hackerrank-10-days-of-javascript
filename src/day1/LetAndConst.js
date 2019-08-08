function main() {
  const PI = Math.PI
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const radius = readLine()

  // Print the area of the circle:
  const area = PI * Math.pow(radius, 2)
  console.log(area)
  // Print the perimeter of the circle:
  const perimeter = 2 * PI * radius
  console.log(perimeter)
  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0
    // Attempt to print the value of PI
    console.log(PI)
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.")
  }
}
