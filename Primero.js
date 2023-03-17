export const Primero = (number) => {
  if (typeof number !== 'number') throw new Error('paramater provided must be a number')
  if (Number.isNaN(number)) throw new Error('paramater provided must be a number')

  const multiplies = { 2: 'Juan', 3: 'Estrada', 11: 'Arias' }
  let output = ''
  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })
  return output === '' ? number : output
}
