import { describe,expect,it } from "vitest";
import { Segundo } from "../Segundo";

describe('Segundo', () =>{
   
    it('should return a boolean',()=>{
        expect(Segundo('a','b')).toBeTypeOf('boolean')
    })
    it('should return a false if strings provided have different length',()=>{
        expect(Segundo('abb','ab')).toBe(false)
    })
    it('should return false if strings provided have different length even with unique letters',()=>{
        expect(Segundo('abc','de')).toBe(false)
    })
    it('should return false if strings provided have different number of unique letters',()=>{
        expect(Segundo('abc','ccc')).toBe(false)
    })
   
})
