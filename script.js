let arr = [
    {
        id: 1,
        name: 'Tulkin',
        age: 29,
        hairColor: 'blondy'
    },
    {
        id: 2,
        name: 'Bekzod',
        age: 22,
        hairColor: 'red'
    },
    {
        id: 3,
        name: 'Alisher',
        age: 18,
        hairColor: 'black'
    },
    {
        id: 4,
        name: 'Shoxrux',
        age: 25,
        hairColor: 'rijiy'
    },
    {
        id: 5,
        name: 'Muxammad',
        age: 16,
        hairColor: 'brown'
    },
    // {
    //     id: 6,
    //     name: 'Alisher',
    //     age: 28,
    //     hairColor: 'blue'
    // },
]


// let name = prompt('кого найти')




// for(let item of arr) {
//     if(item.name === name && item.id )  {
//   console.log(item.name,item.id);
  


//   let mustToDele = prompt()

//   let findet = arr.find(item => item.name === mustToDele)
  
//   let index = arr.indexOf(findet)
//   arr.splice(index,1)
//   console.log(arr);

//     }
   
// }


let name = prompt('кого хотите найти')
let age = prompt('сколько лет')
let finded = arr.find(item => item.name === name && item.age == age );
if(finded === undefined){
    alert(`В списке ${name}  с таким возрастом нет`)
} else if(confirm(`подтвердить  удаление  ${name}a`)){
    let index = arr.indexOf(finded);
    arr.splice(index,1);
    alert(`этот человек удолен ${name}а `)


}

console.log(arr);