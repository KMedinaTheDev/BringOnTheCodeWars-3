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


//my 1st attempt..didn't work pass all the test
// function list(names){
//   //
//   let string = "";
//   if(names === undefined){ //if object is empty, instead of undefined return an empty string
//   return string
//     }
//   //need a loop to run through each array element being passed in
//   for(let i=0; i < names.length; i++){
//   //I needed another conditional to make this work with more names
//   if(i >= names.length-2){
//     string += names[i]["name"] + "&" //so last two are seperated with ampersand
//     }
//     else{
//      string += names[i]["name"] + ','; //name is a property of each object!worked with one name
//     }
//   }
//   return string.slice(0, string.length-2)
// }
