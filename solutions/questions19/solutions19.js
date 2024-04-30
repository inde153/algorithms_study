function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    const cnt = s.split('').filter((ele) => ele === '0').length;
    s = s.replaceAll('0', '');
    s = s.length.toString(2);
    answer[0]++;
    answer[1] += cnt;
  }
  return answer;
}
