function solution(friends, gifts) {
  const map = new Map();
  //지수
  const indices = friends.reduce((acc, cur) => {
    return { ...acc, [cur]: 0 };
  }, {});

  friends.forEach((ele) =>
    map.set(
      ele,
      friends.reduce((acc, cur) => {
        return { ...acc, [cur]: 0 };
      }, {})
    )
  );

  gifts.forEach((cur) => {
    const [giver, reciever] = cur.split(' ');
    const friend = map.get(giver);

    friend[reciever]++;
    map.set(giver, friend);

    indices[giver]++;
    indices[reciever]--;
  });

  const result = friends.reduce((acc, cur) => {
    if (!acc.hasOwnProperty(cur)) {
      acc[cur] = 0;
    }

    const record = map.get(cur);

    for (const key in record) {
      const record2 = map.get(key);

      if (record[key] > record2[cur]) {
        acc[cur]++;
      } else if (record[key] === record2[cur]) {
        if (indices[cur] > indices[key]) {
          acc[cur]++;
        }
      }
    }

    return acc;
  }, {});

  return Math.max(...Object.values(result));
}
