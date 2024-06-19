'use client'
import MiniGame from "@/components/RPG/Minigame"
import { useSearchParams } from "next/navigation"


export default function PlayPerson() {
  const params = useSearchParams()
  const render = () => {
    const personName = params.get('name')
    const personClass = params.get('class')

    if(personName && personClass){

      return <MiniGame name={personName} classe={personClass} />
    }

    return <div>Paramentros errados</div>
  }
  // console.log(params.get('class'))



  return (
  <div>
    {render()}
  </div>
  )
}

// ideia.
// const [character, setCharacter] = useState<Perso>(perso)

// const damage = (dmg: number) => {
//   const newLife = character.life - dmg
//   setCharacter((c) => {
//     return new Personagem(c.clas, c.name, newLife, c.straigth, c.mana)
//   })
// }
