export const winningConfimation = (list: Array<string | null>) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (list[a] && list[a] === list[b] && list[a] === list[c]) {
      console.log("Ganhou")
      return { winner: true, positions: [a, b, c] }
    }
  }
  if (!list.some((cell) => cell === null)) {
    console.log("Empatou")
    return { winner: true, result: "draw" }
  }
}
//   const comboWin = [
//     [list[0], list[1], list[2]],
//     [list[3], list[4], list[5]],
//     [list[6], list[7], list[8]],
//     [list[0], list[3], list[6]],
//     [list[1], list[4], list[7]],
//     [list[2], list[5], list[8]],
//     [list[0], list[4], list[8]],
//     [list[2], list[4], list[6]],
//   ]

//   for (const combo of comboWin) {
//       if (
//           combo.every((cell) => cell === "X") ||
//           combo.every((cell) => cell === "O")
//           ) {
//         console.log(combo)
//       console.log("Ganhou")
//       return true
//     } else if (!list.some((cell) => cell === null)) {
//         console.log("Empatou")
//         return true
//       }
//   }
// }
