let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;


// a will equal 2. It was passed into the array by value.

// b will equal [3,8] because it was passed by reference and then modified.