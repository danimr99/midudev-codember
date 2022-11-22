const { encrypted } = require('./encrypted.js')

const A_LOWERCASE_ASCII_CODE = 97
const Z_LOWERCASE_ASCII_CODE = 122

const getSolution = () => {
  let message = ''
  let letter = ''

  const words = encrypted.split(" ")
  words.forEach((word) => {
    for(let i = 0; i < word.length; i++) {
      letter += word[i]

      const ascii = parseInt(letter)

      if (ascii >= A_LOWERCASE_ASCII_CODE && ascii <= Z_LOWERCASE_ASCII_CODE) {
        message += String.fromCharCode(ascii)
        letter = ''
      }
    }

    message += ' '
  })

  return message
}

console.log(getSolution())