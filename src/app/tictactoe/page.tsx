"use client"

import { useEffect, useState } from "react"
import Square from "@/components/TTT/SquareTTT"
import { winningConfimation } from "@/function/WinnerGame"
import Header from "@/components/TTT/HeaderTTT"

type Player = "X" | "O" | "draw" | null | string

export default function Page() {
  const [squares, setSquares] = useState<Array<string | null>>(
    Array(9).fill(null)
  )
  const [player, setPlayer] = useState<Player>(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  )

  const [winner, setWinner] = useState<boolean>()
  const [ position, setPosition] = useState<number[]>()

  useEffect(() => {
    const res = winningConfimation(squares)
    if (res) {
      const { winner, result, positions } = res
      setPosition(positions)
      setWinner(winner)
      if (result === "draw") {
        setPlayer(result)
      }
    }
  }, [squares, player])

  const markXO = (index: number) => {
    const newData = squares.map((val: any, ind: number) => {
      if (ind === index) {
        return player
      }
      return val
    })
    setSquares(newData)
    setPlayer(player === "X" ? "O" : "X")
    // console.log(squares[0])
  }

  const render = () => {
    return (
      <div className={`grid grid-cols-3 gap-1`}>
        {Array(9)
          .fill(null)
          .map((_, ind: number) => (
            <Square
              key={ind}
              onClickProps={() => markXO(ind)}
              player={squares[ind]}
              winner={winner}
              positions={position?.includes(ind)}
            />
          ))}
      </div>
    )
  }
  console.log(position)
  return (
    <div className={`flex flex-col justify-center items-center h-screen gap-3`}>
      <div>
        <Header player={player} winner={winner} />
      </div>
      {render()}
      <div className={`flex`}>
        <button
          className={`bg-purple-400  p-2 w-32 rounded-lg `}
          onClick={() => {
            setSquares(Array(9).fill(null))
            setPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O")
            setWinner(false)
            setPosition([])
          }}
        >
          <span className={`text-xl drop-shadow-lg`}>Reset</span>
        </button>
      </div>
    </div>
  )
}
