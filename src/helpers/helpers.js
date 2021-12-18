export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//
export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
  return newNumber;
};

export const formatPriceKversion = (num) => {
  // var numbers = [98721, 9812730,37462,29,093484620123, 9732,0283737718234712]
  // for(let num of numbers){
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short",
  }).format(num);
};

// }
/**
98.7K
9.8M
37.5K
29
93.5B
9.7K
283.7T
*/
