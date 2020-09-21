function rot13(str) {
    let alphaChecker = /[A-Z]/;
    let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    let alphaArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      console.log(alphaChecker.test(str[i]))
      if (alphaChecker.test(str[i])) {
        let charIndex = alphaArr.indexOf(str[i]);
        let charNum = numArr[charIndex];
        console.log(charNum)
        for (let i = 1; i <= 13; i++) {
          charNum -= 1;
          if (charNum === 0) {
            charNum = 26;
          }
        }
        let newCharNum = charNum;
        let numIndex = numArr.indexOf(newCharNum);
        let newChar = alphaArr[numIndex];
        newStr += newChar;
      } else {
        newStr += str[i];
      }
    }
    
    return newStr;
  }