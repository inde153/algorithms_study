function solution(operations) {
  const result = [];
  operations.forEach((ele) => {
    const command = ele.split(' ');

    if (command[0] === 'I') {
      result.push(Number(command[1]));
    } else {
      if (command[1] === '1') {
        const index = result.indexOf(Math.max(...result));
        result.splice(index, 1);
      }
      if (command[1] === '-1') {
        const index = result.indexOf(Math.min(...result));
        result.splice(index, 1);
      }
    }
  });
  if (!result.length) {
    return [0, 0];
  }
  return [Math.max(...result), Math.min(...result)];
}
