type SquareProps = {
  player: string  
  onClickProps: () => void
}

export default function Square({ player, onClickProps }: SquareProps) {
  return (
    <div
      className={`h-32 w-32 bg-blue-400 border border-white
                    `}
      onClick={() => console.log("Hello")}
    >
    </div>
  )
}
