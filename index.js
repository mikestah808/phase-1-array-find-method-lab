function superbowlWin(record) {
  const result = record.find(record => record.result === "W")
  return (result ? result.year : undefined);
}


// if (result.year === "W") {
//   return true
// } else {
//   return undefined
// }