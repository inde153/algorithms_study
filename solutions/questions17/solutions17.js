function solution(command) {
  const coordinate = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let dir = 0;

  return command.split('').reduce(
    (acc, cur) => {
      if (cur === 'R') {
        dir = (dir + 1) % 4;
      }
      if (cur === 'L') {
        dir = (dir + 3) % 4;
      }
      if (cur === 'G') {
        acc[0] += coordinate[dir][0];
        acc[1] += coordinate[dir][1];
      }
      if (cur === 'B') {
        acc[0] += coordinate[(dir + 2) % 4][0];
        acc[1] += coordinate[(dir + 2) % 4][1];
      }
      return acc;
    },
    [0, 0]
  );
}
