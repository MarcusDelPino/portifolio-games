"use client"
type Player = "X" | "O" | null

import Square from "@/components/Square"
import { useState } from "react"

export default function Page() {
  const [squares, setSquares] = useState<Array<number | null>>(
    Array(9).fill(null)
  )
  const [player, setPlayer ]= useState<Player>(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  )

  const markXO = (index) => {
    squares.map((val, ind) => {
      if(ind === index){

      }
    })
  }


  return (
    <div className={`flex justify-center items-center h-screen`}>
      <div
        className={`grid grid-cols-3 gap-2
`}
      >
        {Array(9)
          .fill(null)
          .map((_, ind: number) => (
            <Square key={ind} onClickProps={() => markXO(ind)} />
          ))}
      </div>
    </div>
  )
}
