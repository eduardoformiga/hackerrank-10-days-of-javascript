function vowelsAndConsonants(s) {
  const isVowel = letter => 'aeiou'.indexOf(letter) !== -1
  const isConsonant = letter => 'aeiou'.indexOf(letter) === -1

  let letters = s.split('')

  let vowels = letters.filter(isVowel)
  let consonants = letters.filter(isConsonant)

  const result = [...vowels, ...consonants]

  result.forEach(letter => console.log(letter))
}
