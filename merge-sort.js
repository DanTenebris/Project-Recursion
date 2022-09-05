const mergeSort = (arrA) => {
  if (arrA.length > 1) {
    const newArrLength = Math.floor(arrA.length / 2);
    const arrB = arrA.splice(0, newArrLength);

    const bSorted = mergeSort(arrB);
    const aSorted = mergeSort(arrA);
    const arrC = [];

    const totalLength = aSorted.length + bSorted.length;

    for (let i = 0; i < totalLength; i++) {
      if (
        (aSorted[0] < bSorted[0] || bSorted[0] === undefined) &&
        aSorted.length
      ) {
        arrC.push(aSorted.shift());
      } else if (bSorted.length) {
        arrC.push(bSorted.shift());
      }
    }

    return arrC;
  }

  return arrA;
};

const arr = [36, 7, 1, 5, 8, 3, 2, 4, 6];

console.log(mergeSort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 36]
