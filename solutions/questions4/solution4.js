function solution(players, callings) {
  const map = new Map();
  players.forEach((ele, index) => map.set(ele, index));

  const result = callings.reduce((acc, cur) => {
    const playerIndex = acc.get(cur);
    const nextPlayerName = players[playerIndex - 1];

    acc.set(cur, playerIndex - 1);
    acc.set(nextPlayerName, playerIndex);

    players[playerIndex - 1] = cur;
    players[playerIndex] = nextPlayerName;

    return acc;
  }, map);

  return [...result.entries()].sort((a, b) => a[1] - b[1]).map((ele) => ele[0]);
}
