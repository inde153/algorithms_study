function solution(new_id) {
  const str = 'abcdefghijklmnopqrstuvwxyz0123456789-_.'.split('');

  let result = new_id
    .toLowerCase()
    .split('')
    .filter((ele) => str.includes(ele))
    .reduce((acc, cur) => (cur === '.' && cur === acc[acc.length - 1] ? acc : [...acc, cur]), [])
    .reduce((acc, cur, i, arr) => ((i === 0 || i === arr.length - 1) && cur === '.' ? acc : [...acc, cur]), []);
  if (result.length === 0) result.push('a');
  result = result.slice(0, 15);
  if (result[result.length - 1] === '.') result.pop();

  while (result.length <= 2) {
    result.push(result[result.length - 1]);
  }
  return result.join('');
}
