function solution(targets) {
  let result = 0;

  targets
    .sort((a, b) => b[0] - a[0])
    .reduce((acc, cur) => {
      acc === null ? (acc = cur[0]) : acc;
      const [min, max] = cur;

      if (acc >= max) {
        result++;
        acc = min;
      }

      return acc;
    }, null);

  return result + 1;
}
