const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

let result = people.some(elem => {

    (((new Date().getFullYear) - elem.year) >= 19)
})
console.log(result)
//every method will check at every element and returns true when every element returns true for the given condition otherwise returns false even if one is false but in some method it checks for every element and returns true if any one element is true and stops as soon as it returns true

let result2 = people.every(elem => ((new Date().getFullYear) - elem.year >= 19))
console.log(result2)
let comment=comments.find(elem=>{
    return (elem.id===823423)
})
console.log(comment);
let index=comments.findIndex(elem=>elem.id===823423)
console.log(index);
// comments.splice(index,1);
let newarr=[
    ...comments.slice(0,index),...comments.slice(index+1)
]
console.table(newarr);
