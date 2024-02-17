function add(num:number):number{
num.toFixed
return num+2
}
console.log(add(1));

// here "function add(num:number):number" it means that function add should return a number

// arrow function
let func =(s:string):string=>{
return "returning a string"
}

function fullName(fName:string,Lname:string,isHe:boolean=true){}
fullName("jith","c")

const heros=["one","two","three"]

heros.map((hero):string=>{
return ""
})

function logErr (errMsg:string):void{
console.log(errMsg);
}
function handleErr (errMsg:string):never{
throw new Error(errMsg);
}
// void and never return anything