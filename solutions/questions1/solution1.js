function validBraces(braces) {
  const pairs = { "(": ")", "[": "]", "{": "}" };

  return (
    braces.split("").reduce((acc, cur) => {
      if (pairs[cur]) {
        return [...acc, cur];
      }
      return pairs[acc.pop()] === cur ? acc : [...acc, null];
    }, []).length === 0
  );
}
