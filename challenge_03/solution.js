const fs = require('fs')
const colors = JSON.parse(fs.readFileSync('./colors.txt', 'utf-8'))

const getSolution = () => {
  let maxZebra = 1
  let currentZebra = 1
  let lastColor = colors[0]

  colors.map((_, index) => {
    if (colors[index] === colors[index + 1]) return currentZebra = 1

    if (colors[index + 1] !== colors[index - 1]) return currentZebra = 2

    currentZebra++

    if (currentZebra >= maxZebra) {
      maxZebra = currentZebra
      lastColor = colors[index - 1]
    }
  })

  return `${maxZebra}@${lastColor}`
}

console.log(getSolution())