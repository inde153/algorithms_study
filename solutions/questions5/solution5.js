function solution(babbling) {
  const vowels = ['aya', 'ye', 'woo', 'ma'];

  return babbling.reduce((acc, ele) => {
    for (const vowel of vowels) {
      if (ele.includes(vowel.repeat(2))) {
        return acc;
      }
      if (ele.includes(vowel)) {
        ele = ele.replaceAll(vowel, ' ');
      }
    }
    return ele.replaceAll(' ', '').length ? acc : acc + 1;
  }, 0);
}
