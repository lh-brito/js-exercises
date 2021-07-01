// 2. A função myRemove(arr, item) recebe um array arr e retorna 
// uma cópia desse array sem o elemento item caso ele exista no array

const myRemove = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) if (item !== arr[i]) newArr.push(arr[i]);

  return newArr;
};

// const myRemove = (array, item) =>
//   array.map((arr) => {
//     if(arr !== item) return arr
//   });

console.log(myRemove([1, 2, 3, 4], 3));

module.exports = myRemove;
