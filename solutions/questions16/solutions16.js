function solution(edges) {
  const grahp = edges.reduce((acc, cur) => {
    const [from, to] = cur;
    if (!acc.has(from)) {
      acc.set(from, [1, 0]);
    } else {
      const [input, output] = acc.get(from);
      acc.set(from, [input + 1, output]);
    }
    if (!acc.has(to)) {
      acc.set(to, [0, 1]);
    } else {
      const [input, output] = acc.get(to);
      acc.set(to, [input, output + 1]);
    }
    return acc;
  }, new Map());

  const result = [...grahp.entries()].reduce(
    (acc, cur) => {
      const [vertex, [input, output]] = cur;
      if (2 <= input && output === 0) {
        acc[0] = vertex;
      } else if (input === 0) {
        acc[2]++;
      } else if (input >= 2 && output >= 2) {
        acc[3]++;
      }
      return acc;
    },
    [0, 0, 0, 0]
  );

  result[1] = grahp.get(result[0])[0] - result[2] - result[3];

  return result;
}

//생성정점 = 모든 정점 중 받는 간선이 0인 정점 (무조건 1개)
//모든 그래프의 갯수 = 생성정점의 보내는 간선 수
//막대그래프 갯수 = 모든 정점 중 보내는 간선이 0 인 정점
//8자그래프 갯수 = 모든 정점 중 보내는 간선이 2 이상 , 받는 간선이 2 이상인 정점
//도넛그래프 갯수 = 모든 그래프 갯수 - 막대그래프 갯수 - 8자 그래프 갯수
