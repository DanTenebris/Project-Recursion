const fibs = (n) => {
  const arr = [];
  let fN = 0;
  let sN = 1;
  arr.push(fN, sN);
  for (let i = 2; i < n; i++) {
    const result = fN + sN;
    fN = sN;
    sN = result;
    arr.push(sN);
  }

  return arr;
};

const fibsRec = (n, a = 0, b = 1) => {
  if(n <1) return [];

  const arr = [];
  const c = a + b;
  arr.push(a);
  const newArr = arr.concat(fibsRec(n-1, b, c));

  return  newArr;
};

console.log(fibsRec(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibsRec(8)); // [0, 1, 1,  2, 3, 5, 8, 13]