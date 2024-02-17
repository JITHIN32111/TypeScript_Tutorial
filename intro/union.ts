const pop:string| number=12

type newUser={
    name:string
    id:number
}
type newAdmin={
    userName:string
    id:number
}

let unionTest:newUser|newAdmin={name:"hallo",id:123}

function uni(name:string|number){
  
    // name.toLowerCase()
    // so here is the problem that we dont know its 
    // a string or number and when we perform string actions
    // and sending number it will show error in order to avoid that
    if(typeof name==="string"){
        name.toLowerCase()
    }
}
uni(22)


const datas:string[]=['1','2']
const uniDatas:string[]|number[]=[1,2,2]
// here either it can be full of number array or string array not mixed 
const mixDatas:(string|number)[]=[1,'2']
