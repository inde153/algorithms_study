function longestSlideDown(pyramid) {
  const memo = [];

  function maxSlide(row, col) {
    if (row === pyramid.length - 1) {
      return pyramid[row][col];
    }

    if (memo[row] && memo[row][col] !== undefined) {
      return memo[row][col];
    }

    const maxBelow = Math.max(maxSlide(row + 1, col), maxSlide(row + 1, col + 1));
    const result = pyramid[row][col] + maxBelow;

    memo[row] = memo[row] || [];
    memo[row][col] = result;

    return result;
  }

  return maxSlide(0, 0);
}
