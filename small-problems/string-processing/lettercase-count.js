function letterCaseCount(string) {
  let totalCount = string.length;
  let upperCount = (string.match(/[A-Z]/g) || []).length;
  let lowerCount = (string.match(/[a-z]/g) || []).length;
  let neitherCount = totalCount - (upperCount + lowerCount);

  return { lowecase: lowerCount, uppercase: upperCount, neither: neitherCount };
}