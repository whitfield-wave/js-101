function percentInString(num, sum) {
  return String((num / sum * 100).toFixed(2));
}
function letterPercentages(string) {
  let total = string.length;
  let upperCount = (string.match(/[A-Z]/g) || []).length;
  let lowerCount = (string.match(/[a-z]/g) || []).length;
  let neitherCount = total - (upperCount + lowerCount);

  return {
    lowercase: percentInString(lowerCount, total),
    uppercase: percentInString(upperCount, total),
    neither: percentInString(neitherCount, total)
  };
}