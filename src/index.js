module.exports = function check(str, bracketsConfig) {
  // your solution
  const openSimbol = ['{'];
  const pareSimbols = {
     '}': '{'
  };
  let arr = [];
  
  bracketsConfig.forEach(el => {
     openSimbol.push(el[0])
     pareSimbols[el[1]] = el[0]
  });

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let lastSimbol = arr[arr.length - 1]

    if ((openSimbol.includes(currentSymbol))) {
      (lastSimbol === currentSymbol && pareSimbols[currentSymbol] === currentSymbol) ? arr.pop() : arr.push(currentSymbol);
    } else {
      if (arr.length === 0) {
        return false;
      } else if (pareSimbols[currentSymbol] === lastSimbol) {
        arr.pop();
      } else {
        return false;
      }
    }
  }

  return arr.length === 0
}
