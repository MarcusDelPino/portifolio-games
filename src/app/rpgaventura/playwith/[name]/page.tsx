'use client'
import Personagem from "@/model/Personagem"
import { useSearchParams } from "next/navigation"

type Perso = Personagem

export default function PlayPerson() {
  const params = useSearchParams()
  console.log(params.get('name'))



  return <div className={`flex flex-col`}>{params.get('class')}</div>
}

// ideia.
// const [character, setCharacter] = useState<Perso>(perso)

// const damage = (dmg: number) => {
//   const newLife = character.life - dmg
//   setCharacter((c) => {
//     return new Personagem(c.clas, c.name, newLife, c.straigth, c.mana)
//   })
// }
