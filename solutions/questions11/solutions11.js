function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const queue = [];
  let lever = [],
    end = [];
  for (let i = 0; i < maps.length; i++) {
    const startLever = maps[i].indexOf('S');
    const leverEnd = maps[i].indexOf('L');

    startLever !== -1 ? (lever = bfs([[i, startLever, 0]], 'L')) : null;
    leverEnd !== -1 ? (end = bfs([[i, leverEnd, 0]], 'E')) : null;
  }

  if (lever === -1 || end === -1) {
    return -1;
  }
  return lever + end;

  function bfs(queue, target) {
    const visited = Array(n)
      .fill()
      .map(() => Array(m).fill(false));

    while (queue.length) {
      if (maps[queue[0][0]][queue[0][1]] === target) {
        return queue[0][2];
      }

      const [x, y, cnt] = queue.shift();
      if (visited[x][y]) {
        continue;
      }
      visited[x][y] = true;

      for (let i = 0; i < dir.length; i++) {
        const ny = y + dir[i][0];
        const nx = x + dir[i][1];

        const isValid = ny >= 0 && nx >= 0 && nx < n && ny < m && maps[nx][ny] !== 'X';

        if (!isValid || visited[nx][ny]) {
          continue;
        }

        queue.push([nx, ny, cnt + 1]);
      }
    }
    return -1;
  }
}
