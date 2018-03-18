function list(names) {
//empty array to hold names being passed
  let arr = [];
  //loop through each index of the array element (each is an object)
  for (let i = 0; i < names.length; i++) {
  // moving all the object names into an empty array(now able to use array methods)
  //for each object push the obejct's name property value into an array
    arr.push(names[i].name);
  }
  //if there is more than one object
  if (arr.length > 1) {

//  The pop() method removes the last element from an array and returns that element
// I had to remove the last element of the array because I needed and ampersand and not a 'comma' here.
// last is holding the value that is popping off the last element and adding an ampersand
    let last = ' & ' + arr.pop();


// to return a string otherwise it would return an array
    return arr.join(', ') + last;
  //this returns the array joined by commas then adds the variable last which pops off,
  // if it were arr.join('') the names would all be next to each other, the comman an space need ot be included
  } else {
  // The join() method joins all elements of an array into a string and returns the string.
    return arr.join();
  }
}
