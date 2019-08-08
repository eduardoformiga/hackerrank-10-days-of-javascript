function getLetter(s) {
  let letter = s[0]
  // Write your code here

  return 'aeiou'.includes(letter)
    ? 'A'
    : 'bcdfg'.includes(letter)
    ? 'B'
    : 'hjklm'.includes(letter)
    ? 'C'
    : 'D'
}
