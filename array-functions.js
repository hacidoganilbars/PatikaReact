//const users = ["Mehmet","Ahmet","Murat"];
const users = [
    {name:"Mehmet",age:18},
    {name:"Mehmet",age:29},
    {name:"Sevilay", age:40}
];

/*
    push
    map
    find
    filter
    some
    every
    includes
*/

//push
/*
users.push("Ayşe");
users.push("Fatma")
console.log(users);
*/


//map
/*
users.map((item)=>{
    console.log(item.name);
})
*/

//find
/*
const result = users.find((item)=>item.name === "Mehmet" && item.age>20);
console.log(result);
*/

//filter
/*
const filtered = users.filter(({name,age})=>name==="Mehmet" && age>20);
console.log(filtered)
*/

//some
/*
const result = users.some((item)=>item.age === 29);
console.log(result);
*/

//every
/*
const result = users.every((item)=>item.age>5);
console.log(result);
*/

//includes
const meyveler = ["elma","armut","muz"];
const isIncluded = meyveler.includes("muz")
console.log(isIncluded);


/*
const users = ["Mehmet", "Ahmet", "Murat"];
const newUserArray = ["Ayşe", ...users];
console.log("users",users);
console.log("newUserArray",newUserArray);

const country={
    name:"Türkiye"
};

const newCountryObj = {
    ...country,
    code:"TR"
}

console.log(country);
console.log(newCountryObj);
*/