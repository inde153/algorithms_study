function solution(s) {
  const arr = s.split('').map((ele) => ele.toUpperCase());
  const pCnt = arr.filter((ele) => ele === 'P').length;
  const yCnt = arr.filter((ele) => ele === 'Y').length;

  return pCnt === yCnt;
}
