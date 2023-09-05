// var person =new Object({
//     name:"Shradha Khatiwada",
//     age:21,
//     gender:"female"
// });

// var person2={
//     name:"Krisha",
//     age:16,
//     gender:"Female",
//     parent:{
//         name:"Sarmila,Krishna",
//         age:40
//     }
// };
// console.log(person,person2)

// var value=5;
// var value2=new Number(5);
// console.log(value,value2);

// var employees=[
//     {
//         id:1,
//         name:"Shradha",
//         Post:"SD",
//         age:21

//     },
//     {
//         id:2,
//         name:"Aashish",
//         Post:"Software Eng.",
//         age:22
//     },
// ];
// console.log(employees)

var records=[
    {
        symbolNum:211,
        Sign:"fdsagfd",
        name:"gfdbgfdsg"
        
    },
    {
        symbolNum:212,
        Sign:"fdd",
        name:"gfdsg"

    }
]
// console.log(records)
//arrayName.filter()
var recordIWant= records.filter(function(record,index){
    return record.symbolNum==211
})

console.log(recordIWant)

