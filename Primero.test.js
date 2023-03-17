import { describe, expect, it } from 'vitest'
import { Primero } from '../Primero'

describe('Primero', ()  => {
  it('Should throw if not number is provided as parameter', () => {
    expect(() => Primero()).toThrow()
  })
  it('Should throw a specific error message if not number is provided as parameter', () => {
    expect(() => Primero()).toThrow('paramater provided must be a number')
  })
  it('Should throw a specific error message  if not number is provided', () => {
    expect(() => Primero(NaN)).toThrow('paramater provided must be a number')
  })
  it('should return 1 if number provided is 1', () => {
    expect(Primero(1)).toBe(1)
  })
  it('should return Juan if number provided is multiple of 2', () => {
    expect(Primero(4)).toBe('Juan')
    expect(Primero(8)).toBe('Juan')
    expect(Primero(10)).toBe('Juan')
  })
  it('should return Estrada if number provided is multiple of 3', () => {
    expect(Primero(9)).toBe('Estrada')
    expect(Primero(15)).toBe('Estrada')
    expect(Primero(21)).toBe('Estrada')
  }) 
  it('should return JuanEstrada if number provided is multiple of 6', () => {
    expect(Primero(6)).toBe('JuanEstrada')
    expect(Primero(12)).toBe('JuanEstrada')
    expect(Primero(18)).toBe('JuanEstrada')
  })
  it('should return 5 if number provided is 5', () => {
    expect(Primero(5)).toBe(5)
  })
  it('should return EstradaArias if number provided is multiple of 33', () => {
    expect(Primero(33)).toBe('EstradaArias')
    
    expect(Primero(99)).toBe('EstradaArias')
  })
  it('should return JuanArias if number provided is multiple of 22', () => {
    expect(Primero(22)).toBe('JuanArias')
    expect(Primero(44)).toBe('JuanArias')
  })
  it('should return JuanEstradaArias if number provided is multiple of 66', () => {
    expect(Primero(66)).toBe('JuanEstradaArias')
    expect(Primero(132)).toBe('JuanEstradaArias')
    expect(Primero(198)).toBe('JuanEstradaArias')
  })
})
