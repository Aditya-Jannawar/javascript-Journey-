const name = 'adiirocks'
const repoCount = 4

//  console.log('my name is ' + name + ' and my repo count is ' + repoCount); ---> this method is older but still workable

// new method

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('abbyahubba') // with this string declaration we can unlock many methods 
// methods--->

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const sliceWalistring = gameName.slice(-8,4)// we can use -ve indexing here only'slice')
console.log(sliceWalistring)

const newStringone = "   aditya   "
console.log(newStringone);
console.log(newStringone.trim());// removes blank spaces

const url = "http://adijan.com//aditya%20jannawar"
// it is used fro replacing
console.log(url.replace('%20', '_'))

// to find out --word is in the string or not
console.log(url.includes('aditya'))//true


//splitting string using one of the keyword from the string
console.log(url.split("//")); // '//' is keyword for splitting 