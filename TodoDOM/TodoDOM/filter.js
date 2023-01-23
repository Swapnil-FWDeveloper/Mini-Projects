let arr = [1, 2, 3, 4];
[];
// true:- element will be added
// false:- element won't be added

function myFilter(callback) {
  let filtered = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i) === true) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

console.log(
  myFilter(function (element, index) {
    if (element === 1) {
      return false;
    } else {
      return true;
    }
  })
);
