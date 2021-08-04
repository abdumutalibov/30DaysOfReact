// // let arr =[1,2,3,4,5,6]
// // console.log(arr.length);
// // console.log(arr[0],arr[2],arr[5]);
// // const mixedDataTypes = ['called','Declare','python','Node','Redux','MongoDB','JavaScript']
// // console.log(mixedDataTypes.length);
// let itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']
// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(itCompanies[0],itCompanies[3],itCompanies[6]);
// console.log(itCompanies);

// console.log(itCompanies.join(',').toLocaleUpperCase());
// console.log(itCompanies.join(', '));

// if(itCompanies.includes('Appl'))
// console.log(itCompanies);
// else
// console.log('not found');
// sub = 'oo'
// console.log(itCompanies.includes(sub));
// // var myMessage = "Learning is fun!";
// // var arr1 = myMessage.split("");

// // function onlyLetters(array){
// //     let arr2 = []
// //     for(let i = 0; i < array.length; i++){
// //         if(array[i] === "a" || "b" || "c" || "d" || "e" 
// //         || "f" || "g" || "h" || "i" || "j" || "k" || "l" 
// //         || "m" || "n" || "o" || "p" || "q" || "r" || "s" 
// //         || "t" || "u" || "v" || "w" || "x" || "y" || "z"){
// //           arr2.push(array[i])
// //         }
// //     }
// //     return arr2
// // }

// // console.log(onlyLetters(myMessage))

// // let message = "Learning is fun!";
// // let onlyLettersArray = itCompanies.join(',').split('').filter(char => /[o]/.test(char));
// // console.log(onlyLettersArray)


// // var str = 'This is mWORDy word docuWORDment';
// var arr = itCompanies.join(',').split(" ").filter(o => o.includes("F"));

// console.log(arr);

// // const str = 'This is mWORDy word docuWORDment';
// const result = itCompanies.join(',').match(/\w*(oo)\w*/g);
// const result = itCompanies.join(',').match(/\w*(oo)\w*/g);

// console.log(result);


// const pattern = /\b([A-Za-z]+oo[A-Za-z]+)\b/gm;
// // const str = `This is mWORDy word docuWORDment`;
// let m;

// let matchedArr = [];

// while ((m = pattern.exec(itCompanies)) !== null) {
//   // Push the first captured group
//   matchedArr.push(m[1]);
// }

// console.log(matchedArr);


// var array =["Anna", "Bob", "Charles", "Daniel", "Allison", "Beatrice", "Cindy", "Fiona"];
// var matched_terms = [];
// var search_term = "an";
// search_term  = search_term.toLowerCase();
//            array.forEach(item => {
//                   if(item.toLowerCase().indexOf(search_term) !== -1 ){
//                   console.log(item);
//                   matched_terms.push( item ); 
//       }

// console.log(matched_terms);
//     })

//     const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.charAt('e') > 3);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


const countries = ['Norway', 'Sweden',  'Denmark', 'New Zealand'];

function firstN(){
  for (let i=0;i<countries.length;i++){
    countries[i].startsWith("N")
    }
}

let startsWithN = countries.filter(firstN())