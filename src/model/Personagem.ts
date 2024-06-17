export default class Personagem {
  #life: number
  #straigth: number
  #mana: number
  #name: string
  #clas: string
  // level: number,
  // exp: number,
  // gold: number,
  // weapon: string
  // armor: string,
  // spell: string,
  // skill: Array<string>,
  // inventory: Array<string>

  constructor(
    clas: string,
    name: string,
    life = 1,
    straigth = 1,
    mana = 1
  ) {
    this.#clas = clas
    this.#name = name
    this.#life = life
    this.#straigth = straigth
    this.#mana = mana
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
  get straigth() {
    return this.#straigth
  }
  get mana() {
    return this.#mana
  }

  set life(value: number) {
    this.#life = value
  }
}
