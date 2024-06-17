"use client"
import Personagem from "@/model/Personagem"
import { Exo_2 } from "next/font/google"
import Link from "next/link"
import { useState } from "react"

const exo_2 = Exo_2({ subsets: ["latin"], weight: ["800", "300"] })

type Persona = Personagem

export default function Page() {
  const [nameCharacter, setNameCharacter] = useState<string>("Just a Player")
  const [checkClass, setCheckClass] = useState<string>("Anonimous no-Class")
  const [bol, setBol] = useState<boolean>(true)

  return (
    <div
      className={`flex flex-col justify-center items-center w-full h-screen bg-[#6819b2] `}
    >
      <div
        className={` text-center  bg-[#ab5cf5] w-2/5 p-10  shadow-xl shadow-black/30 rounded-lg text-6xl font-extrabold ${exo_2.className}`}
      >
        <h1 className={`mb-6`}>RPG Monster kill</h1>
        <div className={`font-light text-xl`}>
          <label htmlFor=''>
            <input
              type='text'
              name='Nome do Personagem'
              id='Nome do Personagem'
              placeholder='Digite o nome do personagem'
              onChange={(e) => setNameCharacter(e.target.value)}
              className={`w-full h-10 placeholder:text-center outline-none shadow-md shadow-black/40 mb-6 text-black rounded-xl text-center`}
            />
          </label>
          <div className={` flex justify-around items-center mb-6 gap-10 `}>
            <label htmlFor='Knight' className={` flex items-center gap-2`}>
              <input
                type='radio'
                value={`Knight`}
                checked={checkClass === "Knight"}
                onChange={(e) => setCheckClass(e.target.value)}
                className={`cursor-pointer w-10 h-10  appearance-none border border-white checked:border-none rounded-full checked:bg-[#6e79ff]`}
              />
              : Knight
            </label>
            <label htmlFor='Mage' className={` flex items-center gap-2`}>
              <input
                type='radio'
                value={`Mage`}
                checked={checkClass === "Mage"}
                onChange={(e) => setCheckClass(e.target.value)}
                className={`cursor-pointer w-10 h-10 appearance-none border border-white checked:border-none rounded-full checked:bg-[#6819b2]`}
              />
              : Mage
            </label>
            <label htmlFor='Archer' className={` flex items-center gap-2`}>
              <input
                type='radio'
                value={`Archer`}
                checked={checkClass === "Archer"}
                onChange={(e) => setCheckClass(e.target.value)}
                className={`cursor-pointer w-10 h-10 appearance-none border border-white checked:border-none rounded-full checked:bg-[#ffd86b]`}
              />
              : Archer
            </label>
            <label htmlFor='Assassin' className={` flex items-center gap-2`}>
              <input
                type='radio'
                value={`Assassin`}
                checked={checkClass === "Assassin"}
                onChange={(e) => setCheckClass(e.target.value)}
                className={`cursor-pointer w-10 h-10 appearance-none border border-white checked:border-none rounded-full checked:bg-[#000000]`}
              />
              : Assassin
            </label>
          </div>
          <div>
            <Link
              href={{
                pathname: `rpgaventura/playwith/${nameCharacter}`,
                query: { name: nameCharacter, class: checkClass },
              }}
            >
              <button
                className={`bg-[#4ab520] p-3 w-32 font-semibold shadow-xl shadow-black/30 rounded-lg`}
                onClick={() => setBol(!bol)}
              >
                START
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
