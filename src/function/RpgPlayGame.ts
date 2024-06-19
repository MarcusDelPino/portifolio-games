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

