export  class Personagem {
  #name: string
  #clas: string
  #life: number
  #mana: number
  #atk: number
  #level: number
  // exp: number,
  // gold: number,
  // weapon: string
  // armor: string,
  // spell: string,
  // skill: Array<string>,
  // inventory: Array<string>

  constructor(
    name: string,
    clas: string,
    life = 1,
    mana = 1,
    atk = 1,
    level = 0 
  ) {
    this.#name = name
    this.#clas = clas
    this.#life = life
    this.#mana = mana
    this.#atk = atk
    this.#level = level
  }
  get clas() {
    return this.#clas
  }
  get name() {
    return this.#name
  }
  get life() {
    return this.#life
  }
  get atk() {
    return this.#atk
  }
  get mana() {
    return this.#mana
  }
  get level() {
    return this.#level
  }

  set life(value: number) {
    this.#life = value
  }

  set atk(value: number){
    this.#atk = value
  }

  set mana(value: number){
    this.#mana = value
  }
  
  set level(value: number){
    this.#level = value
  }
}
