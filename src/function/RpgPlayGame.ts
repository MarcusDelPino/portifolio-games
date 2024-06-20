export const classeValue = (classeValues: string) => {
    switch (classeValues) {
        case "Knight":
            return { atk: 10, life: 20, mana: 4}
        case "Mage":
            return { atk: 2, life: 15, mana: 20}
        case "Archer":
            return { atk: 15, life: 20, mana: 2}
        case "Assassin":
            return { atk: 20, life: 10, mana: 4}
            default:
            break;
    }
}

const monsterAtk = () => {
    const random = Math.round(Math.random() * 29 + 1)
    console.log(random)
    return random
}

export const combateValue = (atk: number, classe:string) => {
    const monster = monsterAtk()
    if(atk > monster){
        console.log("Monstro morreu")
        console.log(atk - monster, "Dano excedente")
        return {classeLifeBase: classeValue(classe)?.life, monsterKill: true}
    }else{
        console.log("Você sofreu este dano", monster - atk)
        const dmg = (monster - atk) / 2
        return {dmg, monsterKill:false}
    }

}
