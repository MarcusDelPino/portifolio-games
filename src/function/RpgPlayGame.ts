
export const classeValue = (classeValues: string, level: number = 0) => {
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
    const lifeMonster = Math.round(Math.random() * 29 + 1)
    const dmgMonster = Math.round(Math.random() * 14 + 1)
    console.log(lifeMonster, dmgMonster)
    return { lifeMonster, dmgMonster}
}

export const combateValue = (atk: number, classe:string) => {
    let { lifeMonster, dmgMonster} = monsterAtk()
    
    if(lifeMonster > 0){
        
    }
    

}
