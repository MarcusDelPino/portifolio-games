type SquareProps = {
  player?: any
  onClickProps: () => void
  winner: boolean | undefined
  positions: boolean | undefined
}

export default function Square({ player, winner, positions,  onClickProps }: SquareProps) {
 
  return !player === false || winner ? (
    <div
      className={`  h-32 w-32 ${
        player === "X"
          ? "bg-blue-300"
          : player === "O"
          ? "bg-red-400"
          : "bg-fuchsia-400"
      } ${positions && 'bg-green-500'} border border-white flex justify-center items-center text-9xl drop-shadow-lg cursor-pointer`}
    >
      {player}
    </div>
  ) : (
    <div
      className={`  h-32 w-32 ${
        player === "X"
          ? "bg-blue-300"
          : player === "O"
          ? "bg-red-400"
          : "bg-fuchsia-400"
      } border border-white flex justify-center drop-shadow-lg items-center text-9xl cursor-pointer`}
      onClick={onClickProps}
    >
      {player}
    </div>
  )
}
