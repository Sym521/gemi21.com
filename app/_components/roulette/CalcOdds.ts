export interface WinningBet {
  bet: string;
  multiplier: number;
}

export const CalcOdds = (inputNumber: string): WinningBet[] => {
  const winList: { [key: string]: { win: boolean; multiplier: number } } = {
    low: { win: false, multiplier: 2 },
    high: { win: false, multiplier: 2 },
    even: { win: false, multiplier: 2 },
    odd: { win: false, multiplier: 2 },
    red: { win: false, multiplier: 2 },
    black: { win: false, multiplier: 2 },
    firstDozen: { win: false, multiplier: 3 },
    secondDozen: { win: false, multiplier: 3 },
    thirdDozen: { win: false, multiplier: 3 },
    firstColumn: { win: false, multiplier: 3 },
    secondColumn: { win: false, multiplier: 3 },
    thirdColumn: { win: false, multiplier: 3 },
    straightUp: { win: false, multiplier: 24 },
  };

  switch (inputNumber) {
    case "1":
      winList["odd"].win = true;
      winList["low"].win = true;
      winList["red"].win = true;
      winList["firstDozen"].win = true;
      winList["firstColumn"].win = true;
      break;
    case "2":
      winList["even"].win = true;
      winList["low"].win = true;
      winList["black"].win = true;
      winList["firstDozen"].win = true;
      winList["secondColumn"].win = true;
      break;
    case "3":
      winList["odd"].win = true;
      winList["low"].win = true;
      winList["red"].win = true;
      winList["firstDozen"].win = true;
      winList["thirdColumn"].win = true;
      break;
    case "4":
      winList["even"].win = true;
      winList["low"].win = true;
      winList["black"].win = true;
      winList["firstDozen"].win = true;
      winList["firstColumn"].win = true;
      break;
    case "5":
      winList["odd"].win = true;
      winList["low"].win = true;
      winList["red"].win = true;
      winList["firstDozen"].win = true;
      winList["secondColumn"].win = true;
      break;
    case "6":
      winList["even"].win = true;
      winList["low"].win = true;
      winList["black"].win = true;
      winList["firstDozen"].win = true;
      winList["thirdColumn"].win = true;
      break;
    case "7":
      winList["odd"].win = true;
      winList["low"].win = true;
      winList["red"].win = true;
      winList["firstDozen"].win = true;
      winList["firstColumn"].win = true;
      break;
    case "8":
      winList["even"].win = true;
      winList["low"].win = true;
      winList["black"].win = true;
      winList["firstDozen"].win = true;
      winList["secondColumn"].win = true;
      break;
    case "9":
      winList["odd"].win = true;
      winList["low"].win = true;
      winList["red"].win = true;
      winList["firstDozen"].win = true;
      winList["thirdColumn"].win = true;
      break;
    case "10":
      winList["even"].win = true;
      winList["low"].win = true;
      winList["black"].win = true;
      winList["firstDozen"].win = true;
      winList["firstColumn"].win = true;
      break;
    case "11":
      winList["odd"].win = true;
      winList["low"].win = true;
      winList["black"].win = true;
      winList["firstDozen"].win = true;
      winList["secondColumn"].win = true;
      break;
    case "12":
      winList["even"].win = true;
      winList["low"].win = true;
      winList["red"].win = true;
      winList["firstDozen"].win = true;
      winList["thirdColumn"].win = true;
      break;
    case "13":
      winList["odd"].win = true;
      winList["low"].win = true;
      winList["black"].win = true;
      winList["secondDozen"].win = true;
      winList["firstColumn"].win = true;
      break;
    case "14":
      winList["even"].win = true;
      winList["low"].win = true;
      winList["red"].win = true;
      winList["secondDozen"].win = true;
      winList["secondColumn"].win = true;
      break;
    case "15":
      winList["odd"].win = true;
      winList["low"].win = true;
      winList["black"].win = true;
      winList["secondDozen"].win = true;
      winList["thirdColumn"].win = true;
      break;
    case "16":
      winList["even"].win = true;
      winList["low"].win = true;
      winList["red"].win = true;
      winList["secondDozen"].win = true;
      winList["firstColumn"].win = true;
      break;
    case "17":
      winList["odd"].win = true;
      winList["low"].win = true;
      winList["black"].win = true;
      winList["secondDozen"].win = true;
      winList["secondColumn"].win = true;
      break;
    case "18":
      winList["even"].win = true;
      winList["low"].win = true;
      winList["red"].win = true;
      winList["secondDozen"].win = true;
      winList["thirdColumn"].win = true;
      break;
    case "19":
      winList["odd"].win = true;
      winList["high"].win = true;
      winList["red"].win = true;
      winList["secondDozen"].win = true;
      winList["firstColumn"].win = true;
      break;
    case "20":
      winList["even"].win = true;
      winList["high"].win = true;
      winList["black"].win = true;
      winList["secondDozen"].win = true;
      winList["secondColumn"].win = true;
      break;
    case "21":
      winList["odd"].win = true;
      winList["high"].win = true;
      winList["red"].win = true;
      winList["secondDozen"].win = true;
      winList["thirdColumn"].win = true;
      break;
    case "22":
      winList["even"].win = true;
      winList["high"].win = true;
      winList["black"].win = true;
      winList["secondDozen"].win = true;
      winList["firstColumn"].win = true;
      break;
    case "23":
      winList["odd"].win = true;
      winList["high"].win = true;
      winList["red"].win = true;
      winList["secondDozen"].win = true;
      winList["secondColumn"].win = true;
      break;
    case "24":
      winList["even"].win = true;
      winList["high"].win = true;
      winList["black"].win = true;
      winList["secondDozen"].win = true;
      winList["thirdColumn"].win = true;
      break;
    case "25":
      winList["odd"].win = true;
      winList["high"].win = true;
      winList["red"].win = true;
      winList["thirdDozen"].win = true;
      winList["firstColumn"].win = true;
      break;
    case "26":
      winList["even"].win = true;
      winList["high"].win = true;
      winList["black"].win = true;
      winList["thirdDozen"].win = true;
      winList["secondColumn"].win = true;
      break;
    case "27":
      winList["odd"].win = true;
      winList["high"].win = true;
      winList["red"].win = true;
      winList["thirdDozen"].win = true;
      winList["thirdColumn"].win = true;
      break;
    case "28":
      winList["even"].win = true;
      winList["high"].win = true;
      winList["black"].win = true;
      winList["thirdDozen"].win = true;
      winList["firstColumn"].win = true;
      break;
    case "29":
      winList["odd"].win = true;
      winList["high"].win = true;
      winList["black"].win = true;
      winList["thirdDozen"].win = true;
      winList["secondColumn"].win = true;
      break;
    case "30":
      winList["even"].win = true;
      winList["high"].win = true;
      winList["red"].win = true;
      winList["thirdDozen"].win = true;
      winList["thirdColumn"].win = true;
      break;
    case "31":
      winList["odd"].win = true;
      winList["high"].win = true;
      winList["black"].win = true;
      winList["thirdDozen"].win = true;
      winList["firstColumn"].win = true;
      break;
    case "32":
      winList["even"].win = true;
      winList["high"].win = true;
      winList["red"].win = true;
      winList["thirdDozen"].win = true;
      winList["secondColumn"].win = true;
      break;
    case "33":
      winList["odd"].win = true;
      winList["high"].win = true;
      winList["black"].win = true;
      winList["thirdDozen"].win = true;
      winList["thirdColumn"].win = true;
      break;
    case "34":
      winList["even"].win = true;
      winList["high"].win = true;
      winList["red"].win = true;
      winList["thirdDozen"].win = true;
      winList["firstColumn"].win = true;
      break;
    case "35":
      winList["odd"].win = true;
      winList["high"].win = true;
      winList["black"].win = true;
      winList["thirdDozen"].win = true;
      winList["secondColumn"].win = true;
      break;
    case "36":
      winList["even"].win = true;
      winList["high"].win = true;
      winList["red"].win = true;
      winList["thirdDozen"].win = true;
      winList["thirdColumn"].win = true;
      break;
    case "0":
      winList["straightUp"].win = true;
      break;
    case "00":
      winList["straightUp"].win = true;
      break;
    default:
      break;
  }

  // 当選した賭けとその倍率をオブジェクトとして返す
  return Object.keys(winList)
    .filter((key) => winList[key].win)
    .map((key) => ({
      bet: key,
      multiplier: winList[key].multiplier,
    }));
};
