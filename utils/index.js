/**
 * 换算分数
 * @param {*} score
 */
export const computeScore = (score) => {
  if (isNaN(Number(score))) {
    return 0
  }
  return (Number(score) / 10) * 5
}
/**
 * 每隔三位打点
 * @param {*} str
 */
export const formatNum = (str) => {
  let newStr = "";
  let count = 0;
  str = String(str);
  // 当数字是整数
  if (str.indexOf(".") === -1) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (count % 3 === 0 && count !== 0) {
        newStr = str.charAt(i) + "," + newStr;
      } else {
        newStr = str.charAt(i) + newStr;
      }
      count++;
    }
    str = newStr; //自动补小数点后两位
    return str;
  }
  // 当数字带有小数
  else {
    for (let i = str.indexOf(".") - 1; i >= 0; i--) {
      if (count % 3 === 0 && count !== 0) {
        newStr = str.charAt(i) + "," + newStr;
      } else {
        newStr = str.charAt(i) + newStr; //逐个字符相接起来
      }
      count++;
    }
    str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
    return str;
  }
}
