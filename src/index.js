module.exports = function check(str, bracketsConfig) {
  const newBrackets = bracketsConfig.map((el) => el.join(''));
  for (let i = 0; i < newBrackets.length; i++) {
    if (str.includes(newBrackets[i])) {
      str = str.replace(newBrackets[i], '');
      i = -1;
    }
  }
  return !str;
}
