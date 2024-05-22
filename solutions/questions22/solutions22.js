function solution(triangle) {
  const memo = [];

  const dfs = (row, col) => {
    if (row === triangle.length - 1) {
      return triangle[row][col];
    }

    if (memo[row] && memo[row][col]) {
      return memo[row][col];
    }

    const maxBelow = Math.max(dfs(row + 1, col), dfs(row + 1, col + 1));
    const result = triangle[row][col] + maxBelow;

    memo[row] = memo[row] || [];
    memo[row][col] = result;

    return result;
  };
  return dfs(0, 0);
}
