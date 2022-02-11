var myArray = [[1, 2],[3, 4, 5, [6, 7, 8, 9]]];
var myNewArray3 = [];
for (var i = 0; i < myArray.length; ++i) {
  for (var j = 0; j < myArray[i].length; ++j)
    myNewArray3.push(myArray[i][j]);
}
console.log(myNewArray3);


/* let nested_array = [ [1, 2, 3 ], [4, 5, 6 ]]
//  let nested_array = [1,3,[1,3,[1,3]]]

var flatten_array = [];

for (var i = 0; i < nested_array.length; ++i) {
  for (var j = 0; j < nested_array[i].length; ++j)
    flatten_array.push(nested_array[i][j]);
}

console.log(flatten_array)
 */

/* let nested_array = [1,3,[1,3,[1,3]]]

let new_array = [];

function convertArray(array) {
    array.forEach(element => {
        if(Array.isArray(element))
            convertArray(element)
        else
            new_array.push(element)
    });
    return new_array;
}
// create flatten array
var oneD_array = convertArray(nested_array)

console.log(oneD_array); */