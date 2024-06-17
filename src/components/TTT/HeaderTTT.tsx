type HeaderProps = {
    player: "X" | "O" | null | string
    winner: boolean | undefined
}

export default function Header({player, winner}:HeaderProps) {
    return (
        <div className={`flex justify-center items-center flex-col`}>
            <h1 className=" text-5xl">TIC TAC TOE</h1>
           <div className={` bg-white w-[390px] h-14 rounded-lg flex items-center  justify-start`}>
            <div className={`flex bg-blue-400 w-[195px] h-12 rounded-lg ml-1 mr-1 justify-center items-center 
                transition-all duration-300 ${player === "X" ? '' : 'translate-x-[187px]' }`}>
                {winner ? (
                    <span className={`flex font-bold`}>{player === "X" || player === "O" ?   `Congrats - ${player === "X" ? "O" : "X"} - Winner` : "Draw - No Winner"}</span>
                ) : (
                    <span className={`flex font-bold`}>{player === "X" ?   "X Turn" : "O Turn"}</span>
                )}
            </div>
           </div>
        </div>
    );
}