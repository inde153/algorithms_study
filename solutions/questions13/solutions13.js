function solution(board, moves) {
  const bucket = [];
  return moves.reduce((acc, cur) => {
    const doll = dfs(cur - 1, 0, board);
    if (doll === bucket[bucket.length - 1]) {
      bucket.pop();
      return (acc += 2);
    }
    if (doll) {
      bucket.push(doll);
    }
    return acc;
  }, 0);
}

function dfs(cur, i, board) {
  if (i >= board.length - 1 || board[i][cur] > 0) {
    const doll = board[i][cur];
    board[i][cur] = 0;
    return doll;
  }

  return dfs(cur, i + 1, board);
}
