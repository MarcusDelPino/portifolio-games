import Image from "next/image"
import { Press_Start_2P } from "next/font/google"
import { Personagem } from "@/model/Personagem"
import { classeValue, combateValue } from "@/function/RpgPlayGame"
import { useState } from "react"

const press = Press_Start_2P({ subsets: ["latin"], weight: ["400"] })

type MiniGameProps = {
  name: string
  classe: string
}

export default function MiniGame({ name, classe }: MiniGameProps) {
  const [ level, setLevel ] = useState<number>(0)
  const { life, mana, atk } = classeValue( classe ) as any
  const [personagem, setPersonagem] = useState<Personagem>(
    new Personagem(name, classe, life, mana, atk)
  )

 

  const atkBtn = () => {
    const PROVISORIO = combateValue(atk, classe)
    
  }

  return (
    <div
      className={`flex justify-center items-center w-full h-screen  ${press.className}`}
    >
      <div className={`flex bg-red-800 w-[90%]  md:w-3/4 h-3/4 rounded-xl `}>
        <div
          className={`flex flex-col p-5 gap-5 w-1/4 items-center justify-around text-[#6819b2]`}
        >
          <div className={`text-white`}>{personagem.clas}</div>
          <div
            className={`flex bg-yellow-200 w-24 h-20 rounded-full border-2 shadow-xl shadow-black/40 items-center justify-around cursor-pointer border-white `}
            onClick={atkBtn}
          >
            ATK
          </div>
          <div
            className={`flex bg-yellow-200 w-24 h-20 rounded-full border-2 shadow-xl shadow-black/40 items-center justify-around cursor-pointer border-white `}
          >
            MAGIC
          </div>
          <div
            className={`flex bg-yellow-200 w-24 h-20 rounded-full border-2 shadow-xl shadow-black/40 items-center justify-around cursor-pointer border-white `}
          >
            LIFE
          </div>
          <div
            className={`flex bg-yellow-200 w-24 h-20 rounded-full border-2 shadow-xl shadow-black/40 items-center justify-around cursor-pointer border-white `}
          >
            MANA
          </div>
        </div>
        <div
          className={`flex flex-col gap-2 p-5 w-full h-full justify-center items-center`}
        >
          <div>{personagem.name}</div>
          <div
            className={`flex flex-col bg-white w-[95%] h-[90%] items-end rounded-xl shadow-2xl overflow-hidden`}
          >
            <div className={`flex h-full w-full items-end justify-center `}>
              <Image
                src={`/personagem.svg`}
                alt={`personagem`}
                width={200}
                height={200}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-contain w-auto h-auto'
              />
            </div>
            <div
              className={`flex items-center justify-around bg-blue-700 w-full h-10 `}
            >
              <div>
                <h1>atk: {personagem.atk}</h1>
              </div>
              <div>
                <h1>life: {personagem.life}</h1>
              </div>
              <div>
                <h1>mana: {personagem.mana}</h1>
              </div>
              <div>
                <h1>Level: {personagem.level}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
