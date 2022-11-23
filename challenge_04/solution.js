const MIN = 11098
const MAX = 98123
const PASSWORD_LENGTH = 5
const REPEATABLE_NUMBER = 5
const REPEATABLE_MIN_OCCURRENCES = 2


const getSolution = () => {
  let passwords = []

  for (let number = MIN; number < MAX; number++) {
    passwords.push(String(number))
  }

  passwords = passwords.filter((password) => {
    let occurrences = 0
    let validNumbers = 0

    const splittedPassword = password.split('')

    splittedPassword.forEach((number) => {
      if (number === REPEATABLE_NUMBER.toString()) occurrences++
    })

    if (occurrences >= REPEATABLE_MIN_OCCURRENCES) {
      for (let i = 0; i < splittedPassword.length; i++) {
        if (Number(splittedPassword[i + 1]) >= Number(splittedPassword[i])) validNumbers++
      }
    }

    return validNumbers === (PASSWORD_LENGTH - 1)
  })

  return `${passwords.length}-${passwords.at(55)}`
}

console.log(getSolution())