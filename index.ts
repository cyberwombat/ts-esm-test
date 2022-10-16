import Ajv from "ajv"

export const getClient = (): Ajv => { 
  
  return  new Ajv() 
}