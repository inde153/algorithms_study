function solution(land) {
  const n = land.length;
  const m = land[0].length;
  const oilArea = Array(n)
    .fill()
    .map(() => Array(m).fill(-1));
  const visited = Array(n)
    .fill()
    .map(() => Array(m).fill(false));
  const memo = new Map();

  const results = land[0].reduce((acc, cur, index) => {
    const drillingID = new Set();
    let totalVolume = 0;
    let depth = 0;

    while (depth < n) {
      if (land[depth][index] === 1) {
        if (!drillingID.has(oilArea[depth][index])) {
          totalVolume += calOil({ land, n, m }, index, depth, memo, oilArea, visited);

          drillingID.add(oilArea[depth][index]);
        }
      }
      depth++;
    }

    return [...acc, totalVolume];
  }, []);

  return Math.max(...results);
}

function calOil(landInfo, x, y, memo, oilArea, visited) {
  if (oilArea[y][x] !== -1) {
    return memo.get(oilArea[y][x]);
  }

  const { land, n, m } = landInfo;

  const id = memo.size;
  let result = 0;
  const queue = [[x, y]];
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  visited[y][x] = true;

  while (queue.length) {
    const [x, y] = queue.shift();
    if (land[y][x] === 1) {
      for (let i = 0; i < 4; i++) {
        const ny = y + dir[i][0];
        const nx = x + dir[i][1];
        const isValid = ny >= 0 && nx >= 0 && ny < n && nx < m;

        if (!isValid || visited[ny][nx]) {
          continue;
        }
        visited[ny][nx] = true;
        queue.push([nx, ny]);
      }
      result++;
      oilArea[y][x] = id;
    }
  }

  memo.set(id, result);

  return result;
}
