function solution(sequence, k) {
  let start = 0;
  let end = 0;
  let sum = sequence[0];
  let minLength = Number.MAX_SAFE_INTEGER;
  let result = [];

  while (start < sequence.length) {
    if (sum === k) {
      if (end - start < minLength) {
        minLength = end - start;
        result = [start, end];
      }
      sum -= sequence[start];
      start++;
    } else if (sum < k || end === start) {
      end++;
      sum += sequence[end];
    } else {
      sum -= sequence[start];
      start++;
    }
  }

  return result;
}
